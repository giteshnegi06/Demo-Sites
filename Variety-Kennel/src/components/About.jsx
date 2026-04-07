import React from 'react';
import { motion } from 'motion/react';
import { Award, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 organic-blob-alt overflow-hidden aspect-4/5 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-bg">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800"
                alt="Breeder with Dog"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-secondary p-8 rounded-2xl shadow-xl z-20 max-w-50">
              <p className="text-bg font-heading text-4xl font-bold mb-1">10+</p>
              <p className="text-bg/80 text-sm font-medium">Years of Excellence in Breeding</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Our Heart Beats for <br />
              <span className="text-secondary">Dogs</span>
            </h2>
            <p className="text-lg text-primary/70 mb-8 leading-relaxed">
              At Variety Kennel, we don't just breed dogs; we nurture family members. Located in the heart of Karnal, our kennel is built on a foundation of love, ethical practices, and a deep understanding of various dog breeds.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-accent rounded-full flex items-center justify-center text-primary">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">Raised with Love</h4>
                  <p className="text-primary/60">Every puppy is born and raised in a home environment, ensuring they are well-socialized and happy.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-accent rounded-full flex items-center justify-center text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">Ethical Breeding</h4>
                  <p className="text-primary/60">We prioritize the health and temperament of our dogs above all else, following strict quality standards.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-accent rounded-full flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">Certified Quality</h4>
                  <p className="text-primary/60">Our puppies are known for their pure lineage and excellent physical attributes.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
