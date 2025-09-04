// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, Edit, Share2 } from "lucide-react";
// import { MovieCard } from "@/components/movie-card";
// import { getPlaylistDetails } from "@/lib/movie-service";

// interface PlaylistPageProps {
//   params: {
//     id: string;
//   };
// }

// export default async function PlaylistPage({ params }: PlaylistPageProps) {
//   const playlist = await getPlaylistDetails(params.id);

//   if (!playlist || !playlist.movies) {
//     notFound();
//   }

//   return (
//     <div className='min-h-screen bg-background'>
//       <div className='relative w-full h-[40vh] overflow-hidden'>
//         <Image
//           src={playlist.coverUrl || "/placeholder.svg"}
//           alt={playlist.name}
//           fill
//           className='object-cover brightness-50'
//           priority
//         />
//         <div className='absolute inset-0 bg-gradient-to-t from-background to-transparent' />
//         <div className='container relative h-full flex flex-col justify-end pb-8 px-4'>
//           <Link href='/playlists' className='mb-auto mt-6'>
//             <Button variant='ghost' size='sm' className='gap-2'>
//               <ArrowLeft className='h-4 w-4' /> Back to Playlists
//             </Button>
//           </Link>
//           <div className='max-w-3xl space-y-4'>
//             <h1 className='text-3xl md:text-5xl font-bold text-white'>
//               {playlist.name}
//             </h1>
//             <p className='text-white/80'>{playlist.description}</p>
//             <div className='flex items-center gap-4 text-sm text-white/70'>
//               <span>{playlist.movies.length} movies</span>
//               <span>•</span>
//               <span>Last updated {playlist.lastUpdated}</span>
//             </div>
//             <div className='flex flex-wrap gap-3'>
//               <Button className='gap-2'>
//                 <Edit className='w-4 h-4' /> Edit Playlist
//               </Button>
//               <Button variant='outline' className='gap-2'>
//                 <Share2 className='w-4 h-4' /> Share
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='container px-4 py-12 mx-auto'>
//         {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
//           {playlist.movies.map((movie) => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// }
