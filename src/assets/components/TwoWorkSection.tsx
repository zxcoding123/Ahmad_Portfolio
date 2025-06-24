import React from 'react';
import {Info, Code2, LayoutDashboard, UserRound, GitBranch, Percent } from "lucide-react";
import ScrollFloat from '../react-bits/ScrollFloat/ScrollFloat';
import AnimatedContent from '../react-bits/AnimatedContent/AnimatedContent';
import CircularGallery from '../reaact-bits/CircularGallery/CircularGallery';
import ClickSpark from '../react-bits/ClickSpark/ClickSpark';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const images = [
    "https://i.postimg.cc/fR7Y3vvb/Black-And-White-Minimalist-Milk-Creative-Studio-Logo.png",
    "https://i.postimg.cc/3Rx5vn5C/BITCRAFT-1.png",
    "https://i.postimg.cc/MT3kbVzk/BITCRAFT-2.png",
    "https://i.postimg.cc/L5Jcy5sJ/BITCRAFT-3.png",
    "https://i.postimg.cc/9XS5DdxZ/BITCRAFT-4.png",
    "https://i.postimg.cc/tJ8L8b12/BITCRAFT-5.png",
    "https://i.postimg.cc/ZKdkpWgg/BITCRAFT-6.png",
    "https://i.postimg.cc/y84MPVCN/BITCRAFT-7.png",
    "https://i.postimg.cc/9QdvgvcY/BITCRAFT-8.png",
    "https://i.postimg.cc/Pqd0g2xs/BITCRAFT-9.png",
    "https://i.postimg.cc/k5wLqK6V/BITCRAFT-10.png",
    "https://i.postimg.cc/vBBkBTf0/BITCRAFT-11.png",
    "https://i.postimg.cc/L5gWtWyf/BITCRAFT-12.png",
    "https://i.postimg.cc/4dSMhG1s/BITCRAFT-13.png",
];


const images2 = [
    "https://i.postimg.cc/7Ls96Vx2/Black-And-White-Minimalist-Milk-Creative-Studio-Logo-1.png",
    "https://i.postimg.cc/Twbb6qhG/KIQNA-1.png",
  "https://i.postimg.cc/GhL471Pb/KIQNA-10.png",
  "https://i.postimg.cc/xdwktJ5Z/KIQNA-11.png",
  "https://i.postimg.cc/SRqnbBw7/KIQNA-12.png",
  "https://i.postimg.cc/SxjJ47t5/KIQNA-13.png",
  "https://i.postimg.cc/63VQcHy7/KIQNA-14.png",
  "https://i.postimg.cc/0jfbktvg/KIQNA-15.png",
  "https://i.postimg.cc/1RcgrzqW/KIQNA-16.png",
  "https://i.postimg.cc/65MyF1zn/KIQNA-17.png",
  "https://i.postimg.cc/mgqhgzvr/KIQNA-18.png",
  "https://i.postimg.cc/zfgvbDNF/KIQNA-19.png",
  "https://i.postimg.cc/0yNJQqrV/KIQNA-2.png",
  "https://i.postimg.cc/nchLKGZz/KIQNA-20.png",
  "https://i.postimg.cc/mDWDQx2f/KIQNA-21.png",
  "https://i.postimg.cc/T1R34rDt/KIQNA-22.png",
  "https://i.postimg.cc/T1C3Mpjf/KIQNA-23.png",
  "https://i.postimg.cc/bNVwmSNR/KIQNA-24.png",
  "https://i.postimg.cc/445dhFDq/KIQNA-25.png",
  "https://i.postimg.cc/rwdF3yD2/KIQNA-26.png",
  "https://i.postimg.cc/2SP8DpWb/KIQNA-27.png",
  "https://i.postimg.cc/q7yBBmcm/KIQNA-28.png",
  "https://i.postimg.cc/ydK1DFv7/KIQNA-29.png",
  "https://i.postimg.cc/TYfDzbxM/KIQNA-3.png",
  "https://i.postimg.cc/sXJV7vN7/KIQNA-30.png",
  "https://i.postimg.cc/vTqb2CMm/KIQNA-31.png",
  "https://i.postimg.cc/sxD3csk8/KIQNA-32.png",
  "https://i.postimg.cc/ZYVbqv3h/KIQNA-33.png",
  "https://i.postimg.cc/m2kb1ZN1/KIQNA-34.png",
  "https://i.postimg.cc/0249YgcW/KIQNA-35.png",
  "https://i.postimg.cc/fR0D5HPw/KIQNA-36.png",
  "https://i.postimg.cc/zfZ5QCmT/KIQNA-37.png",
  "https://i.postimg.cc/tg3yGsyw/KIQNA-38.png",
  "https://i.postimg.cc/50fJ4f20/KIQNA-39.png",
  "https://i.postimg.cc/d3KytkTC/KIQNA-4.png",
  "https://i.postimg.cc/0jQqSZm1/KIQNA-40.png",
  "https://i.postimg.cc/rmgkz7D9/KIQNA-41.png",
  "https://i.postimg.cc/7hWrn7MG/KIQNA-42.png",
  "https://i.postimg.cc/kMxSYckv/KIQNA-5.png",
  "https://i.postimg.cc/wvD1Pqbj/KIQNA-6.png",
  "https://i.postimg.cc/VLgCmNsS/KIQNA-7.png",
  "https://i.postimg.cc/ZqBB8F83/KIQNA-8.png",
  "https://i.postimg.cc/qvZ66Z34/KIQNA-9.png"
];




const DoubleWorkSection: React.FC = () => {
    const [tooltip, setTooltip] = React.useState({ visible: false, x: 0, y: 0, text: '' });

    const handleMouseMove = (e: React.MouseEvent, text: string) => {
        setTooltip({
            visible: true,
            x: e.clientX + 10,
            y: e.clientY + 10,
            text,
        });
    };

    const handleMouseLeave = () => {
        setTooltip(prev => ({ ...prev, visible: false }));
    };

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        vertical: true,      // enables vertical swipe
        loop: true,          // infinite scroll
        slides: {
            perView: 1,        // one slide at a time
        },
    });

    return (
        <section className="relative w-full poppins-font">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Card 1 - White Background */}
                <ClickSpark
                    sparkColor="#ffa223e"
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                >
                    <div className="bg-white border border-black">
                        <div className="relative w-full max-w-lg mx-auto flex justify-center items-center poppins-font p-5 border mt-5">
                            <div onMouseMove={(e) => handleMouseMove(e, "Scroll upwards/downwards")}
                                onMouseLeave={handleMouseLeave} ref={sliderRef} className="keen-slider h-[500px] w-full overflow-hidden rounded-lg">
                                {images.map((src, idx) => (
                                    <div key={idx} className="keen-slider__slide flex justify-center items-center">
                                        <img src={src} alt={`Slide ${idx}`} className="w-full h-full object-cover rounded-md" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-black p-6 space-y-6">
                            <h1 className="text-2xl font-bold flex items-center justify-between">


                                <ScrollFloat
                                    animationDuration={1}
                                    ease="back.inOut(2)"
                                    scrollStart="center bottom+=50%"
                                    scrollEnd="bottom bottom-=40%"
                                    stagger={0.03}
                                >

                                    BitCraft: A Desktop Courseware for e-Learning
                                </ScrollFloat>

                                <span className="ml-2 px-2 py-1 bg-gray-700 text-white text-sm font-mono rounded-3xl">2</span>
                            </h1>
                            <div className="space-y-4">
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    duration={1.0}
                                    ease="power3.out"
                                    initialOpacity={0.0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={0.1}
                                >
                                    <p className="flex items-start gap-2">
                                        <Info className="w-5 h-5 text-black mt-1" />
                                        <span>
                                            <span className="font-semibold">Description:</span> A desktop courseware
                                            built for learners and teachers to learn specific courses made by professional teachers
                                        </span>
                                    </p>
                                </AnimatedContent>

                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={false}
                                    duration={1.2}
                                    ease="power3.out"
                                    initialOpacity={0.0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={0.2}
                                >
                                    <p className="flex items-start gap-2">
                                        <Code2 className="w-5 h-5 text-black mt-1" />
                                        <span>
                                            <span className="font-semibold">Tech Stack:</span> HTML, CSS, JavaScript, JQuery, PHP, PHP:PDO, MySQL, SQLite Standalone, Data-AOS, Plyr, DataTables
                                        </span>
                                    </p>
                                </AnimatedContent>

                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={false}
                                    duration={1.4}
                                    ease="power3.out"
                                    initialOpacity={0.0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={0.3}
                                >
                                    <p className="flex items-start gap-2">
                                        <LayoutDashboard className="w-5 h-5 text-black mt-1" />
                                        <span>
                                            <span className="font-semibold">Project Type:</span> Mobile Application (Cross-platform)
                                        </span>
                                    </p>
                                </AnimatedContent>

                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={false}
                                    duration={1.2}
                                    ease="power3.out"
                                    initialOpacity={0.0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={0.4}
                                >
                                    <p className="flex items-start gap-2">
                                        <UserRound className="w-5 h-5 text-black mt-1" />
                                        <span>
                                            <span className="font-semibold">Client:</span> None (Personal Project)
                                        </span>
                                    </p>
                                </AnimatedContent>

                                    <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={false}
                                    duration={1.2}
                                    ease="power3.out"
                                    initialOpacity={0.0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={0.4}
                                >
                                    <p className="flex items-start gap-2">
                                        <Percent className="w-5 h-5 text-black mt-1" />
                                        <span>
                                            <span className="font-semibold">Progress: 100%</span>
                                        </span>
                                    </p>
                                </AnimatedContent>

                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={false}
                                    duration={1.2}
                                    ease="power3.out"
                                    initialOpacity={0.0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={0.4}
                                >
                                    <p className="flex items-start gap-2">
                                        <GitBranch className="w-5 h-5 text-black mt-1" />
                                        <span>
                                            <span className="font-semibold">Github Link: TBA</span>
                                        </span>
                                    </p>
                                </AnimatedContent>



                            </div>


                        </div>
                    </div>
                </ClickSpark>

                {/* Card 2 - Black Background */}
                <ClickSpark
                    sparkColor="#ffffff"
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                >
                    <div className="bg-black border border-white text-white">
                        <div className="relative w-full max-w-lg mx-auto flex justify-center items-center poppins-font p-5 border mt-5">
                            <div onMouseMove={(e) => handleMouseMove(e, "Scroll upwards/downwards")}
                                onMouseLeave={handleMouseLeave} ref={sliderRef} className="keen-slider h-[500px] w-full overflow-hidden rounded-lg">
                                {images2.map((src, idx) => (
                                    <div key={idx} className="keen-slider__slide flex justify-center items-center">
                                        <img src={src} alt={`Slide ${idx}`} className="w-full h-full object-cover rounded-md" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-white p-6 space-y-6">
                            <h1 className="text-2xl font-bold flex items-center justify-between">
                                <ScrollFloat
                                    animationDuration={1}
                                    ease="back.inOut(2)"
                                    scrollStart="center bottom+=50%"
                                    scrollEnd="bottom bottom-=40%"
                                    stagger={0.03}
                                >
                                    Korean – Innovative Quality Korean-pop Albums Web App
                                </ScrollFloat>
                                <span className="ml-2 px-2 py-1 bg-gray-700 text-white text-sm font-mono rounded-3xl">3</span>
                            </h1>

                            <div className="space-y-4">
                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={true}
                                    duration={1.0}
                                    ease="power3.out"
                                    initialOpacity={0.0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={0.1}
                                >
                                    <p className="flex items-start gap-2">
                                        <Info className="w-5 h-5 text-white mt-1" />
                                        <span>
                                            <span className="font-semibold">Description:</span> An e-commerce web application catering towards buying and selling Korean-pop albums ranging from admin side to client side.
                                        </span>
                                    </p>
                                </AnimatedContent>

                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={false}
                                    duration={1.2}
                                    ease="power3.out"
                                    initialOpacity={0.0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={0.2}
                                >
                                    <p className="flex items-start gap-2">
                                        <Code2 className="w-5 h-5 text-white mt-1" />
                                        <span>
                                            <span className="font-semibold">Tech Stack:</span> HTML, CSS, JavaScript, JQuery, PHP, PHP:PDO, MySQL, Data-AOS, Plyr, DataTables, Paypal API Integration
                                        </span>
                                    </p>
                                </AnimatedContent>

                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={false}
                                    duration={1.4}
                                    ease="power3.out"
                                    initialOpacity={0.0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={0.3}
                                >
                                    <p className="flex items-start gap-2">
                                        <LayoutDashboard className="w-5 h-5 text-white mt-1" />
                                        <span>
                                            <span className="font-semibold">Project Type:</span> Mobile Application (Cross-platform)
                                        </span>
                                    </p>
                                </AnimatedContent>

                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={false}
                                    duration={1.2}
                                    ease="power3.out"
                                    initialOpacity={0.0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={0.4}
                                >
                                    <p className="flex items-start gap-2">
                                        <UserRound className="w-5 h-5 text-white mt-1" />
                                        <span>
                                            <span className="font-semibold">Client:</span> None (Personal Project)
                                        </span>
                                    </p>
                                </AnimatedContent>

                                      <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={false}
                                    duration={1.2}
                                    ease="power3.out"
                                    initialOpacity={0.0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={0.4}
                                >
                                    <p className="flex items-start gap-2">
                                        <Percent className="w-5 h-5 text-white mt-1" />
                                        <span>
                                            <span className="font-semibold">Progress: 100%</span>
                                        </span>
                                    </p>
                                </AnimatedContent>


                                <AnimatedContent
                                    distance={150}
                                    direction="horizontal"
                                    reverse={false}
                                    duration={1.2}
                                    ease="power3.out"
                                    initialOpacity={0.0}
                                    animateOpacity
                                    scale={1.1}
                                    threshold={0.2}
                                    delay={0.4}
                                >
                                    <p className="flex items-start gap-2">
                                        <GitBranch className="w-5 h-5 text-white mt-1" />
                                        <span>
                                            <span className="font-semibold">Github Link: TBA</span>
                                        </span>
                                    </p>
                                </AnimatedContent>




                            </div>
                        </div>
                    </div>
                </ClickSpark>
            </div>
         <div className="bg-black text-white font-extrabold text-center py-4 text-9xl">
  MY OTHER WORKS
</div>
            <div style={{ height: '600px', position: 'relative' }} className="poppins-font">
                <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
            </div>

            {/* Cursor Tooltip */}
            {tooltip.visible && (
                <div
                    className="fixed z-50 bg-black text-white text-xs px-3 py-1 rounded shadow-md pointer-events-none"
                    style={{
                        top: tooltip.y,
                        left: tooltip.x,
                        transform: 'translate(-50%, -50%)',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {tooltip.text}
                </div>
            )}
        </section>
    );
};

export default DoubleWorkSection;
