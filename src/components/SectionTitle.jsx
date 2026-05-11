import React from "react";

const SectionTitle = ({ title, centered = true }) => {
  return (
    <div className={`mb-24 flex ${centered ? 'justify-center' : 'justify-center'}`}>
      
      <div className="relative px-12 py-3 
        border-l-2 border-r-2 border-white/20">
        
        {/* Title ke upar aur niche wale decorative borders */}
        <div className="absolute top-0 left-0 w-6 h-full border-t-2 border-b-2 border-white/20"></div>
        <div className="absolute top-0 right-0 w-6 h-full border-t-2 border-b-2 border-white/20"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-widest">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
