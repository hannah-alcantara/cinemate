import { SignupForm } from "@/components/auth/signup-form";

export const metadata = {
  title: "Sign Up - Cinemate",
  description: "Sign in to your Cinemate account",
};

export default function SignupPage() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-12'>
      <SignupForm />
    </div>
  );
}
