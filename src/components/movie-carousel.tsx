"use client";

import { Button } from "@/components/ui/button";
import { Movie } from "@/lib/types";
import { cn } from "@/lib/utils";
import { getMovieCategory } from "@/lib/movie-service";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export function MovieCarousel() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [autoplay, setAutoplay] = useState(true);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const featuredMovies = await getMovieCategory("trending");
      setMovies(featuredMovies.results);
      // console.log(featuredMovies.results);
    } catch (error) {
      console.error("Failed to fetch featured movies:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const visibleMovies = movies.slice(0, 4);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % visibleMovies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, visibleMovies]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);

    //pause autoplay briefly when manually navigating
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? visibleMovies.length - 1 : prevIndex - 1
    );
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % visibleMovies.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  if (loading) {
    return (
      <div className='relative w-full h-[70vh] bg-muted animate-pulse'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin'></div>
        </div>
      </div>
    );
  }

  if (visibleMovies.length === 0) {
    return null;
  }

  return (
    <div className='relative w-full h-[70vh] overflow-hidden group'>
      <div
        className='h-full transition-transform duration-500 ease-out flex'
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          // width: `${visibleMovies.length * 100}%`,
        }}
      >
        {movies.map((movie, index) => (
          <div key={movie.id} className='relative w-full h-full flex-shrink-0'>
            <Image
              // fix: optimize loading image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              fill
              className='object-cover brightness-50'
              priority={index === 0}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-background to-transparent' />
            <div className='container relative h-full flex flex-col justify-end pb-16 px-4'>
              <div className='max-w-3xl space-y-4'>
                <h1 className='text-4xl md:text-6xl font-bold text-white'>
                  {movie.title}
                </h1>
                <p className='text-lg text-white/90 max-w-xl'>
                  {movie.overview}
                </p>

                <div className='flex flex-wrap gap-3'>
                  <Button size='lg' className='gap-2' asChild>
                    <Link href={`/movie/${movie.id}`}>View Details</Link>
                  </Button>
                  <Button size='lg' variant='secondary'>
                    Add to Playlist
                  </Button>
                </div>
                {/* <div className="flex gap-3 text-white/80 text-sm">
                  {movie.genres.map((genre) => (
                    <span key={genre}>{genre}</span>
                  ))}
                  <span>•</span>
                  <span>{movie.duration}</span>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant='ghost'
        size='icon'
        className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity'
        onClick={goToPrevSlide}
      >
        <ChevronLeft className='h-6 w-6' />
        <span className='sr-only'>Previous</span>
      </Button>

      <Button
        variant='ghost'
        size='icon'
        className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity'
        onClick={goToNextSlide}
      >
        <ChevronRight className='h-6 w-6' />
        <span className='sr-only'>Next</span>
      </Button>

      {/* Indicators */}
      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2'>
        {visibleMovies.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all",
              index === currentIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
