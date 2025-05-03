"use client";

import { signup as signupAction } from "@/app/auth/signup/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signupSchema, type SignupFormValues } from "@/lib/schemas";
import { Film } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function SignupForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupFormValues) => {
    setServerError(null);

    const result = await signupAction(data);

    if (result.success) {
      setSuccessMessage(result.message ?? "Registration successful!");
    } else {
      setServerError(result.error ?? "An error occurred during registration");
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
        <CardTitle className='text-2xl'>Create an account</CardTitle>
        <CardDescription>Enter your information to get started</CardDescription>
      </CardHeader>
      <CardContent>
        {/* refactor: change to toaster/sonner? */}
        <div className='max-w-md mx-auto'>
          {successMessage && (
            <div className='mb-4 p-4 bg-neutral-700 bg-opacity-75 text-sm border-l-4 border-green-600'>
              {successMessage}
            </div>
          )}

          {serverError && (
            <div className='mb-4 p-4 bg-neutral-700 bg-opacity-75 text-sm border-l-4 border-red-600'>
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div className='space-y-2'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' placeholder='Full Name' {...register("name")} />
              {errors.name && (
                <p className='text-sm text-destructive'>
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='name@example.com'
                {...register("email")}
              />
              {errors.email && (
                <p className='text-sm text-destructive'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='••••••••'
                {...register("password")}
              />
              {errors.password && (
                <p className='text-sm text-destructive'>
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className='space-y-2'>
              <Label htmlFor='confirmPassword'>Confirm Password</Label>
              <Input
                id='confirmPassword'
                type='password'
                placeholder='••••••••'
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className='text-sm text-destructive'>
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button type='submit' className='w-full' disabled={isSubmitting}>
              {isSubmitting ? "Creating account..." : "Create account"}
            </Button>
          </form>
        </div>
      </CardContent>
      <CardFooter className='flex justify-center'>
        <p className='text-sm text-muted-foreground'>
          Already have an account?{" "}
          <Link href='/auth/login' className='text-primary hover:underline'>
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
