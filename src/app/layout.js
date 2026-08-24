import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "VibeRoot Essentials | Premium Organic Powders Canada",
  description: "Experience 100% natural, lab-tested organic powders made from nature's finest ingredients. Vegan, gluten-free, and freshly ground for your health. Fast delivery across Canada.",
  keywords: "organic powder, raspberry powder, beetroot powder, wheatgrass, ginger powder, wellness, healthy recipes, Canada D2C",
  authors: [{ name: "VibeRoot Essentials Canada" }],
  openGraph: {
    title: "VibeRoot Essentials | Premium Organic Powders Canada",
    description: "Pure ingredients. Real nutrition. Freshly ground organic wellness powders delivered straight to your door in Canada.",
    type: "website",
    locale: "en_CA",
    url: "https://viberoot.ca",
    siteName: "VibeRoot Essentials",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
