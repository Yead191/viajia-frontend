import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import AntProvider from "@/lib/provider/AntProvider";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title:
    "VIAJIA & VIAJIA Lockers | Smart itineraries and luggage storage in Oviedo",
  description:
    "Plan your trips with AI thanks to VIAJIA. And store your luggage at VIAJIA Lockers, right in the center of Oviedo, near the train station.",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

// updated

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntProvider>
      <html lang="en">
        <head>
          <Script id="gtm-base" strategy="beforeInteractive">
            {`
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l !== 'dataLayer' ? '&l='+l : '';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KDW94K5B');
            `}
          </Script>
        </head>
        <body className={`${poppins.variable}  antialiased`}>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KDW94K5B"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          <Toaster position="top-center" duration={2000} />
          {children}
        </body>
      </html>
    </AntProvider>
  );
}
