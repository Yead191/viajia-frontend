import { LangKey, LANGUAGES } from "@/constants/language";
import React from "react";

export default function LanguagePanel({
  selected,
  onSelect,
}: {
  selected: LangKey;
  onSelect?: any;
}) {
  return (
    <div
      className="w-56 lg:w-72 rounded-xl border border-primary p-3 shadow-xl bg-[#0A0B0D]"
      style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
    >
      <div className="flex flex-col gap-3">
        {LANGUAGES?.map((lang: any) => {
          const active = selected === lang.key;
          return (
            <button
              key={lang.key}
              onClick={() => onSelect(lang.key)}
              className="flex items-center justify-between rounded-xl  px-3 py-3 hover:bg-[#1c1c1e]"
            >
              <span className="flex items-center gap-3">
                <span className="inline-flex h-6 w-10 items-center justify-center overflow-hidden rounded-md  ">
                  <img
                    src={lang.flag}
                    alt={`${lang.label} flag`}
                    className="h-6 w-10 object-cover"
                  />
                </span>
                <span className="text-[14px] font-medium text-white/80">
                  {lang.label}
                </span>
              </span>
              <span
                className={`grid h-6 w-6 place-items-center rounded-md ${
                  active ? "bg-[#0B66E4]" : ""
                }`}
              >
                <span
                  className={`h-5 w-5 rounded-md border grid place-items-center ${
                    active
                      ? "bg-[#0B66E4] border-transparent"
                      : "border-[#C9D2DC]"
                  }`}
                >
                  {active && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
