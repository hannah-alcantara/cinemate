"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import { getMovies } from "@/services/movie-service";
import { Movie } from "@/lib/types";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";

export function HeroSection() {
  const [movies, setMovies] = useState<Movie[]>([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      // setLoading(true);

      try {
        const data = await getMovies("popular");
        setMovies(data.results);
        console.log("movies: ", data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section>
      {movies.slice(0, 1).map((movie) => (
        <div
          key={movie.id}
          className='relative w-full h-[70vh] overflow-hidden'
        >
          <Image
            // fix: optimize loading image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt='Featured movie backdrop'
            fill
            className='object-cover brightness-50'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-t from-background to-transparent' />
          <div className='container relative h-full flex flex-col justify-end pb-16 px-4'>
            <div className='max-w-3xl space-y-4'>
              <h1 className='text-4xl md:text-6xl font-bold text-white'>
                {movie.title}
              </h1>
              {/* ADD: button to shorten description */}
              <p className='text-lg text-white/90 max-w-xl'>{movie.overview}</p>

              <div className='flex flex-wrap gap-3'>
                <Button size='lg' className='gap-2'>
                  {/* ADD: Video link */}
                  <Play className='w-5 h-5' /> Watch Trailer
                </Button>
                <Button size='lg' variant='secondary'>
                  Add to Playlist
                </Button>
              </div>
              {/* add: genres from api */}
              <div className='flex gap-3 text-white/80 text-sm'>
                <span>Action</span>
                <span>•</span>
                <span>Adventure</span>
                <span>•</span>
                <span>Sci-Fi</span>
                <span>•</span>
                <span>166 min</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
