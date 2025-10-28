import { Button } from "antd";

import Link from "next/link";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  const links = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-condition" },
  ];
  return (
    <footer
      // style={{
      //   backgroundImage: "url('/assets/footer/footer-bg.svg')",
      //   backgroundRepeat: "no-repeat",
      // }}
      className="bg-[#00BCD1] text-black pt-20 px-6 md:px-16 font-sans"
    >
      <div className="container mx-auto flex flex-col gap-10">
        {/* Top box with glass effect */}
        <div className="backdrop-blur-md bg-white/10 border border-[#00BCD133] rounded-lg p-6 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <p className="text-lg md:text-xl font-medium text-[#1A1B1B] text-center md:text-left">
            Your personal AI-powered travel assistant. Making travel planning
            fast, intuitive, and inspiring.
          </p>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/30 pt-6">
          {/* Left links */}
          <div className="flex flex-wrap gap-4 lg:gap-6 text-sm text-black/80 mb-4 md:mb-0">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-black font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right section - App buttons */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-lg text-black/80 font-medium">
              Get the App
            </span>
            <div className="flex gap-3">
              <Button
                icon={<FaGooglePlay className="text-xl" />}
                className="bg-black! text-white! border-none! hover:bg-gray-800! h-12!"
              >
                Google Play
              </Button>
              <Button
                icon={<FaAppStoreIos className="text-xl" />}
                className="bg-black! text-white! border-none! hover:bg-gray-800! h-12!"
              >
                App Store
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center md:text-left text-sm text-black/70 border-t border-white/30 py-4">
          ©2025 Viajia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
