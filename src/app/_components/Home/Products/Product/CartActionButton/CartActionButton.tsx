"use client";

import { Button } from "@/app/_components/ui/button";
import useStore from "@/store/index.store";
import { cn } from "@/utils/cn";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function CartActionButton({ product }: { product: IProduct }) {
  const products = useStore.use.products();
  const existingItem = products.find((p) => p.id === product.id);

  function onIncrease() {
    useStore.getState().addOrIncrease(product);
  }

  function onDecrease() {
    useStore.getState().decreaseOrDelete(product.id);
  }

  return (
    <motion.div
      animate={{
        width: existingItem ? 100 : 40,
      }}
      transition={{ type: "spring", damping: 10 }}
      className={cn(
        "bg-primary absolute right-1 -bottom-3 flex min-h-10 min-w-10 items-center gap-1 rounded-[10px] shadow",
        existingItem ? "justify-between p-1" : "justify-center",
      )}
    >
      <Button
        onClick={onIncrease}
        variant={existingItem ? "secondary" : "default"}
        size="icon"
      >
        <PlusIcon />
      </Button>
      {existingItem && (
        <>
          <span className="font-light text-white">{existingItem.quantity}</span>
          <Button
            onClick={onDecrease}
            variant="ghost"
            className="hover:bg-transparent"
            size="icon"
          >
            <MinusIcon />
          </Button>
        </>
      )}
    </motion.div>
  );
}
