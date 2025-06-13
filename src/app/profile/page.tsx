import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlaylists } from "@/components/user-playlists";

export default async function ProfilePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  // return (
  //   <div>
  //     <p>Hello {data.user.email}</p>;
  //   </div>
  // );
  return (
    <div className='min-h-screen bg-background'>
      <div className='container px-4 py-8 mx-auto space-y-8'>
        <div className='flex flex-col md:flex-row gap-8 items-start'>
          <div className='w-full md:w-1/3 lg:w-1/4'>
            <Card>
              <CardHeader className='flex flex-col items-center'>
                <Avatar className='h-24 w-24'>
                  <AvatarImage src='/placeholder.svg' alt='User' />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <CardTitle className='mt-4'>John Doe</CardTitle>
                <CardDescription>Movie Enthusiast</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex justify-between text-sm'>
                  <span className='text-muted-foreground'>Member since</span>
                  <span>March 2023</span>
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-muted-foreground'>Movies watched</span>
                  <span>127</span>
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-muted-foreground'>Playlists</span>
                  <span>3</span>
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-muted-foreground'>Reviews</span>
                  <span>42</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className='w-full'>Edit Profile</Button>
              </CardFooter>
            </Card>
          </div>

          <div className='w-full md:w-2/3 lg:w-3/4'>
            <h2 className='text-2xl font-bold mb-6'>Your Playlists</h2>
            <UserPlaylists />
          </div>
        </div>
      </div>
    </div>
  );
}
