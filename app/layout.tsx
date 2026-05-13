import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaskLab",
  description: "Lista de tarefas",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}