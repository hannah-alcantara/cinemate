import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import MovieGrid from "@/components/movie-grid";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category;

  // Map URL slug to display name
  const categoryDisplayNames: Record<string, string> = {
    now_playing: "Now Playing",
    popular: "Popular",
    top_rated: "Top Rated",
    upcoming: "Upcoming",
  };

  const displayName = categoryDisplayNames[category];

  if (!displayName) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-background'>
      <div className='container px-4 py-8 mx-auto space-y-8'>
        <div className='flex flex-col gap-4'>
          <Link href='/'>
            <Button variant='ghost' size='sm' className='gap-2 -ml-2'>
              <ArrowLeft className='h-4 w-4' /> Back to Home
            </Button>
          </Link>

          <div>
            <h1 className='text-3xl font-bold tracking-tight'>
              {displayName} Movies
            </h1>
            <p className='text-muted-foreground'>
              {category === "now_playing" &&
                "Watch the latest movies currently in theaters."}
              {category === "popular" &&
                "Discover the most talked-about and trending films."}
              {category === "top_rated" &&
                "Explore the highest-rated movies of all time."}
              {category === "upcoming" &&
                "Stay updated on soon-to-be-released films."}
            </p>
          </div>
        </div>

        <MovieGrid category={category} />
      </div>
    </div>
  );
}
