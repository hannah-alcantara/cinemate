import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest } from "next/server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  // console.log("Auth confirmation - token_hash:", token_hash);
  // console.log("Auth confirmation - type:", type);
  // console.log("Auth confirmation - next:", next);

  if (token_hash && type) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    console.log("OTP verification error:", error);

    if (!error) {
      console.log("Redirecting to:", next);
      redirect(next);
    }
  }

  // redirect the user to an error page with some instructions
  console.log("Redirecting to error page");
  redirect("/error");
}
