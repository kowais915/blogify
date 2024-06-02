"use client";
import React from "react";
import { BackgroundGradient } from "@components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Card({ id, title, body}) {
 const router = useRouter();

  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
     
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title || "No Tilte Available"}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         { body || "No body available" }
        </p>
        <button onClick={() => router.push(`/featured/${id}`)} className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Read More </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
           new
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
