"use client";
import { useRouter } from "next/navigation";


import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@components/ui/aurora-background";

export default function Hero() {
  const router = useRouter();

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          The coolest blog ever.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          I bet you you will love every bit of it.
        </div>
        <button onClick={() => router.push("/featured")}className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Read now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
