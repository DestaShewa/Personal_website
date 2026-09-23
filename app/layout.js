import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://desta-portfolio.vercel.app"),
  title: "Desta | Full-Stack Web Developer",
  description: "I build modern, responsive web applications with React, Next.js, Node.js, and PostgreSQL. Available for freelance and employment.",
  openGraph: {
    title: "Desta | Full-Stack Web Developer",
    description: "I build modern, responsive web applications with React, Next.js, Node.js, and PostgreSQL.",
    url: "https://desta-portfolio.vercel.app",
    siteName: "Desta Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
