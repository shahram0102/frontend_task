"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const interval = 6000;

export default function ProductSlider({ product }: { product: IProduct }) {
  const [current, setCurrent] = useState(0);

  const { images, title } = product;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative aspect-video h-full w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: [1, 1.06],
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: interval / 1000, ease: "easeInOut" },
          }}
          className="absolute top-0 left-0 h-full w-full"
        >
          <Image
            src={images[current]!}
            alt={`${title} - ${current}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
