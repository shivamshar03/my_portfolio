import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";
import CursorWrapper from "@/components/CursorWrapper";

export const metadata: Metadata = {
  title: "Shivam Sharma — Software Developer | AI Enthusiast | Community Leader",
  description:
    "Portfolio of Shivam Sharma — Software Developer, AI/ML Enthusiast, Community Lead @ NexHub, Mentor @ Abhyudaya Coding Club. Building tomorrow's technology today.",
  keywords: ["Shivam Sharma", "AI/ML", "Python Developer", "NexHub", "Abhyudaya", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0a0a0f] text-slate-100">
        <ThemeProvider>
          <CursorWrapper />
          <div className="min-h-screen flex flex-col relative">
            <Header />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
