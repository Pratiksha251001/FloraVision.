import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import SectionTitle from "./components/SectionTitle";
import PlantCard from "./components/PlantCard";
import TestimonialCard from "./components/TestimonialCard";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

const topSellingPlants = [
  {
    id: 1,
    name: "Aglaonema plant",
    price: "300",
    info:
      "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    img: "/assets/images/main-plant.png",
  },
  {
    id: 2,
    name: "Plantain Lilies",
    price: "380",
    info:
      "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    img: "/assets/images/2_plant.png",
  },
  {
    id: 3,
    name: "Cactus",
    price: "259",
    info: "It is known for their ability to thrive in arid environments",
    img: "/assets/images/3_plant.png",
  },
  {
    id: 4,
    name: "Swiss cheese Plant",
    price: "400",
    info:
      "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    img: "/assets/images/4_plant.png",
  },
  {
    id: 5,
    name: "Sansevieria plant",
    price: "450",
    info:
      "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    img: "/assets/images/5_plant.png",
  },
  {
    id: 6,
    name: "Agave plant",
    price: "359",
    info:
      "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    img: "/assets/images/6_plant.png",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Shelly Russel",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review:
      "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    rating: 5,
  },
  {
    id: 2,
    name: "Lula Rolfson",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review:
      "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carol Huels",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    review:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    rating: 5,
  },
];

function App() {
  return (
    <div className="min-h-screen 
      bg-primary font-sans 
      text-white overflow-x-hidden">
      
      <Navbar />

      <main>
        {/* Hero aur cards ke liye background image */}
        <div className="relative">
          
          <div className="absolute inset-0 z-0 h-full overflow-hidden">
            <img
              src="/assets/images/1stbg.jpg"
              alt="Main Background"
              className="w-full h-full object-cover opacity-90 object-bottom"
            />
            
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <HeroBanner />

          {/* Trending plants wala section yaha se shuru hota hai */}
          <section className="py-20 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
              
              <SectionTitle title="Our Trendy plants" centered={true} />

              <div className="flex flex-col gap-24 mt-10">
                
                {/* Pehla plant card */}
                <div className="glass-card 
                  rounded-[3.5rem] md:rounded-[4.5rem] 
                  p-6 md:p-12 
                  flex flex-col md:flex-row items-center gap-40 
                  relative overflow-visible 
                  bg-white/[0.03] backdrop-blur-md 
                  border border-white/10 
                  max-w-6xl mx-auto w-full min-h-[300px]">
                  
                  {/* Plant ki image wala container */}
                  <div className="w-full md:w-[30%] relative -mt-20 md:-mt-32 md:-ml-1 flex justify-center z-20">
                    <img
                      src="/assets/images/1_main_plant.png"
                      alt="Desk plant"
                      /* Image ko thoda bada kiya hai bina layout kharab kiye */
                      className="w-[110%] md:w-[130%] max-w-none h-auto object-contain 
                        drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)] 
                        transform scale-110 md:scale-125 
                        transition-transform duration-500 hover:scale-135"
                    />
                  </div>

                  <div className="w-full md:w-[60%] space-y-5 relative z-10 py-4">
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white/90">
                      For Your Desks Decorations
                    </h3>

                    <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
                      I recently added a beautiful desk decoration plant to my
                      workspace, and it has made such a positive difference!
                    </p>

                    <p className="text-[32px] font-medium text-white/95">
                      Rs. 599/-
                    </p>

                    <div className="flex items-center gap-4">
                      <Button className="px-8 py-2 border border-white/40 text-base font-semibold hover:bg-white hover:text-primary">
                        Explore
                      </Button>

                      <button className="w-12 h-12 flex items-center justify-center 
                        border border-white/40 rounded-xl text-white/60 
                        hover:bg-white hover:text-primary transition-all">
                        <ShoppingBag size={22} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dusra plant card */}
                <div className="glass-card 
                  rounded-[3.5rem] md:rounded-[4.5rem] 
                  p-6 md:p-12 
                  flex flex-col md:flex-row-reverse items-center gap-10 
                  relative overflow-visible 
                  bg-white/[0.03] backdrop-blur-md 
                  border border-white/10 
                  max-w-6xl mx-auto w-full min-h-[300px]">
                  
                  <div className="w-full md:w-[30%] relative -mt-20 md:-mt-32 md:-ml-1 flex justify-center z-20">
                    <img
                      src="/assets/images/2_main_plant.png"
                      alt="Desk plant"
                      className="w-[110%] md:w-[130%] max-w-none h-auto object-contain 
                        drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)] 
                        transform scale-110 md:scale-125 
                        transition-transform duration-500 hover:scale-135"
                    />
                  </div>

                  <div className="w-full md:w-[60%] space-y-5 relative z-10 py-4 md:pl-20 text-left">
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight text-white/90">
                      For Your Desks Decorations
                    </h3>

                    <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md">
                      The greenery adds a touch of nature and serenity to my
                      desk, making it feel more inviting and calming
                    </p>

                    <p className="text-[32px] font-medium text-white/95">
                      Rs. 399/-
                    </p>

                    <div className="flex items-center gap-4">
                      <Button className="px-8 py-2 border border-white/40 text-base font-semibold hover:bg-white hover:text-primary">
                        Explore
                      </Button>

                      <button className="w-12 h-12 flex items-center justify-center 
                        border border-white/40 rounded-xl text-white/60 
                        hover:bg-white hover:text-primary transition-all">
                        <ShoppingBag size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sabse zyada bikne wale plants ka section */}
        <section className="section-padding bg-black/10">
          <div className="container mx-auto px-6 md:px-12">
            
            <SectionTitle title="Our Top Selling Plant's" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-40">
              {topSellingPlants.map((plant) => (
                <PlantCard key={plant.id} {...plant} />
              ))}
            </div>
          </div>
        </section>

        {/* Customer reviews wala section */}
        <section className="section-padding">
          <div className="container mx-auto px-6 md:px-12">
            
            <SectionTitle title="Customer Review" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* O2 plants wala bada section */}
        <section className="section-padding">
          <div className="container mx-auto px-6 md:px-12">
            
            <div className="relative glass-card 
              rounded-[4rem] border border-white/10 
              p-10 md:p-16 
              flex flex-col lg:flex-row items-center gap-2 overflow-visible">
              
              {/* Main plant ki image */}
              <div className="hidden lg:block absolute -left-1 top-10 bottom-0 w-[45%] ">
                <img
                  src="/assets/images/main-plant.png"
                  alt="O2 Plant"
                  className="w-full h-auto object-contain 
                    drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
                    transform -translate-y-10 scale-125"
                />
              </div>

              {/* Text aur details wala part */}
              <div className="w-full lg:w-[50%] lg:ml-auto space-y-6 relative z-10">
                
                <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white">
                  We Have Small And Best O2 Plants <br /> Collection’s
                </h2>

                <div className="space-y-6">
                  <p className="text-white text-lg leading-relaxed font-medium">
                    Oxygen-producing plants, often referred to as "O2 plants,"
                    are those that release oxygen into the atmosphere through
                    the process of photosynthesis.
                  </p>
                  
                  <p className="text-white text-lg leading-relaxed font-medium">
                    Many plants can help filter out pollutants and toxins from
                    the air, such as formaldehyde, benzene, and
                    trichloroethylene. This makes the air cleaner and healthier
                    to breathe.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6">
                  <Button className="px-12 py-3 border border-white text-xl font-bold hover:bg-white hover:text-primary">
                    Explore
                  </Button>

                  <div className="flex items-center gap-2 text-white">
                    <button className="hover:text-white/70 transition-colors">
                      <ChevronLeft size={24} />
                    </button>
                    
                    <span className="text-2xl md:text-xl text-white">01</span>
                    <span className="text-1xl opacity-60 ml-1">/04</span>
                    
                    <button className="hover:text-white/70 transition-colors">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dots jo loading dikhate hai */}
        <div className="flex justify-center items-center gap-3 mt-12 mb-20">
          <div className="w-6 h-2 rounded-full bg-white/80"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
