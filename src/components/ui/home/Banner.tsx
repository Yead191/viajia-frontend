"use client";
import Image from "next/image";
import { Button } from "antd";
import { PHOTO_CARDS } from "@/constants/photoCard";
import { Trans, useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();
  return (
    <section
      id="banner"
      className="relative min-h-[calc(100vh-24px)] bg-linear-to-b from-[#00BCD11F] via-[#00BCD100] to-[#0a0b0d] overflow-hidden flex flex-col items-center justify-center text-center px-4 py-20 mx-2 lg:mx-6 rounded-t-3xl mt-6 "
    >
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      {/* Top Photo Cards */}
      <div className="relative z-10 flex justify-center mb-10 pt-6 lg:pt-0">
        <div className="relative w-60 sm:w-[300px] h-[90px]">
          <div className="absolute left-2 top-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white shadow-lg rotate-[-10deg]">
            <Image
              src={PHOTO_CARDS[0].src}
              alt={PHOTO_CARDS[0].alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white shadow-lg  z-10">
            <Image
              src={PHOTO_CARDS[1].src}
              alt={PHOTO_CARDS[1].alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute right-2 top-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white shadow-lg rotate-10">
            <Image
              src={PHOTO_CARDS[2].src}
              alt={PHOTO_CARDS[2].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto mb-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          <Trans
            i18nKey="banner.heading"
            components={{ highlight: <span className="text-primary" /> }}
          />
        </h1>
      </div>

      {/* Description */}
      <div className="relative z-10 max-w-2xl mx-auto mb-10 space-y-3 text-slate-300">
        <p className="text-base sm:text-lg">
          <Trans
            i18nKey="banner.description1"
            components={{ highlight: <span className="text-primary" /> }}
          />
        </p>
        <p className="text-sm sm:text-base text-slate-400">
          {t("banner.description2")}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="large"
          className="bg-[#FFCB20]! hover:bg-yellow-500! border-none! text-slate-900! font-semibold!  h-12! rounded-xl"
        >
          {t("banner.cta.talkToValeria")}
        </Button>
        <Button
          size="large"
          type="default"
          className="border! border-primary! text-primary! hover:bg-cyan-400/10 font-semibold! h-12! rounded-xl bg-[#00BCD126]!"
        >
          {t("banner.cta.createItinerary")}
        </Button>
      </div>
    </section>
  );
}
