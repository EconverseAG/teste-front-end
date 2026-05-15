import type { Metadata } from "next";
import { Providers } from "@/src/shared/components/Providers/Providers";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Econverse Store | Tecnologia em destaque",
  description: "Vitrine responsiva de produtos de tecnologia criada para o teste técnico da Econverse.",
  metadataBase: new URL("https://econverse-test.local"),
  openGraph: {
    title: "Econverse Store",
    description: "Experiência e-commerce moderna com vitrine, modal de produto e foco em acessibilidade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
