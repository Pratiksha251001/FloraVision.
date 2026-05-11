import React from "react";
import { ShoppingBag } from "lucide-react";

const PlantCard = ({ img, name, price, info }) => {
  return (
    <div className="group relative glass-card
      rounded-[4rem] 
      flex flex-col h-full 
      p-6 pb-6 mt-9 
      overflow-visible 
      transition-all duration-500 hover:bg-white/[0.08]">

      {/* Card ke upar ka wo oval shape design */}
      <div
        className="absolute top-0 left-0 w-full h-16 bg-white/[0.03] rounded-t-[4rem] pointer-events-none"
        style={{
          clipPath: "ellipse(70% 60% at 50% 0%)",
          backdropFilter: "blur(10px)",
        }}
      ></div>

      {/* Plant ki image jo upar overlap ho rahi hai */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[15%] 
        w-full flex justify-center z-20 pointer-events-none">
        
        <img
          src={img}
          alt={name}
          className="w-[125%] max-w-none h-auto object-contain 
            drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] 
            group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-grow relative z-10 mt-80">
        <h3 className="text-[36px] font-normal text-white/90 leading-tight tracking-wide mb-2">
          {name}
        </h3>
        
        <p className="text-white/60 text-[18px] leading-relaxed mb-2">
          {info}
        </p>

        <div className="flex items-center justify-between mt-6">
          <span className="text-[38px] font-normal text-white/90">
            Rs. {price}/-
          </span>

          <button className="w-14 h-14 
            flex items-center justify-center 
            border border-white/60 rounded-2xl 
            text-white/60 hover:bg-white hover:text-primary 
            transition-all duration-300">
            
            <ShoppingBag size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
