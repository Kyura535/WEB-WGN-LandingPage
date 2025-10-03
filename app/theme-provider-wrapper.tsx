"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";

export default function ThemeProviderWrapper({ 
  children 
}: { 
  children: ReactNode 
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}