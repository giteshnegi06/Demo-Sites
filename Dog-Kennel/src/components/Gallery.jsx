import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800',
  'https://i.pinimg.com/1200x/69/61/7d/69617dd6e6e92cf58f20d8aec054efbd.jpg',
  'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&q=80&w=800',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Happy Moments</h2>
          <p className="text-primary/60 max-w-2xl mx-auto text-lg">
            A glimpse into the life at Harish Tinku Kennel and our beautiful Labradors.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden organic-blob group cursor-pointer shadow-soft"
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-bg/90 rounded-full flex items-center justify-center text-primary">
                  <span className="text-2xl">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
