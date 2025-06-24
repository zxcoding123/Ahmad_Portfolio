import React from 'react';
import CardSwap, { Card } from '../react-bits/CardSwap/CardSwap'
import { Notebook, Info, Code2, LayoutDashboard, UserRound } from "lucide-react";
import ScrollFloat from '../react-bits/ScrollFloat/ScrollFloat';
import AnimatedContent from '../react-bits/AnimatedContent/AnimatedContent';


const WorksSection: React.FC = () => {
    return (
        <div className="poppins-font py-24 relative z-10 max-w-screen h-screen bg-black text-white rounded shadow-[0_20px_80px_rgba(0,0,0,0.1)] border border-black p-16 flex items-center gap-16">
            <div className="w-1/2 space-y-24">
                <h1 className="text-9xl font-bold flex items-center justify-between">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                    > LearnMate
                    </ScrollFloat>
                    <span className="ml-2 px-2 py-1 rounded-full bg-gray-700 text-white text-sm font-mono">
                        1
                    </span>
                </h1>
                <div className="text-lg text-gray-300 space-y-4">

                    <div className="text-lg text-gray-300 space-y-4">
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

                                    <span className="font-semibold text-white">Description:</span> A mobile app built for freelance teachers and elementary pupils to book video conferencing sessions and engage in e-learning style lessons.

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
                                    <span className="font-semibold text-white">Tech Stack:</span> Flutter, Firebase, Agora
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
                                    <span className="font-semibold text-white">Project Type:</span> Mobile Application (Cross-platform)
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
                                <UserRound className="w-5 h-5 text-white mt-1" />
                                <span>
                                    <span className="font-semibold text-white">Client:</span> Freelance 
                                </span>
                            </p>
                        </AnimatedContent>
                    </div>
                </div>
            </div>



            <div className="w-1/2 flex justify-end items-end text-right">
                <div style={{ height: '350px', position: 'sticky' }} className='p-2'>
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={70}
                        delay={5000}
                        pauseOnHover={false}
                        height={465}
                        width={600}
                    >

                         <Card className="p-2">
                            <div className='bg-white text-black p-1 rounded'>
                                <h3 className="flex items-center gap-2 text-black">
                                    <Notebook className="w-5 h-5" /> App Logo
                                </h3>


                            </div>

                            <div className="w-full h-100 p-5 overflow-hidden rounded-xl">
                                <img
                                    src="https://i.ibb.co/mxLts0P/CanScan.png"
                                    alt="test"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </Card>

                        <Card className="p-2">
                            <div className='bg-white text-black p-1 rounded'>
                                <h3 className="flex items-center gap-2 text-black">
                                    <Notebook className="w-5 h-5" /> UI 1
                                </h3>


                            </div>

                            <div className="w-full h-100 p-5 overflow-hidden rounded-xl">
                                <img
                                    src="https://i.ibb.co/7N0KvSmT/Screenshot-20241115-095415.png"
                                    alt="test"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </Card>

                        <Card className="p-2">
                            <div className='bg-white text-black p-1 rounded'>
                                <h3 className="flex items-center gap-2 text-black">
                                    <Notebook className="w-5 h-5" /> UI 2
                                </h3>


                            </div>

                            <div className="w-full h-100 p-5 overflow-hidden rounded-xl">
                                <img
                                     src="https://i.ibb.co/Z1FhWQS1/Screenshot-20241115-095503.png"
                                    alt="test"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </Card>


                        <Card className="p-2">
                            <div className='bg-white text-black p-1 rounded'>
                                <h3 className="flex items-center gap-2 text-black">
                                    <Notebook className="w-5 h-5" /> UI 3
                                </h3>


                            </div>

                            <div className="w-full h-100 p-5 overflow-hidden rounded-xl">
                                <img
                                    src="https://i.ibb.co/PvC2DN8s/Screenshot-20241115-095616.png"
                                    alt="test"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </Card>

                           <Card className="p-2">
                            <div className='bg-white text-black p-1 rounded'>
                                <h3 className="flex items-center gap-2 text-black">
                                    <Notebook className="w-5 h-5" /> UI 4
                                </h3>


                            </div>

                            <div className="w-full h-100 p-5 overflow-hidden rounded-xl">
                                <img
                                    src="https://i.ibb.co/QjC3xs1c/Screenshot-20241115-101805.png"
                                    alt="test"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </Card>


                    </CardSwap>
                </div>
            </div>
        </div>



    )
};

export default WorksSection