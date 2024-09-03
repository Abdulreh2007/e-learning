"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const whatsappNumber = "+923143678207"; // Replace with your WhatsApp number

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div className="fixed bottom-4 left-4 animate-pulse">
      <div className="relative group">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
        >
          <FaWhatsapp className="w-9 h-9" />
        </button>
        <span className="absolute bottom-14 right-1/2 transform translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
          Contact us 
        </span>
      </div>
    </div>
  );
};

export default WhatsappButton;
