import { type NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  console.log("Email confirmation route accessed - email verification is disabled, redirecting to home");
  redirect("/home");
}
