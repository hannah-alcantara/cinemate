"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MovieCard } from "@/components/movie-card";
import { useFavorites } from "@/contexts/favorites-context";
import { createClient } from "@/utils/supabase/client";
import type { Movie } from "@/lib/types";
import type { User } from "@supabase/supabase-js";

export function FavoriteMovies() {
  const { favorites, isLoading: loading } = useFavorites();
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setAuthLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (authLoading || loading) {
    return (
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6'>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className='h-64 rounded-md bg-muted animate-pulse' />
        ))}
      </div>
    );
  }

  if (!user) {
    return (
      <div className='flex flex-col items-center justify-center py-12 text-center'>
        <LogIn className='h-12 w-12 text-muted-foreground mb-4' />
        <h3 className='text-lg font-semibold mb-2'>Log in to see your favorite movies</h3>
        <p className='text-muted-foreground mb-6'>
          Sign in to start building your personal collection of favorite films.
        </p>
        <div className='flex items-center gap-3'>
          <Link href='/auth/login'>
            <Button>Sign In</Button>
          </Link>
          <Link href='/auth/signup'>
            <Button variant='outline'>Sign Up</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-12 text-center'>
        <Heart className='h-12 w-12 text-muted-foreground mb-4' />
        <h3 className='text-lg font-semibold mb-2'>No favorite movies yet</h3>
        <p className='text-muted-foreground mb-4'>
          Start adding movies to your favorites to see them here.
        </p>
        <Link href='/' className='text-primary hover:underline'>
          Discover movies to add
        </Link>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6'>
      {favorites.map((favorite) => {
        // Convert FavoriteMovie to Movie for MovieCard compatibility
        const movie: Movie = {
          id: favorite.movie_id,
          title: favorite.movie_title,
          overview: "", // Not needed for MovieCard
          poster_path: favorite.movie_poster_path,
          backdrop_path: null, // Not stored in favorites
          release_date: favorite.movie_release_date,
          vote_average: favorite.movie_vote_average,
          genres: [], // Not stored in favorites
          video: false,
          runtime: 0, // Not stored in favorites
        };

        return <MovieCard key={favorite.id} movie={movie} />;
      })}
    </div>
  );
}
