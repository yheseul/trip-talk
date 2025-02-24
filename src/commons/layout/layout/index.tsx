"use client";

import { ReactNode } from "react";
import Header from "../header";
import LayoutBanner from "../LayoutBanner";
import useLayout from "./hooks/useLayout";

export default function Layout({ children }: { children: ReactNode }) {
  const isHiddenHeader = useLayout();

  return (
    <div className="px-2 min-w-96">
      <Header />
      {isHiddenHeader && (
        <div className="w-full h-40 md:h-72 lg:h-96">
          <LayoutBanner />
        </div>
      )}
      {children}
    </div>
  );
}
