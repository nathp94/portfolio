import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: `Portfolio et notes de ${site.name}, ${site.role}.`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
