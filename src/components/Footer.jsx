import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-10 pb-8">
      
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-10">
          
          {/* Logo aur brand ki details wala column */}
          <div className="space-y-10">
            
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/footer_plant.png"
                alt="FloraVision Logo"
                className="w-10 h-10 object-contain"
              />
              
              <span className="text-4xl font-bold tracking-tight">
                FloraVision.
              </span>
            </div>

            <p className="text-white text-lg leading-relaxed max-w-sm font-medium">
              "From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to thrive and elevate your living environment."
            </p>

            <div className="flex gap-10 text-lg font-bold tracking-wider">
              <a href="#" className="hover:text-white/70 transition-colors">FB</a>
              <a href="#" className="hover:text-white/70 transition-colors">TW</a>
              <a href="#" className="hover:text-white/70 transition-colors">LI</a>
            </div>
          </div>

          {/* Jaldi se link pe jaane wala section */}
          <div className="flex flex-col">
            
            <div className="space-y-10">
              <h4 className="text-2xl font-bold">Quick Link's</h4>
              
              <ul className="space-y-6 text-white text-lg font-medium">
                <li>
                  <a href="#" className="underline decoration-1 underline-offset-4 hover:text-white/70 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#" className="underline decoration-1 underline-offset-4 hover:text-white/70 transition-colors">Type's Of plant's</a>
                </li>
                <li>
                  <a href="#" className="underline decoration-1 underline-offset-4 hover:text-white/70 transition-colors">Contact</a>
                </li>
                <li>
                  <a href="#" className="underline decoration-1 underline-offset-4 hover:text-white/70 transition-colors">Privacy</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Naye updates ke liye newsletter subscription */}
          <div className="space-y-10">
            <h4 className="text-2xl font-bold">For Every Update.</h4>
            
            <div className="flex border border-white rounded-lg overflow-hidden h-14 bg-white/5">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-transparent px-6 py-3 text-white placeholder-white/60 focus:outline-none flex-grow"
              />
              
              <button className="bg-white text-black px-6 font-bold text-sm tracking-widest hover:bg-white/90 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Niche wala copyright wala part */}
        <div className="flex justify-end items-center mt-20 border-t border-white/10 pt-6">
          <p className="text-white text-lg font-medium">
            FloraVision © all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
