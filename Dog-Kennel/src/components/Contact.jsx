import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Name: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/+919729124918?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="lg:w-2/5 bg-secondary p-12 text-bg relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-bg/10 rounded-full blur-3xl" />
            
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-bg/80 mb-12 text-lg">
              Have questions about our puppies or want to visit our kennel? We'd love to hear from you!
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-bg/20 rounded-full flex items-center justify-center group-hover:bg-bg/30 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-bg/60 uppercase tracking-wider font-bold">Call Us</p>
                  <p className="text-xl font-bold">+91 97291 24918</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-bg/20 rounded-full flex items-center justify-center group-hover:bg-bg/30 transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-bg/60 uppercase tracking-wider font-bold">WhatsApp</p>
                  <p className="text-xl font-bold">97291 24918</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-bg/20 rounded-full flex items-center justify-center group-hover:bg-bg/30 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-bg/60 uppercase tracking-wider font-bold">Location</p>
                  <p className="text-xl font-bold">Kurukashatra, Haryana</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-bg/20">
              <p className="font-heading text-2xl italic">"Bringing joy to your home, one puppy at a time."</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5 p-12 bg-bg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-primary font-bold ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-accent/30 border-2 border-transparent focus:border-secondary focus:bg-bg outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-primary font-bold ml-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="097291 24918"
                    className="w-full px-6 py-4 rounded-2xl bg-accent/30 border-2 border-transparent focus:border-secondary focus:bg-bg outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-primary font-bold ml-1">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="I'm interested in a golden labrador puppy..."
                  className="w-full px-6 py-4 rounded-2xl bg-accent/30 border-2 border-transparent focus:border-secondary focus:bg-bg outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-bg py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1"
              >
                Send via WhatsApp <Send size={20} />
              </button>
              
              <p className="text-center text-primary/50 text-sm">
                We usually respond within 2-4 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
