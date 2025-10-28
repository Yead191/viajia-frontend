"use client";

import { spirax } from "@/constants/spirax";
import { Collapse, ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";

export default function FAQSection({ faq }: { faq?: any }) {
  const { t } = useTranslation();
  const items = faq?.map((item: any, index: number) => ({
    key: String(index + 1),
    label: item.question,
    children: item.answer,
  }));
  const Faq = t("faq", { returnObjects: true });

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-4 pb-8 lg:py-12">
      <h2 className="section-title text-center mb-12!">
        <span className="text-white">
          {t("faqTitle.part1", "Frequently Asked")}{" "}
        </span>
        <span className={`${spirax.className} text-primary`}>Questions</span>
      </h2>
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              colorText: "rgba(255, 255, 255, 0.7)",
            },
          },
        }}
      >
        <Collapse
          items={items}
          defaultActiveKey={["2"]}
          ghost
          expandIconPosition="end"
          style={{
            backgroundColor: "transparent",
          }}
          size="large"
          className="custom-faq-collapse"
        />
      </ConfigProvider>

      <style jsx global>{`
        .custom-faq-collapse .ant-collapse-item {
          margin-bottom: 16px !important;
          background-color: #1c1c1e !important;
          border: none !important;
          border-radius: 8px !important;
        }

        .custom-faq-collapse .ant-collapse-header {
          padding: 16px 24px !important;
          background-color: #1c1c1e !important;
          border-radius: 8px !important;
          font-weight: 500 !important;
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 16px !important;
        }

        .custom-faq-collapse .ant-collapse-content {
          background-color: #1c1c1e !important;
          border-top: none !important;
        }

        .custom-faq-collapse .ant-collapse-content-box {
          padding: 0 24px 20px 24px !important;
        }

        .custom-faq-collapse .ant-collapse-expand-icon {
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 14px !important;
        }

        .custom-faq-collapse .ant-collapse-item:hover {
          background-color: #1c1c1e !important;
        }

        .custom-faq-collapse .ant-collapse-item-active {
          background-color: #1c1c1e !important;
        }
        .ant-collapse-content-box {
          background-color: #1c1c1e !important;
        }
      `}</style>
    </div>
  );
}
