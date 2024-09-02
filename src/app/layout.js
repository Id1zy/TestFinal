"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ClientNavbar from "/components/ui/ClientNavbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";

  return (
    <html lang="es">
      <body>
        {!isLoginPage && <ClientNavbar />}
        <div>{children}</div>
      </body>
    </html>
  );
}
