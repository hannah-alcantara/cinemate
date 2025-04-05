import Image from "next/image";
import { getMovieDetails } from "@/services/movie-service";
import { Button } from "@/components/ui/button";
import { Heart, Play, Plus, Star } from "lucide-react";
import { notFound } from "next/navigation";

interface MovieDetailsProps {
  params: {
    id: string;
  };
}
//need to add types for movie details?

export default async function MovieDetals({ params }: MovieDetailsProps) {
  const movie = await getMovieDetails(params.id);

  // Transform release_date to year
  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear().toString()
    : "";

  if (!movie) {
    notFound();
  }
  return (
    <div className='min-h-screen bg-background'>
      <div className='relative w-full h-[70vh] overflow-hidden'>
        <h1 className='text-4xl md:text-6xl font-bold text-white'>
          {movie.title}
        </h1>
        <Image
          // fix: optimize loading image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
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
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-1 text-white'>
                <Star className='h-5 w-5 fill-yellow-400 text-yellow-400' />
                <span className='font-medium'>{movie.vote_average}/10</span>
              </div>
              <span className='text-white/80'>•</span>
              <span className='text-white/80'>{year}</span>
              <span className='text-white/80'>•</span>
              <span className='text-white/80'>{movie.runtime} min</span>
            </div>
            <div className='flex flex-wrap gap-2'>
              {movie.genres.map((genre: { id: number; name: string }) => (
                <span
                  key={genre.id}
                  className='px-3 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm'
                >
                  {genre.name}
                </span>
              ))}
            </div>
            {/* fix: optimize and add read more */}
            {movie.overview && (
              <p className='text-lg text-white/90 max-w-xl'>
                {movie.overview.split(". ")[0] + "."}
              </p>
            )}
            <div className='flex flex-wrap gap-3'>
              <Button size='lg' className='gap-2'>
                <Play className='w-5 h-5' /> Watch Trailer
              </Button>
              <Button size='lg' variant='secondary' className='gap-2'>
                <Plus className='w-5 h-5' /> Add to Playlist
              </Button>
              <Button size='lg' variant='outline' className='gap-2'>
                <Heart className='w-5 h-5' /> Add to Favorites
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
