import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Byron Nemeth — Guitarist · Author · AI Entrepreneur",
  description: "World-class guitar artistry meets cutting-edge AI innovation. Based in Las Vegas, Nevada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable} style={{ fontFamily: "var(--font-inter), sans-serif", margin: 0, padding: 0, backgroundColor: "#080808" }}>
        {children}
      </body>
    </html>
  );
}
