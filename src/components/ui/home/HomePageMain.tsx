import React from "react";
import Banner from "./banner/Banner";
import { WhyChooseUs } from "./why-choose-us/WhyChooseUs";
import { ViajiaSpecialty } from "./ViajiaSpecialty";
import FAQSection from "./FAQ";
import { MarketingSection } from "./MarketingSection";
import TravelCTA from "./TravelCTA";
import { getTranslate } from "@/lib/helpers/getTranslate";

export default async function HomePageMain() {
  const faqData: any = await getTranslate("faq");
  const faqTitle: any = await getTranslate("faqTitle");
  const items = faqData.map((item: any, index: number) => ({
    key: String(index + 1),
    label: item.question,
    children: <p>{item.answer}</p>,
  }));

  return (
    <section>
      <Banner translateData={await getTranslate("banner")} />
      <WhyChooseUs />
      <ViajiaSpecialty />
      <MarketingSection />
      <TravelCTA />
      <FAQSection items={items} faqTitle={faqTitle} />
    </section>
  );
}
