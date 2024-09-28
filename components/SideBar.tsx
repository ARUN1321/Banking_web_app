"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavBarContent from "./navBarContent";
import Footer from "./Footer";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">WorldBank</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <NavBarContent
              item={item}
              isActive={isActive}
              type={"web_sidebar"}
            />
          );
        })}

        {/* <PlaidLink user={user} /> */}
      </nav>

      <Footer user={user} />
    </section>
  );
};

export default Sidebar;
