"use client";

// import type { Metadata } from "next";
import { Oswald, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainNav } from "../components/main-nav";
import { ThemeProvider } from "../components/theme-provider";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Cinemate",
//   description: "Your personal collection of cinematic masterpieces",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${oswald.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          {/* <MoodFilterProvider> */}
          <MainNav />
          <div className='pt-16'>{children}</div>
          {/* </MoodFilterProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
