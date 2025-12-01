"use client";

import useStore from "@/store/index.store";
import { Button } from "../../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { getFinalPrice } from "@/utils/get-final-price";
import toast from "react-hot-toast";

export default function StickyCart() {
  const products = useStore.use.products();

  const totalQuantity = products.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );
  const totalPrice = products.reduce(
    (acc, product) => acc + getFinalPrice(product) * product.quantity,
    0,
  );

  const hasItems = totalQuantity > 0;

  return (
    <AnimatePresence>
      {hasItems && (
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="fixed right-0 bottom-6 left-0 z-50 mx-auto px-4"
        >
          <div
            onClick={() => toast.error("این بخش در دست توسعه میباشد.")}
            className="bg-primary mx-auto flex max-w-[500px] items-center justify-between rounded-[10px] p-4 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <Button className="rounded-full" size="icon" variant="secondary">
                <span className="font-bold">{totalQuantity}</span>
              </Button>
              <span className="text-sm font-bold text-white">تکمیل خرید </span>
            </div>

            <span className="font-bold text-white">
              {totalPrice.toLocaleString("fa-IR")} تومان
            </span>
          </div>
        </motion.footer>
      )}
    </AnimatePresence>
  );
}
