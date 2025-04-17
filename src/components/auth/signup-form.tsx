// import Link from "next/link";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";
// import { Film } from "lucide-react";
// import { useState } from "react";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";

// export default function SignupForm() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState([
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     agreeToTerms: false,
//   ])
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     agreeToTerms: "",
//   })

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     // if (!validateForm()) {
//     //   return;
//     // }

//     setIsLoading(true);
//   };

//   return (
//     <Card className='w-full max-w-md mx-auto'>
//       <CardHeader className='space-y-2 text-center'>
//         <div className='flex justify-center mb-4'>
//           <Link href='/' className='flex items-center gap-2 font-bold text-xl'>
//             <Film className='h-8 w-8' />
//             <span>Cinemate</span>
//           </Link>
//         </div>
//         <CardTitle className='text-2xl'>Create an account</CardTitle>
//         <CardDescription>Enter your information to get started</CardDescription>
//       </CardHeader>
//       <CardContent>
//       <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Full Name</Label>
//             <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} />
//             {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="name@example.com"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               name="password"
//               type="password"
//               placeholder="••••••••"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="confirmPassword">Confirm Password</Label>
//             <Input
//               id="confirmPassword"
//               name="confirmPassword"
//               type="password"
//               placeholder="••••••••"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//             {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
//           </div>
//           <div className="space-y-2">
//             <div className="flex items-center space-x-2">
//               <Checkbox id="terms" checked={formData.agreeToTerms} onCheckedChange={handleCheckboxChange} />
//               <Label htmlFor="terms" className="text-sm font-normal">
//                 I agree to the{" "}
//                 <Link href="/terms" className="text-primary hover:underline">
//                   terms of service
//                 </Link>{" "}
//                 and{" "}
//                 <Link href="/privacy" className="text-primary hover:underline">
//                   privacy policy
//                 </Link>
//               </Label>
//             </div>
//             {errors.agreeToTerms && <p className="text-sm text-destructive">{errors.agreeToTerms}</p>}
//           </div>
//           <Button type="submit" className="w-full" disabled={isLoading}>
//             {isLoading ? "Creating account..." : "Create account"}
//           </Button>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-center">
//         <p className="text-sm text-muted-foreground">
//           Already have an account?{" "}
//           <Link href="/auth/login" className="text-primary hover:underline">
//             Sign in
//           </Link>
//         </p>
//       </CardFooter>
//     </Card>
//   );
// }
