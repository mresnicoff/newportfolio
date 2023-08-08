"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" >
      {children}
    </ThemeProvider>
  );
};

export default Providers;