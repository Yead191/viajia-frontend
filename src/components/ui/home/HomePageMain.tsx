import React from "react";
import Banner from "./Banner";
import { WhyChooseUs } from "./WhyChooseUs";
import { ViajiaSpecialty } from "./ViajiaSpecialty";
import FAQSection from "./FAQ";
import { faq } from "@/constants/faqData";
import { MarketingSection } from "./MarketingSection";
import TravelCTA from "./TravelCTA";
import { getTranslate } from "@/lib/helpers/getTranslate";

export default async function HomePageMain() {
  // const translateData: any = await getTranslate("viajiaSpecialty");
  // console.log(translateData);
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
      <FAQSection items={items} faqTitle={faqTitle} />
      <MarketingSection />
      <TravelCTA />
    </section>
  );
}
