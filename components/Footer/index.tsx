import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";

const Footer = () => {
  return (
    <div
      className={`overflow-hidden absolute bottom-0 w-full flex items-center`}
    >
      <div className="bg-gradient-to-b from-[#8E8077] to-[#A69A92] w-full h-auto flex items-center justify-center rounded-t-xl gap-2 py-1 self-end text-white z-20">
        <Image src={logo} alt="Image of toraja couple" className="w-[30px]" />
        <p className="font-poppins text-xs font-semibold">
          2024 &copy; Deili Invitation, All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
