import React from 'react';
import AnimatedContent from '../react-bits/AnimatedContent/AnimatedContent';


const AboutSection: React.FC = () => {
    return (
        <section className="relative w-full h-screen bg-[#f1f1f1] flex items-center justify-center overflow-hidden poppins-font">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e5e5e5] to-[#ffffff]" />
            <div className="relative z-10 w-[99%] h-[99%] max-w-screen bg-black text-white rounded shadow-[0_20px_80px_rgba(0,0,0,0.1)] border border-black p-16 flex items-center gap-16">
                <div className="w-1/2 space-y-25">
                    <p className="text-2xl leading-relaxed text-gray-200 text-right">
                        <AnimatedContent
                            distance={150}
                            direction="vertical"
                            reverse={false}
                            duration={1.0}
                            ease="power3.out"
                            initialOpacity={0.0}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.3}
                        >
                            <span className='ml-50'>
                                <b>*wave hand emoji*</b> i'm Ahmad — a fullstack developer fluent in both code and creativity.
                            </span>
                        </AnimatedContent>
                    </p>
                    <br />
                    <p className="text-2xl leading-relaxed text-gray-200 text-left">
                        <span className='ml-50'>
                              <AnimatedContent
                            distance={75}
                            direction="vertical"
                            reverse={false}
                            duration={1.0}
                            ease="power3.out"
                            initialOpacity={0.0}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.3}
                        >
                            driven by a love for design and development, i guide projects from concept to completion, delivering a smooth process that creates a meaningful and lasting impact on your business and the digital world.
                             </AnimatedContent>
                        </span>
                    </p>
                    <div className="flex gap-8">
                        <div className="w-1/2 text-xl text-gray-300">
                            <AnimatedContent
                            distance={75}
                            direction="horizontal"
                            reverse={true}
                            duration={1.0}
                            ease="power3.out"
                            initialOpacity={0.0}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.3}
                        > 
                            [fun fact.]
                            </AnimatedContent>
                        </div>
                        <div className="w-1/2 text-xl text-gray-300">
                             <AnimatedContent
                            distance={75}
                            direction="horizontal"
                            reverse={false}
                            duration={1.0}
                            ease="power3.out"
                            initialOpacity={0.0}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.3}
                        >  
                            in my free time, i like to read books, hit the gym and journal. 
                                </AnimatedContent>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end items-end text-right">

                    <AnimatedContent
                        distance={10}
                        direction="vertical"
                        reverse={false}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.0}
                        threshold={0.2}
                        delay={0.0}
                    >
                        <h2 className="text-9xl font-extrabold ">
                            [about the person behind the portfolio]</h2>
                    </AnimatedContent>

                </div>
            </div>
        </section>


    );
};

export default AboutSection;
