import { UserPlaylists } from "@/components/user-playlists";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function PlaylistsPage() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='container px-4 py-12 mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
          <div>
            <h1 className='text-3xl font-bold tracking-tight'>
              Your Playlists
            </h1>
            <p className='text-muted-foreground'>
              Curate and share your favorite movie collections
            </p>
          </div>
          <Button className='gap-2'>
            <Plus className='w-4 h-4' /> Create New Playlist
          </Button>
        </div>

        <UserPlaylists />
      </div>
    </div>
  );
}
