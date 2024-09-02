"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
// Asegúrate de que esta ruta es correcta
import Events from "@/components/ui/events";

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => setShowLogin(!showLogin);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
     

      <Events />
    </div>
  );
}
