import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruth & Jhonatan | 23.10.2026",
  description: "Invitación digital de Ruth y Jhonatan.",
  openGraph: {
    title: "Ruth & Jhonatan | Nuestra Boda",
    description: "23 de octubre de 2026 · Oaxaca de Juárez",
    images: ["/fotos/foto1.jpeg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}