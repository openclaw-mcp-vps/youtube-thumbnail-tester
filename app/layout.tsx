import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThumbnailAB – A/B Test YouTube Thumbnails Automatically",
  description: "Automatically swap YouTube thumbnails, track CTR, and find winning designs. Built for YouTubers and content creators."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="692b27ec-fa91-479c-98b9-cdee4681c51e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
