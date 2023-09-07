import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "favicon.ico",
  },
  title: "Google Clone",
  description: "Google clone using next js13 ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
