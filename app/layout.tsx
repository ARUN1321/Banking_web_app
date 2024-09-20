import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google"
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-ibm-plex-serif' })

export const metadata: Metadata = {
  title: "WorldBank",
  description: "WorldBank is a global banking system used by everyone in every corner of world.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
