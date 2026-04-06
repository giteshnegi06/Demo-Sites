import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Pet Parent",
    text: "Got my golden lab 'Bruno' from Harish Tinku Kennel. The quality is exceptional and the guidance provided by Harish ji was very helpful.",
    rating: 5
  },
  {
    name: "Priya Singh",
    role: "Dog Lover",
    text: "Healthy and active puppies. You can really tell they are raised with love. Highly recommended for anyone looking for pure breed Labradors.",
    rating: 5
  },
  {
    name: "Amit Verma",
    role: "Happy Customer",
    text: "Best kennel in Kurukashatra. The environment is clean and the dogs are well cared for. My puppy is now 1 year old and very healthy.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Families Say</h2>
          <p className="text-primary/60 max-w-2xl mx-auto text-lg">
            Real stories from people who found their best friends at our kennel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ rotate: index % 2 === 0 ? 2 : -2 }}
              className="p-8 bg-bg rounded-[2rem] shadow-soft relative"
            >
              <Quote className="absolute top-6 right-8 text-accent/40 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-lg text-primary/80 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-bold text-primary text-xl">{t.name}</h4>
                <p className="text-primary/50 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
