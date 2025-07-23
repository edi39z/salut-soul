"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsappButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.open("https://wa.me/+6282259616782", "_blank");
  };

  return (
    <div
      className={`fixed bottom-12 right-10 flex items-center p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 ease-in-out ${
        isHovered ? "w-48 bg-green-600" : "w-12 bg-green-500"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ zIndex: 1000 }}
    >
      <FaWhatsapp className="text-white text-2xl" />
      <span
        className={`ml-0 text-white items-center text-center whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
          isHovered ? "opacity-100 max-w-xs" : "opacity-0 max-w-0"
        }`}
      >
        Hubungi Kami
      </span>
    </div>
  );
}
