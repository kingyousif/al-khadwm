import type React from "react";
import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Al-KHADWM Company - Airport Ground Handling Services",
  description:
    "AL-KHADWM, leading provider of Airport Ground Handling Services and Ground Support Equipment Operations in the Kurdistan Region and Iraq",

  icons: {
    icon: [
      {
        url: "/al-khadwm-logo.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/al-khadwm-logo.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/al-khadwm-logo.ico",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${roboto.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
