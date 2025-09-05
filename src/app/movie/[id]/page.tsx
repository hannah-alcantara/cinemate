import Image from "next/image";
import { getMovieDetails } from "@/lib/movie-service";
import { FavoriteButton } from "@/components/favorite-button";
import { Star } from "lucide-react";
import { notFound } from "next/navigation";

interface MovieDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function MovieDetails({ params }: MovieDetailsProps) {
  const { id } = await params;

  const movie = await getMovieDetails(id);

  // Transform release_date to year
  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear().toString()
    : "";

  const rating = movie.vote_average.toFixed(1);

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
                <span className='font-medium'>{rating}</span>
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
              <FavoriteButton
                movie={movie}
                size='lg'
                variant='outline'
                className='gap-2'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container px-4 py-12 mx-auto'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='md:col-span-2 space-y-8'>
            <div>
              <h2 className='text-2xl font-bold mb-4'>About the Movie</h2>
              <p className='text-muted-foreground'>{movie.overview}</p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4'>Cast & Crew</h2>
              <div className='space-y-4'>
                <div>
                  <h3 className='font-medium'>Director</h3>
                  <p className='text-muted-foreground'>
                    {movie.director?.name}
                  </p>
                </div>
                <div>
                  <h3 className='font-medium'>Cast</h3>
                  <div className='flex flex-wrap gap-2 mt-2'>
                    {movie.cast?.map((actor) => (
                      <span
                        key={actor.id}
                        className='px-3 py-1 bg-muted rounded-full text-sm'
                      >
                        {actor.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='sticky top-8 space-y-6'>
              <div className='rounded-lg overflow-hidden'>
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className='w-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
