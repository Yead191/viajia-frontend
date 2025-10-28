import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import AntProvider from "@/lib/provider/AntProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "VIAJIA",
  description: "Organize your entire trip in a single app",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntProvider>
      <html lang="en">
        <body className={`${poppins.variable}  antialiased`}>
          <Toaster position="top-center" duration={2000} />
          {children}
        </body>
      </html>
    </AntProvider>
  );
}
