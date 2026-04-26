import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Wendell Murdock — The Night Walker",
  description:
    "Long walks. Endless snacks. Pokémon in the darkness. He is the night.",
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
