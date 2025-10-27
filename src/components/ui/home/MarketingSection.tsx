import { spirax } from "@/constants/spirax";
import Image from "next/image";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

export function MarketingSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-5 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <p className="section-subtitle mb-8">
            Explore unforgettable vacations around the world designed to make
            your travel experience enjoyable, exciting, and truly memorable with
            comfort, adventure, and exceptional service everywhere you go.
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
            src={"/assets/home/marketing.svg"}
            alt="phone"
            width={1000}
            height={1000}
            unoptimized
            className="w-full lg:w-[90%] h-[600px] object-fit"
          />
        </div>
      </div>
    </section>
  );
}
