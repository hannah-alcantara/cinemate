"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const genres = [
  {
    title: "Action",
    href: "/movies/genre/action",
    description:
      "Thrilling action movies with high-octane sequences and adventure.",
  },
  {
    title: "Comedy",
    href: "/movies/genre/comedy",
    description: "Laugh-out-loud comedies that will brighten your day.",
  },
  {
    title: "Drama",
    href: "/movies/genre/drama",
    description:
      "Emotional and powerful stories that explore the human condition.",
  },
  {
    title: "Sci-Fi",
    href: "/movies/genre/sci-fi",
    description:
      "Futuristic tales exploring technology, space, and alternate realities.",
  },
  {
    title: "Horror",
    href: "/movies/genre/horror",
    description:
      "Spine-chilling horror films that will keep you on the edge of your seat.",
  },
  {
    title: "Romance",
    href: "/movies/genre/romance",
    description: "Love stories that capture the heart and imagination.",
  },
];

export function MainNav() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

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
                />
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
                    {genres.map((genre) => (
                      <Link
                        key={genre.title}
                        href={genre.href}
                        className='transition-colors hover:text-primary'
                      >
                        {genre.title}
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
                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                  {genres.map((genre) => (
                    <li key={genre.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={genre.href}
                          className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                        >
                          <div className='text-sm font-medium leading-none'>
                            {genre.title}
                          </div>
                          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                            {genre.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
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
            </NavigationMenuItem>
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
              />
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
          <Link href='/profile'>
            <Avatar>
              <AvatarFallback>
                <User className='h-5 w-5' />
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </div>
  );
}
