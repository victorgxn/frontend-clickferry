import type { Metadata } from "next";
import { Nunito } from "next/font/google";
// CSS
import "./globals.css";
import "slick-carousel/slick/slick.css";
// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Clickferry | Billetes de ferry y barco al mejor precio",
  description: "Comparador de ofertas de ferries a Baleares, Marruecos, Italia, Canarias... Reserva tu billete de ferry al mejor precio. Más de 8.000 opiniones positivas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-primary text-tertiary overflow-x-hidden  ${nunito.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
