import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MovieGrid from "@/components/movie-grid";
// import RecommendedMovies from "@/components/recommended-movies"
// import { UserPlaylists } from "@/components/user-playlists"
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <HeroSection />
      <div className='container px-4 py-8 mx-auto space-y-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight'>
              Discover Movies
            </h2>
            <p className='text-muted-foreground'>
              Find your next favorite film
            </p>
          </div>
          <div>
            <Link href='/playlists'>
              <Button variant='outline'>My Playlists</Button>
            </Link>
          </div>
        </div>

        <Tabs defaultValue='in-theaters' className='w-full'>
          <TabsList className='grid w-full md:w-auto grid-cols-3'>
            <TabsTrigger value='in-theaters'>In Theaters</TabsTrigger>
            <TabsTrigger value='popular'>Popular</TabsTrigger>
            <TabsTrigger value='trending'>Trending</TabsTrigger>
          </TabsList>
          <TabsContent value='in-theaters'>
            <MovieGrid />
          </TabsContent>
          <TabsContent value='popular'>
            {/* <MovieGrid category='popular' /> */}
          </TabsContent>
          <TabsContent value='trending'>
            {/* <MovieGrid category='trending' /> */}
          </TabsContent>
        </Tabs>

        <div className='py-8'>
          <h2 className='text-2xl font-bold mb-6'>Recommended For You</h2>
          {/* <RecommendedMovies /> */}
        </div>

        <div className='py-8'>
          <h2 className='text-2xl font-bold mb-6'>Your Playlists</h2>
          {/* <UserPlaylists /> */}
        </div>
      </div>
    </div>
  );
}
