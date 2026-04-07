import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Organic Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/30 organic-blob -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 organic-blob-alt -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-accent/50 px-4 py-2 rounded-full text-primary font-semibold text-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-secondary animate-ping" />
            Best Quality Pure Breed Dogs ❤
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-[1.1] mb-6">
            Healthy & Pure Breed <br />
            <span className="text-secondary">Puppies</span> 🐶
          </h1>
          <p className="text-lg md:text-xl text-primary/70 mb-10 max-w-lg leading-relaxed">
            Raised with love, care, and quality assurance. Find your perfect furry companion at Variety Kennel.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#puppies"
              className="bg-primary text-bg px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1"
            >
              View Puppies <ArrowRight size={20} />
            </a>
            <a
              href="tel:09729124918"
              className="bg-bg border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-accent transition-all shadow-md hover:-translate-y-1"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/pup${i}/100/100`}
                  alt="Happy Customer"
                  className="w-12 h-12 rounded-full border-4 border-bg object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-primary">500+ Happy Families</p>
              <p className="text-primary/60">Trusted across Kurukashatra</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 organic-blob overflow-hidden aspect-square shadow-2xl border-8 border-bg">
            <img
              src="https://i.pinimg.com/736x/63/e6/5c/63e65c9f222efd5f9a7656c00bd4de1a.jpg"
              alt="Cute Puppy"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10 opacity-20 blur-2xl" />
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary rounded-full -z-10 opacity-10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
