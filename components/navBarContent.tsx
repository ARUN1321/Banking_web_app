import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NavBarContent = ({
  item,
  isActive,
  type,
}: {
  item: any;
  isActive: boolean;
  type : string
}) => {

    const sideBarCss = type === 'web_sidebar' ? "sidebar-link" : "mobilenav-sheet_close w-full";
    const labelCss = type === 'web_sidebar' ? "sidebar-label" : "text-16 font-semibold text-black-2";

  return (
    <Link
      href={item.route}
      key={item.label}
      className={cn(sideBarCss, { "bg-bank-gradient": isActive })}
    >
      <div className="relative size-6">
        <Image
          src={item.imgURL}
          alt={item.label}
          fill
          className={cn({
            "brightness-[3] invert-0": isActive,
          })}
        />
      </div>
      <p className={cn(labelCss, { "!text-white": isActive })}>
        {item.label}
      </p>
    </Link>
  );
};

export default NavBarContent;
