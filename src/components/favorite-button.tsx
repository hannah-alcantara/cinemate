"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/contexts/favorites-context";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import type { Movie } from "@/lib/types";
import type { User } from "@supabase/supabase-js";

interface FavoriteButtonProps {
  movie: Movie;
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showText?: boolean;
}

export function FavoriteButton({ 
  movie, 
  variant = "ghost", 
  size = "icon", 
  className = "",
  showText = size !== "icon"
}: FavoriteButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { addToFavorites, removeFromFavorites, isMovieFavorite, refreshFavorites } = useFavorites();
  
  const isFavorite = isMovieFavorite(movie.id);

  // Listen for auth state changes and refresh favorites when user logs in
  useEffect(() => {
    const supabase = createClient();
    
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      
      // Refresh favorites when user logs in to ensure buttons show correct state
      if (event === 'SIGNED_IN') {
        await refreshFavorites();
      }
    });

    return () => subscription.unsubscribe();
  }, [refreshFavorites]);

  const handleToggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if button is inside a link
    e.stopPropagation();
    
    if (isLoading) return;

    // Check if user is authenticated
    if (!user) {
      toast.error("Login or signup to favorite movies", {
        action: {
          label: "Sign In",
          onClick: () => window.location.href = "/auth/login"
        }
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      if (isFavorite) {
        await removeFromFavorites(movie.id);
      } else {
        await addToFavorites(movie);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleToggleFavorite}
      disabled={isLoading}
      className={`${className}`}
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart 
        className={`${size === "lg" ? "h-5 w-5" : "h-4 w-4"} transition-colors ${
          isFavorite 
            ? "fill-red-500 text-red-500" 
            : "text-muted-foreground hover:text-red-500"
        }`} 
      />
      {showText && (
        <span>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</span>
      )}
      {!showText && (
        <span className="sr-only">
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </span>
      )}
    </Button>
  );
}