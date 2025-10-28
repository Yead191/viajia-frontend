"use client";
import { Trans, useTranslation } from "react-i18next";
import { spirax } from "@/constants/spirax";
import { FEATURES } from "@/constants/features"; // icons
import Image from "next/image";

export function WhyChooseUs() {
  const { t } = useTranslation();

  // Load translated features
  const features = t("whyChooseUs.features", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="pb-8 md:pb-24 px-4 md:px-5 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Circular Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-80 h-80 md:w-96 md:h-96 2xl:w-[500px] 2xl:h-[500px]">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: `0px 20px 32px 0px rgba(0, 188, 209, 0.25), 0px 2px 8px 0px rgba(0, 188, 209, 0.5)`,
              }}
            >
              <Image
                src="https://i.ibb.co.com/m5sxHY0p/73835371421e1be97f4fbe07e4a986a2e4390c9c.jpg"
                alt={t("whyChooseUs.heading")}
                width={400}
                height={400}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-8">
          {/* Heading */}
          <div>
            <h2 className="section-title">
              <Trans
                i18nKey="whyChooseUs.heading"
                components={{
                  highlight: (
                    <span className={`text-primary ${spirax.className}`} />
                  ),
                }}
              />
            </h2>
            <p className="section-subtitle">{t("whyChooseUs.subtitle")}</p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${
                  index === 0 ? "bg-[#1C1C1E] rounded-xl shadow-2xl " : ""
                } p-4 flex gap-4`}
              >
                <div
                  className={`text-3xl shrink-0 flex items-center justify-center h-full ${
                    index === 0 ? "bg-[#0A0B0D]" : "bg-[#1C1C1E]"
                  } p-3 rounded-2xl`}
                >
                  {FEATURES[index]?.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
