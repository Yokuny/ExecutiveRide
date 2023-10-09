"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider } from "next-themes";
import { ProvidersProps } from "@/types";

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <ThemeProvider {...themeProps}>{children}</ThemeProvider>
    </NextUIProvider>
  );
}
