import React from "react";
import Button from "./Button";
import { Play, Star, ChevronRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start pt-10">
          
          {/* Left side ka text aur content */}
          <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            
            <h1 className="text-7xl md:text-8xl font-bold text-white leading-tight tracking-tight">
              Earth’s Exhale
            </h1>

            <p className="text-lg text-white/80 max-w-md leading-relaxed font-medium">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's
              natural environment and its essential role in sustaining life.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <Button className="px-10 py-3 bg-white/10 border border-white/60 text-xl font-bold hover:bg-white hover:text-primary transition-all">
                Buy Now
              </Button>

              <button className="flex items-center gap-3 text-white font-semibold hover:text-white/80 transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10">
                  <Play size={20} fill="currentColor" />
                </div>
                <span className="text-lg">Live Demo...</span>
              </button>
            </div>

            {/* Chota sa floating review card */}
            <div className="mt-16 glass-card p-6 rounded-[2rem] 
              max-w-xs border border-white/10 
              bg-white/5 backdrop-blur-md 
              animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Ronnie Hamill"
                  className="w-14 h-14 rounded-full object-cover border border-white/20 shadow-xl"
                />
                
                <div>
                  <h4 className="font-bold text-white text-base">
                    Ronnie Hamill
                  </h4>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#E5B54F" color="#E5B54F" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-white/70 leading-relaxed">
                I can't express how thrilled I am with my new natural plants!
                They bring such a fresh and vibrant energy to my home.
              </p>
            </div>
          </div>

          {/* Right side wala floating plant card */}
          <div className="lg:col-span-5 relative flex justify-end pr-10">
            
            <div className="relative z-10 w-full max-w-[420px] aspect-square 
              group animate-in fade-in zoom-in duration-1000 delay-200 mt-20">
              
              <div className="glass-card h-full rounded-[3rem] 
                border border-white/10 bg-white/[0.05] backdrop-blur-lg 
                flex flex-col items-center justify-end pb-10 px-8">
                
                {/* Image wala container jo top pe float karega */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[20%] 
                  w-full flex justify-center z-20 pointer-events-none">
                  
                  <img
                    src="/assets/images/main-plant.png"
                    alt="Aglaonema plant"
                    className="w-[110%] h-auto object-contain 
                      drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)] 
                      group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="w-full space-y-4 text-left px-2 relative z-30">
                  <div className="space-y-1">
                    <span className="text-white/60 text-sm font-medium">
                      Trendy House Plant
                    </span>
                    
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-medium text-white">
                        Calathea plant
                      </h3>
                      <button className="text-white/40 hover:text-white">
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>

                  <Button className="w-fit px-8 py-2 
                    bg-transparent border border-white/60 
                    text-base font-medium hover:bg-white hover:text-primary transition-all">
                    Buy Now
                  </Button>

                  <div className="flex justify-center gap-1.5 pt-4">
                    <div className="w-4 h-1 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
