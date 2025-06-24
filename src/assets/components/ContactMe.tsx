import React from 'react';
import { FaGlobe, FaArrowRight } from 'react-icons/fa';
import Noise from '../react-bits/Noise/Noise';
import AnimatedContent from '../react-bits/AnimatedContent/AnimatedContent';

const ContactSection: React.FC = () => {
    return (
        <section className="p-5">
            <AnimatedContent
                distance={10}
                direction="horizontal"
                reverse={false}
                duration={1.0}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={0.0}
                threshold={0.2}
                delay={0.0}
            >
                <div className="relative h-screen w-full poppins-font overflow-hidden">
                    <div className="absolute inset-0 z-000">
                        <Noise
                            patternSize={250}
                            patternScaleX={1}
                            patternScaleY={1}
                            patternRefreshInterval={2}
                            patternAlpha={15}
                        />
                    </div>
                    {/* Top Label */}
                    <section className="min-h-screen flex flex-col justify-between items-center bg-black text-white poppins-font px-6 py-20 rounded-4xl">
                        <div className="text-center mb-10">
                            <p className="text-gray-200 text-lg tracking-widest uppercase">[INTRIGUED?]</p>
                        </div>

                        {/* Main Text */}
                        <div className="text-center">
                            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-10">
                                LET'S MAKE   <br />&lt;/divs&gt; DO <br />BACKFLIPS
                            </h1>

                            {/* Call to Action */}
                            <button className="group bg-gray-100 text-black rounded-full px-8 py-4 text-lg font-semibold flex items-center gap-3 hover:bg-white transition-all mx-auto">
                                <span className="relative overflow-hidden h-6">
                                    <a href="mailto:ahmadaquino.2002@gmail.com">
                                        <span className="block group-hover:translate-y-[-100%] transition-transform duration-300">Hit me Up!</span>
                                        <span className="block absolute top-full left-0 group-hover:top-0 transition-all duration-300">Say Hi! 👋</span>
                                    </a>
                                </span>
                                <FaArrowRight />
                            </button>

                        </div>

                        {/* Bottom Info */}
                        <div className="w-full flex justify-between items-center mt-20 text-sm text-gray-400">
                            {/* Left */}
                            <div className="flex gap-4 items-center border border-gray-700 rounded px-3 py-1">
                                <FaGlobe className="text-white" />
                                <span>Working Globally</span>
                                <span className="text-yellow-400">Available</span>
                            </div>

                            {/* Right */}
                            <div className="text-right text-xs z-1000">
                                <p className="uppercase tracking-wider">For further inquiries</p>
                                <a href="mailto:ahmadaquino.2002@gmail.com" className="underline hover:text-white">ahmadaquino.2002@gmail.com</a>
                            </div>
                        </div>
                    </section>
                </div>
            </AnimatedContent>
        </section>
    );
};

export default ContactSection;
