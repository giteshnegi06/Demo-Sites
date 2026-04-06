import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Info } from 'lucide-react';

const puppies = [
  {
    id: 1,
    name: 'Buddy',
    age: '45 Days',
    color: 'Golden',
    breed: 'Golden Retriever',
    image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&q=80&w=600',
    gender: 'Male'
  }, 
  { 
    id: 2, 
    name: 'Luna',
    age: '50 Days',
    color: 'Cream',
    breed: 'Labrador',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600',
    gender: 'Female'
  },
  {
    id: 3,
    name: 'Max',
    age: '40 Days',
    color: 'Black & Tan',
    breed: 'German Shepherd',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=600',
    gender: 'Male'
  },
  {
    id: 4,
    name: 'Bella',
    age: '45 Days',
    color: 'Tricolor',
    breed: 'Beagle',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600',
    gender: 'Female' 
  },

  {
    id: 5,
    name: 'Rocky',
    age: '55 Days',
    color: 'Black',
    breed: 'Labrador',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=600',
    gender: 'Male'
  },
  {
    id: 6,
    name: 'Daisy',
    age: '42 Days',
    color: 'Golden',
    breed: 'Golden Retriever',
    image: 'https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?auto=format&fit=crop&q=80&w=600',
    gender: 'Female'
  },
  {
    id: 7,
    name: 'Charlie',
    age: '48 Days',
    color: 'Chocolate',
    breed: 'Labrador',
    image: 'https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?auto=format&fit=crop&q=80&w=600',
    gender: 'Male'
  },
  {
    id: 8,
    name: 'Molly',
    age: '46 Days',
    color: 'White&Black',
    breed: 'Dalmatian',
    image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&q=80&w=600',
    gender: 'Female'
  },
];

export default function Puppies() {
  return (
    <section id="puppies" className="py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Available Puppies</h2>
          <p className="text-primary/60 max-w-2xl mx-auto text-lg">
            Meet our newest little ones! Each puppy comes from a pure breed lineage with a health guarantee.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {puppies.map((puppy, index) => (
            <motion.div
              key={puppy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-bg rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={puppy.image}
                  alt={puppy.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-bg/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                  {puppy.gender}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">{puppy.name}</h3>
                    <p className="text-secondary font-medium">{puppy.breed} - {puppy.color}</p>
                  </div>
                  <div className="bg-accent/50 p-2 rounded-xl">
                    <Info size={20} className="text-primary" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-primary/60 mb-6">
                  <span className="flex items-center gap-1">Age: <b>{puppy.age}</b></span>
                  <span className="flex items-center gap-1">Status: <b className="text-green-600">Available</b></span>
                </div>

                <a
                  href={`https://wa.me/919729124918?text=Hi, I am interested in ${puppy.name} (${puppy.breed} - ${puppy.color})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-bg py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all"
                >
                  <MessageCircle size={20} /> Contact Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-primary/70 mb-6">Don't see what you're looking for?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-secondary font-bold text-lg hover:gap-3 transition-all"
          >
            Inquire about upcoming litters <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
