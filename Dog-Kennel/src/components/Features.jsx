import React from 'react';
import { motion } from 'motion/react';
import { Shield, Home, Syringe, Banknote } from 'lucide-react';

const features = [
  {
    icon: <Syringe size={32} />,
    title: "Healthy & Vaccinated",
    desc: "All puppies receive their first set of shots and a thorough health check before going home."
  },
  {
    icon: <Shield size={32} />,
    title: "Pure Breed Guarantee",
    desc: "We guarantee the lineage and purity of every Labrador puppy from our kennel."
  },
  {
    icon: <Home size={32} />,
    title: "Home Raised",
    desc: "Our dogs live with us, ensuring they are well-socialized and have great temperaments."
  },
  {
    icon: <Banknote size={32} />,
    title: "Affordable Pricing",
    desc: "Quality doesn't have to be overpriced. We offer competitive rates for premium puppies."
  }
];

export default function Features() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-bg border border-accent/30 rounded-4xl shadow-soft hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-accent/50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:rotate-6 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-primary/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
