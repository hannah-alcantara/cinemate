import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MovieGrid from "@/components/movie-grid";
import { MovieCarousel } from "@/components/movie-carousel";

export default async function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <MovieCarousel />
      <section className='container px-4 py-8 mx-auto space-y-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight'>
              Discover Movies
            </h2>
            <p className='text-muted-foreground'>
              Find your next favorite film
            </p>
          </div>
        </div>

        <Tabs defaultValue='now-playing' className='w-full'>
          <TabsList className='grid w-full md:w-auto grid-cols-3'>
            <TabsTrigger value='now-playing'>Now Playing</TabsTrigger>
            <TabsTrigger value='popular'>Popular</TabsTrigger>
            <TabsTrigger value='top-rated'>Top Rated</TabsTrigger>
          </TabsList>
          <TabsContent value='now-playing'>
            <MovieGrid category='now_playing' />
          </TabsContent>
          <TabsContent value='popular'>
            <MovieGrid category='popular' />
          </TabsContent>
          <TabsContent value='top-rated'>
            <MovieGrid category='top_rated' />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
