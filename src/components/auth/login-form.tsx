"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (formData: FormData) => {
    setIsLoading(true);
    setError(null);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        router.push("/home");
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className='w-full max-w-md mx-auto'>
      <CardHeader className='space-y-2 text-center'>
        <div className='flex justify-center my-6'>
          <Link
            href='/'
            className='flex items-center gap-2 font-bold font-oswald text-3xl'
          >
            <Film className='h-8 w-8' />
            <span>CINEMATE</span>
          </Link>
        </div>
        <CardTitle className='text-2xl'>Welcome back!</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <div className='mb-4 p-4 bg-neutral-700 bg-opacity-75 text-sm border-l-4 border-red-600'>
            {error}
          </div>
        )}
        <form action={handleLogin} className='space-y-6'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='name@example.com'
              required
            />
          </div>
          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <Label htmlFor='password'>Password</Label>
              <Link
                href='/auth/forgot-password'
                className='text-sm text-primary hover:underline'
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id='password'
              name='password'
              type='password'
              placeholder='••••••••'
              required
            />
          </div>
          <Button type='submit' className='w-full' disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className='flex justify-center'>
        <p className='text-sm text-muted-foreground'>
          Don&apos;t have an account?{" "}
          <Link href='/auth/signup' className='text-primary hover:underline'>
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
