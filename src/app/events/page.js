import React from "react";
import dynamic from "next/dynamic";

const Events = dynamic(() => import("@/src/components/events"), { ssr: false });

export default function Home() {
  return <Events />;
}
