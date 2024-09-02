// components/ui/ClientNavbar.js

"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function ClientNavbar() {
  const pathname = usePathname();

  // Define las rutas donde no quieres mostrar el Navbar
  const noNavbarRoutes = ["/login"];

  return !noNavbarRoutes.includes(pathname) ? <Navbar /> : null;
}
