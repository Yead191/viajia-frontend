import { spirax } from "@/constants/spirax";
import { AnimatedPhotos, CTAButtons } from "./AnimatedComponents";

export default function Banner({ translateData }: any) {
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
      <AnimatedPhotos />

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto mb-6">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          dangerouslySetInnerHTML={{
            __html: translateData.heading.replace(
              /<highlight>(.*?)<\/highlight>/g,
              `<span class="${spirax.className} text-primary">$1</span>`
            ),
          }}
        ></h1>
      </div>

      {/* Description */}
      <div className="relative z-10 max-w-2xl mx-auto mb-10 space-y-3 text-slate-300">
        <p
          className="text-base sm:text-lg"
          dangerouslySetInnerHTML={{
            __html: translateData.description1.replace(
              /<highlight>(.*?)<\/highlight>/g,
              `<span class="${spirax.className} font-semibold text-primary">$1</span>`
            ),
          }}
        ></p>
        <p className="text-sm sm:text-base text-slate-400">
          {translateData?.description2}
        </p>
      </div>

      {/* CTA Buttons */}
     <CTAButtons translateData={translateData} />
    </section>
  );
}
