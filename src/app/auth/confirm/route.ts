import { redirect } from "next/navigation";

export async function GET() {
  console.log("Email confirmation route accessed - email verification is disabled, redirecting to home");
  redirect("/home");
}
