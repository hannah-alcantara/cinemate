"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { getCurrentUser, logoutUser } from "@/lib/auth-service";
// import type { User as UserType } from "@/lib/types";
// import { toast } from "sonner";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

export default function AuthStatus() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await supabase.auth.signOut();
      router.push("/login");
      router.refresh();
    } finally {
      setIsLoggingOut(false);
    }
  };

  //   if (loading) {
  //   return (
  //     <Avatar>
  //       <AvatarFallback>
  //         <User className='h-5 w-5' />
  //       </AvatarFallback>
  //     </Avatar>
  //   );
  // }

  // if (!user) {
  //   return (
  //     <div className='flex items-center gap-2'>
  //       <Link href='/auth/login'>
  //         <Button variant='ghost' size='sm'>
  //           Sign In
  //         </Button>
  //       </Link>
  //       <Link href='/auth/signup'>
  //         <Button size='sm'>Sign Up</Button>
  //       </Link>
  //     </div>
  //   );
  // }
  return (
    <nav className='bg-white shadow-lg border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo/Brand */}
          <div className='flex items-center'>
            <a
              href={user ? "/private" : "/"}
              className='text-xl font-bold text-gray-900'
            >
              Cinemate
            </a>
          </div>

          {/* Authenticated Navigation */}
          {user ? (
            <>
              {/* Navigation Links */}
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <a
                    href='/private'
                    className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Dashboard
                  </a>
                  <a
                    href='/movies'
                    className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Movies
                  </a>
                  <a
                    href='/watchlist'
                    className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Watchlist
                  </a>
                </div>
              </div>

              {/* User Info & Logout */}
              <div className='flex items-center space-x-4'>
                <div className='flex items-center space-x-2'>
                  <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
                    <span className='text-white text-sm font-medium'>
                      {user.email?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className='text-gray-700 text-sm font-medium hidden sm:block'>
                    {user.email}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className='bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors'
                >
                  {isLoggingOut ? "Logging out..." : "Logout"}
                </button>
              </div>
            </>
          ) : (
            /* Non-authenticated Navigation */
            <div className='flex items-center space-x-4'>
              <a
                href='/about'
                className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              >
                About
              </a>
              <a
                href='/features'
                className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              >
                Features
              </a>
              <a
                href='/login'
                className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors'
              >
                Login
              </a>
            </div>
          )}
        </div>

        {/* Mobile menu for authenticated users */}
        {/* {user && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50'>
              <a
                href='/private'
                className='text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
              >
                Dashboard
              </a>
              <a
                href='/movies'
                className='text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
              >
                Movies
              </a>
              <a
                href='/watchlist'
                className='text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
              >
                Watchlist
              </a>
            </div>
          </div>
        )} */}
      </div>
    </nav>
  );
}

// return (
//   <DropdownMenu>
//     <DropdownMenuTrigger asChild>
//       <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
//         <Avatar className='h-8 w-8'>
//           <AvatarFallback>user email</AvatarFallback>
//         </Avatar>
//       </Button>
//     </DropdownMenuTrigger>
//     <DropdownMenuContent className='w-56' align='end' forceMount>
//       <DropdownMenuLabel className='font-normal'>
//         <div className='flex flex-col space-y-1'>
//           <p className='text-sm font-medium leading-none'>name</p>
//           <p className='text-xs leading-none text-muted-foreground'>email</p>
//         </div>
//       </DropdownMenuLabel>
//       <DropdownMenuSeparator />
//       <DropdownMenuItem asChild>
//         <Link href='/profile'>
//           <User className='mr-2 h-4 w-4' />
//           <span>Profile</span>
//         </Link>
//       </DropdownMenuItem>
//       <DropdownMenuItem asChild>
//         <Link href='/playlists'>
//           <span>My Playlists</span>
//         </Link>
//       </DropdownMenuItem>
//       <DropdownMenuSeparator />
//       <DropdownMenuItem onClick={handleLogout}>
//         <LogOut className='mr-2 h-4 w-4' />
//         <span>Log out</span>
//       </DropdownMenuItem>
//     </DropdownMenuContent>
//   </DropdownMenu>
// );
