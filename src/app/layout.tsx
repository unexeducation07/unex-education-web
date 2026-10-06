import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNEX Education",
  description: "Donde los mundos del aprendizaje se cruzan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
