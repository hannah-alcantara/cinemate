// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "./ui/button";
// import { MovieCard } from "@/components/movie-card";
// import { RefreshCw } from "lucide-react";
// import type { Movie } from "@/lib/types";
// import { getMovieCategory } from "@/services/movie-service";

// // import { getRecommendedMovies } from "@/services/movie-service";

// export default function RecommendedMovies({ category }) {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState(true);

//   // const fetchRecommendations = async () => {
//   //   setLoading(true);
//   //   try {
//   //     const data = await getRecommendedMovies(movieId);
//   //     setMovies(data);
//   //   } catch (error) {
//   //     console.error("Failed to fetch recommendations:", error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchRecommendations();
//   // }, []);

//   //TEMP FIX: Need to get recommended movies
//   useEffect(() => {
//     const fetchMovies = async () => {
//       setLoading(true);

//       try {
//         const data = await getMovieCategory(category);
//         setMovies(data.results);
//       } catch (error) {
//         console.error("Failed to fetch movies:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, [category]);

//   return (
//     <div>
//       <div className='flex justify-between items-center mb-4'>
//         <p className='text-muted-foreground'>
//           Personalized recommendations based on your viewing history
//         </p>
//         <Button
//           variant='ghost'
//           size='sm'
//           className='gap-2'
//           // onClick={fetchRecommendations}
//           disabled={loading}
//         >
//           <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
//           Refresh
//         </Button>
//       </div>

//       {/* {loading ? (
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
//           {Array.from({ length: 5 }).map((_, i) => (
//             <div
//               key={i}
//               className='aspect-[2/3] rounded-md bg-muted animate-pulse'
//             />
//           ))}
//         </div>
//       ) : (
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
//           {movies.map((movie) => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}
//         </div>
//       )} */}

//       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// }
