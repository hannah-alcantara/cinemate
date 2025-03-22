import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <div className='relative w-full h-[70vh] overflow-hidden'>
      <Image
        src='/placeholder.svg?height=1080&width=1920'
        alt='Featured movie backdrop'
        fill
        className='object-cover brightness-50'
        priority
      />
      <div className='absolute inset-0 bg-gradient-to-t from-background to-transparent' />
      <div className='container relative h-full flex flex-col justify-end pb-16 px-4'>
        <div className='max-w-3xl space-y-4'>
          <h1 className='text-4xl md:text-6xl font-bold text-white'>
            Dune: Part Two
          </h1>
          <p className='text-lg text-white/90 max-w-xl'>
            Paul Atreides unites with Chani and the Fremen while seeking revenge
            against the conspirators who destroyed his family.
          </p>
          <div className='flex flex-wrap gap-3'>
            <Button size='lg' className='gap-2'>
              <Play className='w-5 h-5' /> Watch Trailer
            </Button>
            <Button size='lg' variant='secondary'>
              Add to Playlist
            </Button>
          </div>
          <div className='flex gap-3 text-white/80 text-sm'>
            <span>Action</span>
            <span>•</span>
            <span>Adventure</span>
            <span>•</span>
            <span>Sci-Fi</span>
            <span>•</span>
            <span>166 min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
