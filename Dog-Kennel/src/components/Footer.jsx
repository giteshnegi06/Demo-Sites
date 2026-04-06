import React from "react";
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";

export default function Footer() {
    return (
        <footer className="bg-bg pt-20 pb-10 border-t border-accent/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <a href="#home" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-bg">
                                <GiDogHouse size={24} />
                            </div>
                            <span className="font-heading text-2xl font-bold text-primary">
                                Harish Tinku <span className="text-secondary">Kennel</span>
                            </span>
                        </a>
                        <p className="text-primary/60 max-w-sm mb-8 leading-relaxed">
                            Premium multi-breed dog breeder in Kurukashatra. We are dedicated to raising healthy, happy, and pure breed puppies that bring joy to every home.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-bg transition-all">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-bg transition-all">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary hover:bg-secondary hover:text-bg transition-all">
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary text-xl mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-primary/60 hover:text-secondary transition-colors">Home</a></li>
                            <li><a href="#about" className="text-primary/60 hover:text-secondary transition-colors">About Us</a></li>
                            <li><a href="#puppies" className="text-primary/60 hover:text-secondary transition-colors">Available Puppies</a></li>
                            <li><a href="#gallery" className="text-primary/60 hover:text-secondary transition-colors">Gallery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary text-xl mb-6">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="text-primary/60">Kurukashatra, Haryana, India</li>
                            <li className="text-primary/60 font-bold">097291 24918</li>
                            <li className="text-primary/60">giteshneg5@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-accent/30 flex flex-col md:row justify-between items-center gap-4">
                    <p className="text-primary/50 text-sm">
                        © {new Date().getFullYear()} Harish Tinku Dog Kennel. All rights reserved.
                    </p>
                    <p className="text-primary/50 text-sm flex items-center gap-1">
                        Made with &#10084;&#65039; for Dogs by <a href="https://wa.me/+918894143680?text=Hi%20I%20want%20to%20build%20a%20website" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                            Web.Loomic  
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
