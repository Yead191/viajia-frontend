"use client";

import { Button } from "antd";
import { MessageCircle, Sparkles } from "lucide-react";

export default function TravelCTA() {
  return (
    <section className="bg-[#1C1C1E] rounded-2xl py-16 md:py-24 px-4 md:px-5 container mx-auto mb-12 lg:mb-24">
      <div className="w-full space-y-8 text-center">
        {/* Top Button */}
        <div className="flex justify-center">
          <Button
            type="text"
            size="large"
            className="border-[#FFCB20]! text-[#FFCB20]! hover:text-yellow-400 hover:border-yellow-400 rounded-full! px-6 lg:w-80! font-medium h-14! bg-[#FFCB20]/15! cursor-auto!"
            icon={<Sparkles size={16} />}
          >
            Start Your Journey
          </Button>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-semibold bg-linear-to-r from-[#F1F1F1] via-[#00BCD1] to-[#F1F1F1] bg-clip-text text-transparent">
            Ready to Transform Your Travel?
          </h1>

          {/* Subheading */}
          <p className="section-subtitle max-w-xl mx-auto">
            Join thousands of travelers who've discovered a smarter, more
            inspiring way to explore the world with Valeria.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="large"
            className="bg-primary! hover:bg-cyan-600! border-0! text-white! font-semibold! rounded-lg! px-8! h-12! w-full! lg:w-auto!"
            icon={<MessageCircle size={18} />}
          >
            Talk to Valeria Now
          </Button>

          <Button
            size="large"
            className="bg-[#0A0B0D]! border-0! text-primary! font-semibold! rounded-lg! w-full! lg:w-auto! lg:px-8! h-12!"
          >
            Start Your Journey
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="space-y-3 pt-6">
          <p className="section-subtitle text-lg!">
            No credit card required • Free to start • Available 24/7
          </p>
          <p className="section-subtitle">
            Your personal AI-powered travel assistant. Making travel planning
            fast, intuitive, and inspiring.
          </p>
        </div>
      </div>
    </section>
  );
}
