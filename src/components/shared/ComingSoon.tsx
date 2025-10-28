"use client";
import { Grid } from "antd";
import React from "react";

export default function ComingSoon() {
  const { lg } = Grid.useBreakpoint();

  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co.com/hFb72m83/gif.gif")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: lg ? "" : "contain",
        // backgroundPosition: "center",
        backgroundPosition: "center center",

      }}
      className="min-h-screen w-full bg-black"
    ></div>
  );
}
