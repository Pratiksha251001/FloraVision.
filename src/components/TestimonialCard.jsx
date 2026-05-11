import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, avatar, review, rating = 5 }) => {
  return (
    <div className="glass-card 
      p-10 pt-12 rounded-[4rem] 
      relative overflow-hidden group 
      hover:bg-white/[0.07] transition-all duration-500 
      flex flex-col h-full">
      
      {/* Card ke top par wave jaisa shape banane ke liye */}
      <div 
        className="absolute top-0 left-0 w-full h-12 bg-white/10"
        style={{
          clipPath: 'ellipse(70% 60% at 50% 0%)',
          backdropFilter: 'blur(5px)'
        }}
      ></div>
      
      <div className="flex items-center gap-5 mb-8 relative z-10">
        
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 blur-lg rounded-full"></div>
          
          <img 
            src={avatar} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover relative z-10 border border-white/10"
          />
        </div>

        <div>
          <h4 className="font-bold text-white text-xl tracking-wide">{name}</h4>
          
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={`${i < rating ? 'fill-gold text-gold' : 'text-white/10'}`} 
              />
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-white/60 text-[15px] leading-relaxed font-medium">
        {review}
      </p>
    </div>
  );
};

export default TestimonialCard;
