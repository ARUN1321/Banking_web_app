"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavBarContent from "./navBarContent";
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-fulll max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white" style={{width: '50% !important'}}>
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-4"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              WorldBank
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <NavBarContent
                        item={item}
                        isActive={isActive}
                        type={"mobile_sidebar"}
                      />
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>

            <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
