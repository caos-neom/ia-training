import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sitech | Ensino tecnico",
  description:
    "Conheca os cursos tecnicos, suas matrizes curriculares e as noticias da escola.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
