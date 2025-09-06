"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { searchMovies } from "@/lib/movie-service";
import { Movie } from "@/lib/types";

interface SearchBoxProps {
  className?: string;
  placeholder?: string;
  showOnMobile?: boolean;
}

export function SearchBox({ 
  className, 
  placeholder = "Search movies...", 
  showOnMobile = true 
}: SearchBoxProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<Movie[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    try {
      const results = await searchMovies(query);
      setSearchResults(results.results?.slice(0, 5) || []);
      setShowResults(true);
    } catch (error) {
      console.error("Search failed:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleMovieSelect = (movieId: string) => {
    setShowResults(false);
    setSearchQuery("");
    router.push(`/movie/${movieId}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchResults.length > 0) {
      handleMovieSelect(searchResults[0].id);
    }
  };

  React.useEffect(() => {
    const handleClickOutside = () => {
      setShowResults(false);
    };

    if (showResults) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showResults]);

  return (
    <div 
      className={cn("relative", className)}
      onClick={(e) => e.stopPropagation()}
    >
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className={cn(
          "w-full bg-background pl-8",
          !showOnMobile && "hidden md:block"
        )}
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      
      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-y-auto z-50">
          {isSearching ? (
            <div className="p-4 text-center text-muted-foreground">
              Searching...
            </div>
          ) : (
            searchResults.map((movie) => (
              <button
                key={movie.id}
                onClick={() => handleMovieSelect(movie.id)}
                className="w-full text-left p-3 hover:bg-accent flex items-center gap-3"
              >
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                    alt={movie.title}
                    className="w-8 h-12 object-cover rounded"
                  />
                )}
                <div>
                  <div className="font-medium">{movie.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {movie.release_date?.split('-')[0]}
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}