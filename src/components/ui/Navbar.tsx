"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@components/ui/navbar-menu";
import { cn } from "@lib/utils";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
         <HoveredLink href="/about">About</HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Categories">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
          <HoveredLink href="/register">Register</HoveredLink>
          <HoveredLink href="/featured">Featured</HoveredLink>
        </Menu>
      </div>
    );
}

export default Navbar;