"use client";

import { ReactNode } from "react";
import Header from "../header";
import LayoutBanner from "../LayoutBanner";
import useLayout from "./hooks/useLayout";

export default function Layout({ children }: { children: ReactNode }) {
  const isHiddenHeader = useLayout();

  return (
    <div>
      <Header />
      {isHiddenHeader && <LayoutBanner />}
      {children}
    </div>
  );
}
