"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { getUserPlaylists } from "@/lib/movie-service";
import type { Playlist } from "@/lib/types";

export function UserPlaylists() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylists = async () => {
      setLoading(true);
      try {
        const data = await getUserPlaylists();
        setPlaylists(data);
      } catch (error) {
        console.error("Failed to fetch playlists:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  if (loading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className='h-48 rounded-md bg-muted animate-pulse' />
        ))}
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {playlists.map((playlist) => (
        <Link href={`/playlists/${playlist.id}`} key={playlist.id}>
          <Card className='h-full hover:shadow-md transition-shadow'>
            <div className='relative h-32 overflow-hidden rounded-t-md'>
              <Image
                src={playlist.coverUrl || "/placeholder.svg"}
                alt={playlist.name}
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
              <div className='absolute bottom-2 left-3 text-white'>
                <h3 className='font-semibold'>{playlist.name}</h3>
                <p className='text-xs text-white/80'>
                  {playlist.movieCount} movies
                </p>
              </div>
            </div>
            <CardContent className='p-3 text-sm text-muted-foreground'>
              <p className='line-clamp-2'>{playlist.description}</p>
            </CardContent>
            <CardFooter className='p-3 pt-0 text-xs'>
              Last updated {playlist.lastUpdated}
            </CardFooter>
          </Card>
        </Link>
      ))}

      <Card className='h-full border-dashed flex flex-col items-center justify-center p-6 hover:bg-muted/50 transition-colors cursor-pointer'>
        <div className='rounded-full bg-muted p-3 mb-3'>
          <Plus className='h-6 w-6 text-muted-foreground' />
        </div>
        <h3 className='font-medium'>Create New Playlist</h3>
        <p className='text-sm text-muted-foreground text-center mt-2'>
          Curate your own collection of favorite movies
        </p>
      </Card>
    </div>
  );
}
