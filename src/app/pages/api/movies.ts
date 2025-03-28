// import type { NextApiRequest, NextApiResponse } from "next";
// import { fetchMovies } from "@/services/tmdbService";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const type = req.query.type as string;

//   if (!type) {
//     return res
//       .status(400)
//       .json({
//         error: "Missing type parameter (trending, popular, now_playing)",
//       });
//   }

//   try {
//     const data = await fetchMovies(type);
//     res.status(200).json(data);
//   } catch (error) {
//     res
//       .status(500)
//       .json({
//         error: error instanceof Error ? error.message : "Unknown error",
//       });
//   }
// }
