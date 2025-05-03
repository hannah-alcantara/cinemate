"use client";

import { useState, useEffect } from "react";
import { MovieCard } from "@/components/movie-card";
import { Movie } from "@/lib/types";
import { getMovieCategory } from "@/lib/movie-service";

interface MovieGridProps {
  category: string;
}

export default function MovieGrid({ category }: MovieGridProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        const data = await getMovieCategory(category);
        setMovies(data.results);
        // console.log("Movie: ", data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category]);

  if (loading) {
    return (
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6'>
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className='aspect-[2/3] rounded-md bg-muted animate-pulse'
          />
        ))}
      </div>
    );
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6'>
      {movies.slice(0, 10).map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
