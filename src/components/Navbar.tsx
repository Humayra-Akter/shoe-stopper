"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Shoes">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/shoes">All Shoes</HoveredLink>
            <HoveredLink href="/shoes">Men</HoveredLink>
            <HoveredLink href="/shoes">Women</HoveredLink>
            <HoveredLink href="/shoes">Kids</HoveredLink>
            <HoveredLink href="/shoes">Babies</HoveredLink>
            <HoveredLink href="/shoes">Sports</HoveredLink>
          </div>
        </MenuItem>
      <Link href={"/Contact"}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
        ></MenuItem>
      </Link>
      </Menu>{" "}
    </div>
  );
}

export default Navbar;
