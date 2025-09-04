"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getFavoriteMovies, addToFavorites as addToFavoritesService, removeFromFavorites as removeFromFavoritesService } from "@/lib/movie-service";
import { createClient } from "@/utils/supabase/client";
import type { FavoriteMovie, Movie } from "@/lib/types";

interface FavoritesContextType {
  favorites: FavoriteMovie[];
  favoriteIds: Set<string>;
  isLoading: boolean;
  addToFavorites: (movie: Movie) => Promise<boolean>;
  removeFromFavorites: (movieId: string) => Promise<boolean>;
  isMovieFavorite: (movieId: string) => boolean;
  refreshFavorites: () => Promise<void>;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Load favorites on mount
  useEffect(() => {
    refreshFavorites();
  }, []);

  const refreshFavorites = async () => {
    setIsLoading(true);
    try {
      // Check if user is authenticated before loading favorites
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        // User not authenticated, clear favorites
        setFavorites([]);
        setFavoriteIds(new Set());
        return;
      }

      const favoritesData = await getFavoriteMovies();
      setFavorites(favoritesData);
      setFavoriteIds(new Set(favoritesData.map(fav => fav.movie_id)));
    } catch (error) {
      console.error("Error refreshing favorites:", error);
      // On error, clear favorites to be safe
      setFavorites([]);
      setFavoriteIds(new Set());
    } finally {
      setIsLoading(false);
    }
  };

  const addToFavorites = async (movie: Movie): Promise<boolean> => {
    try {
      // Client-side duplicate check
      if (favoriteIds.has(movie.id)) {
        console.log('Movie is already in favorites (client-side check)');
        return true; // Already favorited, no need to add again
      }

      const success = await addToFavoritesService(movie);
      if (success) {
        // Create a FavoriteMovie object from the Movie
        const favoriteMovie: FavoriteMovie = {
          id: `${movie.id}-${Date.now()}`, // Temporary ID until we refresh
          user_id: "", // Will be set by the service
          movie_id: movie.id,
          movie_title: movie.title,
          movie_poster_path: movie.poster_path,
          movie_release_date: movie.release_date,
          movie_vote_average: movie.vote_average,
          added_at: new Date().toISOString()
        };

        // Optimistically update local state only if not already present
        if (!favoriteIds.has(movie.id)) {
          setFavorites(prev => [favoriteMovie, ...prev]);
          setFavoriteIds(prev => new Set(prev).add(movie.id));
        }

        // Refresh to get the actual data from the database
        setTimeout(() => refreshFavorites(), 100);
      }
      return success;
    } catch (error) {
      console.error("Error adding to favorites:", error);
      return false;
    }
  };

  const removeFromFavorites = async (movieId: string): Promise<boolean> => {
    try {
      const success = await removeFromFavoritesService(movieId);
      if (success) {
        // Optimistically update local state
        setFavorites(prev => prev.filter(fav => fav.movie_id !== movieId));
        setFavoriteIds(prev => {
          const newSet = new Set(prev);
          newSet.delete(movieId);
          return newSet;
        });
      }
      return success;
    } catch (error) {
      console.error("Error removing from favorites:", error);
      return false;
    }
  };

  const isMovieFavorite = (movieId: string): boolean => {
    return favoriteIds.has(movieId);
  };

  const value: FavoritesContextType = {
    favorites,
    favoriteIds,
    isLoading,
    addToFavorites,
    removeFromFavorites,
    isMovieFavorite,
    refreshFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}