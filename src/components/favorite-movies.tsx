"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { MovieCard } from "@/components/movie-card";
import { useFavorites } from "@/contexts/favorites-context";
import type { Movie } from "@/lib/types";

export function FavoriteMovies() {
  const { favorites, isLoading: loading } = useFavorites();

  if (loading) {
    return (
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6'>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className='h-64 rounded-md bg-muted animate-pulse' />
        ))}
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
        <Link href='/home' className='text-primary hover:underline'>
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
