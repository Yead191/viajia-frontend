"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ChooseImg({ whyChooseUs }: any) {
 useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false, 
      mirror: true,
    });

    // refresh AOS after images load or DOM changes
    const handleResize = () => AOS.refresh();
    globalThis.addEventListener("resize", handleResize);

    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      data-aos="fade-right"
      className="flex justify-center md:justify-start"
    >
      <div className="relative w-80 h-80 md:w-96 md:h-96 2xl:w-[500px] 2xl:h-[500px]">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: `0px 20px 32px 0px rgba(0, 188, 209, 0.25), 0px 2px 8px 0px rgba(0, 188, 209, 0.5)`,
          }}
        >
          <Image
            src="https://i.ibb.co.com/m5sxHY0p/73835371421e1be97f4fbe07e4a986a2e4390c9c.jpg"
            alt={whyChooseUs.heading}
            width={400}
            height={400}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
