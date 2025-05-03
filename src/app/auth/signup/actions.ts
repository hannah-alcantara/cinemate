"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { signupSchema, type SignupFormValues } from "@/lib/schemas";

export async function signup(formData: SignupFormValues) {
  const supabase = await createClient();

  const { name, email, password } = formData;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  // if (error) {
  //   redirect("/error");
  // }

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  // revalidatePath("/", "layout");
  // redirect("/account");

  return {
    success: true,
    message:
      "Registration successful! Please check your email to confirm your account",
  };
}
