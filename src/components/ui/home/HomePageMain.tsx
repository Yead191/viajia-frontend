import React from "react";
import Banner from "./Banner";
import { WhyChooseUs } from "./WhyChooseUs";
import { ViajiaSpecialty } from "./ViajiaSpecialty";
import FAQSection from "./FAQ";
import { faq } from "@/constants/faqData";
import { MarketingSection } from "./MarketingSection";
import TravelCTA from "./TravelCTA";

export default function HomePageMain() {
  return (
    <section>
      <Banner />
      <WhyChooseUs />
      <ViajiaSpecialty />
      <FAQSection faq={faq} />
      <MarketingSection />
      <TravelCTA />
    </section>
  );
}
