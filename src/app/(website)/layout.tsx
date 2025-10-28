"use client";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <Navbar />

      <section>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
