"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FavoriteButton } from "@/components/favorite-button";
import type { Movie } from "@/lib/types";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  // Transform release_date to year
  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear().toString()
    : "";

  const rating = movie.vote_average.toFixed(1);

  // Create a slug from the movie title
  function createSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
      .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
  }

  // Construct poster URL
  // fix: optimize loading image
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.svg";

  return (
    <Card className='overflow-hidden group relative'>
      <Link
        href={`/movie/${movie.id}-${createSlug(movie.title)}`}
        className='absolute inset-0 z-10'
      >
        <span className='sr-only'>View {movie.title}</span>
      </Link>
      <div className='relative aspect-[2/3] overflow-hidden'>
        <Image
          src={posterUrl}
          alt={movie.title}
          width={500}
          height={750}
          className='object-cover transition-transform group-hover:scale-105'
        />

        <div className='absolute top-2 right-2 z-20'>
          <FavoriteButton
            movie={movie}
            variant='ghost'
            size='icon'
            className='rounded-full bg-black/50 text-white hover:bg-black/70'
          />
        </div>

        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex justify-between items-end'>
          <div className='flex items-center gap-1 text-white'>
            <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
            <span className='text-sm -medium'>{rating}</span>
          </div>
        </div>
      </div>
      <CardContent className='p-3'>
        <h3 className='font-semibold line-clamp-1 group-hover:text-primary transition-colors'>
          {movie.title}
        </h3>
        <p className='text-xs text-muted-foreground py-1'>{year}</p>
      </CardContent>
    </Card>
  );
}
