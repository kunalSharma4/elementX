import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ELEMENT X",
  description: "The pinnacle of digital world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
