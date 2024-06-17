import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster, toast } from 'sonner'
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NourishEd",
  description: "website for meal program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
       <script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" defer/>
      </head>
      <body className={inter.className}>
      <Toaster position="top-center" richColors/>
      
        {children}
        <Script
        src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
        />
        </body>
    </html>
  );
}
