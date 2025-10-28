import { spirax } from "@/constants/spirax";
import { getTranslate } from "@/lib/helpers/getTranslate";
import Image from "next/image";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

export async function ViajiaSpecialty() {
  const translateData: any = await getTranslate("viajiaSpecialty");
  console.log(translateData);
  return (
    <section className="py-8 md:py-24 px-4 md:px-5 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h2
            className="section-title text-white max-w-[600px]"
            dangerouslySetInnerHTML={{
              __html: translateData.heading.replace(
                /<highlight>(.*?)<\/highlight>/g,
                `<span class="${spirax.className} text-primary">$1</span>`
              ),
            }}
          ></h2>

          <p className="section-subtitle mb-8">
            {/* {t("viajiaSpecialty.subtitle")} */}
            {translateData.subtitle}
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 transition-colors"
            >
              <FaGooglePlay className="text-xl" />

              <span className="text-white font-medium">Google Play</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 transition-colors"
            >
              <FaAppStoreIos className="text-xl" />

              <span className="text-white font-medium">App Store</span>
            </a>
          </div>
        </div>

        {/* Right - Phone Mockups */}
        <div className=" h-96 md:h-full flex items-center  justify-end">
          <Image
            src={"/assets/home/phones.svg"}
            alt="phone"
            width={1000}
            height={1000}
            unoptimized
            className="w-full lg:w-[90%] h-full lg:h-[600px] object-fit"
          />
        </div>
      </div>
    </section>
  );
}
