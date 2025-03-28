"use client";

import { useState, useEffect } from "react";
import { MovieCard } from "@/components/movie-card";
import type { Movie } from "@/lib/types";
import { fetchMovies } from "@/services/tmdbService";

export default function MovieGrid() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getMovies = async () => {
      setError("");
      try {
        const data = await fetchMovies("popular");
        setMovies(data.results);
      } catch (error) {
        console.error("Movie fetch error:", error);
        setError("Error fetching movies");
      }
    };

    getMovies();
  }, []);

  // if (loading) {
  //   return (
  //     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6'>
  //       {Array.from({ length: 9 }).map((_, i) => (
  //         <div
  //           key={i}
  //           className='aspect-[2/3] rounded-md bg-muted animate-pulse'
  //         />
  //       ))}
  //     </div>
  //   );
  // }

  // if (movies.length === 0) {
  //   return (
  //     <div className='py-12 text-center'>
  //       <p className='text-muted-foreground'>
  //         No movies found for the selected filters.
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
