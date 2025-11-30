import {
  Bars3Icon,
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="bg-muted sticky top-0 z-10 w-full shadow">
      <div className="mx-auto grid max-w-[500px] grid-cols-[80px_1fr_80px] items-center justify-between px-4 py-3">
        <div className="flex items-center justify-end">
          <Button title="Menu" variant="ghost" size="icon-lg">
            <Bars3Icon />
          </Button>
          <Button title="Search" variant="ghost" size="icon-lg">
            <MagnifyingGlassIcon />
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src="/image/logo.webp"
              alt="Top Menu Market"
              width={55}
              height={55}
            />
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <Button title="Back" variant="ghost" size="icon-lg">
            <ChevronLeftIcon />
          </Button>
        </div>
      </div>
    </header>
  );
}
