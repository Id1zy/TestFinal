import React from "react";
import dynamic from "next/dynamic";

const Groups = dynamic(() => import("@/src/components/groups"), { ssr: false });

export default function Home() {
  return <Groups />;
}
