"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Movie } from "@/lib/types";
import { useState } from "react";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Transform release_date to year
  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear().toString()
    : "";

  // Construct poster URL
  // fix: optimize loading image
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.svg";

  return (
    <Card className='overflow-hidden group relative'>
      <Link href={`/movie/${movie.id}`} className='absolute inset-0 z-10'>
        <span className='sr-only'>View {movie.title}</span>
      </Link>
      <div className='relative aspect-[2/3] overflow-hidden'>
        <Image
          src={posterUrl}
          alt={movie.title}
          fill
          className='object-cover transition-transform group-hover:scale-105'
        />

        <div className='absolute top-2 right-2 z-20'>
          <Button
            variant='ghost'
            size='icon'
            className='rounded-full bg-black/50 text-white hover:bg-black/70'
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart
              className={`h-4 w-4 ${
                isFavorite ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </Button>
        </div>

        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex justify-between items-end'>
          <div className='flex items-center gap-1 text-white'>
            <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
            <span className='text-sm -medium'>{movie.vote_average}</span>
          </div>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full bg-black/50 text-white hover:bg-black/70 h-8 w-8'
              >
                <Plus className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>Add to Watchlist</DropdownMenuItem>
              <DropdownMenuItem>Add to Favorites</DropdownMenuItem>
              <DropdownMenuItem>Add to Custom Playlist</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
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
