//import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "Minha primeira aplicação",
  description: "Aplicação de front end 2",
  charset: 'UTF-8',
  author: 'Maria eduarda',
  keywords: 'HTML, CSS, JavaSvript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
       <Header></Header>
        {children}
      </body>
    </html>
  );
}
