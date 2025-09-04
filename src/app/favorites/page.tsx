import { FavoriteMovies } from "@/components/favorite-movies";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='container px-4 py-12 mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
          <div>
            <h1 className='text-3xl font-bold tracking-tight flex items-center gap-2'>
              Your Favorites
            </h1>
            <p className='text-muted-foreground'>
              All your favorite movies in one place
            </p>
          </div>
        </div>

        <FavoriteMovies />
      </div>
    </div>
  );
}
