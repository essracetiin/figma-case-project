import React from "react";
import { MenuIcon } from "../assets/icons";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-[67px] md:h-[96px] bg-white md:bg-amber-50 p-4 md:px-20 md:py-6">
      <div className="text-heading-5 font-bold text-[#78350F]">Collers</div>
      <div className="flex gap-4 hidden md:flex">
        <div className="text-button-m font-medium text-[#78350F] px-2 py-3">
          Products
        </div>
        <div className="text-button-m font-medium text-[#78350F] px-2 py-3">
          Solutions
        </div>
        <div className="text-button-m font-medium text-[#78350F] px-2 py-3">
          Pricing
        </div>
        <div className="text-button-m font-medium text-[#78350F] px-2 py-3">
          Resources
        </div>
        <div className="text-button-m font-medium text-[#78350F] px-2 py-3">
          Log In
        </div>
        <div className="text-button-m font-medium text-[#78350F] px-7 py-3 border-2 rounded-lg border-[#78350F]">
          Sign up now
        </div>
      </div>
      <div className="flex md:hidden">
        <MenuIcon />
      </div>
    </div>
  );
}
