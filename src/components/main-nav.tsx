"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Film, Home, ListVideo, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AuthStatus from "./auth-status";
import { getMovieCategory } from "@/lib/movie-service";

const category = [
  {
    title: "Now Playing",
    href: "/movies/now_playing",
    description: "Watch the latest movies currently in theaters.",
  },
  {
    title: "Popular",
    href: "/movies/popular",
    description: "Discover the most talked-about and trending films.",
  },
  {
    title: "Top Rated",
    href: "/movies/top_rated",
    description: "Explore the highest-rated movies of all time.",
  },
  {
    title: "Upcoming",
    href: "/movies/upcoming",
    description: "Stay updated on soon-to-be-released films.",
  },
];

export function MainNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [showResults, setShowResults] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);

  // Fetch movies on component mount
  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularMovies = await getMovieCategory("popular");
        // Limit to 20 movies
        setAllMovies(popularMovies.results.slice(0, 20));
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    // Filter local movies by title
    const filteredMovies = allMovies.filter((movie: any) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredMovies);
    setShowResults(true);
  };

  const debouncedSearch = React.useCallback(
    React.useMemo(
      () => {
        let timeoutId: NodeJS.Timeout;
        return (query: string) => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => handleSearch(query), 300);
        };
      },
      [allMovies]
    ),
    [allMovies]
  );

  React.useEffect(() => {
    if (searchQuery) {
      debouncedSearch(searchQuery);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery, debouncedSearch]);

  const handleMovieSelect = (movieId: number) => {
    router.push(`/movie/${movieId}`);
    setSearchQuery("");
    setShowResults(false);
    setIsSearchOpen(false);
  };

  return (
    <div className='fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center'>
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className='md:hidden'>
              <span className='sr-only'>Toggle menu</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6'
              >
                <line x1='4' x2='20' y1='12' y2='12' />
                <line x1='4' x2='20' y1='6' y2='6' />
                <line x1='4' x2='20' y1='18' y2='18' />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='w-[300px] sm:w-[400px] p-6'>
            <div className='flex flex-col gap-6 py-4'>
              <Link
                href='/'
                className='flex items-center gap-2 font-bold text-xl'
              >
                <Film className='h-6 w-6' />
                <span className='font-oswald'>CINEMATE</span>
              </Link>
              <div className='relative'>
                <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                  type='search'
                  placeholder='Search movies...'
                  className='w-full bg-background pl-8'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {showResults && searchResults.length > 0 && (
                  <div className='absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-y-auto z-50'>
                    {searchResults.slice(0, 5).map((movie: any) => (
                      <div
                        key={movie.id}
                        className='p-3 hover:bg-accent cursor-pointer flex items-center gap-3'
                        onClick={() => handleMovieSelect(movie.id)}
                      >
                        {movie.poster_path && (
                          <img
                            src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                            alt={movie.title}
                            className='w-8 h-12 object-cover rounded'
                          />
                        )}
                        <div>
                          <div className='font-medium text-sm'>{movie.title}</div>
                          <div className='text-xs text-muted-foreground'>
                            {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <nav className='flex flex-col space-y-4'>
                <Link
                  href='/'
                  className={cn(
                    "flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/" ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <Home className='h-5 w-5' />
                  Home
                </Link>
                <div className='flex flex-col space-y-2'>
                  <span className='flex items-center gap-2 text-lg font-medium'>
                    <Film className='h-5 w-5' />
                    Movies
                  </span>
                  <div className='ml-7 flex flex-col space-y-2 text-muted-foreground'>
                    {category.map((section) => (
                      <Link
                        key={section.title}
                        href={section.href}
                        className='transition-colors hover:text-primary'
                      >
                        {section.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href='/playlists'
                  className={cn(
                    "flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/playlists"
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <ListVideo className='h-5 w-5' />
                  Playlists
                </Link>
                <Link
                  href='/profile'
                  className={cn(
                    "flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/profile"
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <User className='h-5 w-5' />
                  Profile
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link
          href='/'
          className='flex items-center gap-2 font-bold text-xl mr-6'
        >
          <Film className='h-6 w-6' />
          <span className='hidden sm:inline-block font-oswald'>CINEMATE</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className='hidden md:flex'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href='/' legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    pathname === "/"
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Movies</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[450px] gap-3 p-4 md:w-[520px] md:grid-cols-2 lg:w-[600px]'>
                  {category.map((section) => (
                    <li key={section.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={section.href}
                          className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                        >
                          <div className='text-sm font-medium leading-none'>
                            {section.title}
                          </div>
                          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                            {section.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <Link href='/playlists' legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    pathname === "/playlists"
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground"
                  )}
                >
                  Playlists
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search and User Profile */}
        <div className='ml-auto flex items-center gap-4'>
          <div
            className={cn(
              "relative",
              isSearchOpen ? "w-full md:w-64" : "w-0 md:w-64"
            )}
          >
            <div
              className={cn(
                "transition-all duration-300 ease-in-out",
                isSearchOpen ? "opacity-100" : "opacity-0 md:opacity-100"
              )}
            >
              <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Search movies...'
                className={cn(
                  "w-full bg-background pl-8",
                  isSearchOpen ? "block" : "hidden md:block"
                )}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {showResults && searchResults.length > 0 && (
                <div className='absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-y-auto z-50'>
                  {searchResults.slice(0, 5).map((movie: any) => (
                    <div
                      key={movie.id}
                      className='p-3 hover:bg-accent cursor-pointer flex items-center gap-3'
                      onClick={() => handleMovieSelect(movie.id)}
                    >
                      {movie.poster_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                          alt={movie.title}
                          className='w-8 h-12 object-cover rounded'
                        />
                      )}
                      <div>
                        <div className='font-medium text-sm'>{movie.title}</div>
                        <div className='text-xs text-muted-foreground'>
                          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className='h-5 w-5' />
            <span className='sr-only'>Search</span>
          </Button>
          <AuthStatus />
        </div>
      </div>
    </div>
  );
}
