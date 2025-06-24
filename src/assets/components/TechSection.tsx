import React from 'react';
import FallingText from '../react-bits/animations/FallingText/FallingText';
import reactLogo from '../../assets/react.svg';
import typescriptLogo from '../../assets/Typescript_logo_2020.svg';
import viteLogo from '../../assets/Vitejs-logo.svg';
import tailwindLogo from '../../assets/Tailwind_CSS_Logo.svg';
import html5Logo from '../../assets/HTML5_logo_and_wordmark.svg';
import cssLogo from '../../assets/CSS3_logo_and_wordmark.svg';
import javascriptLogo from '../../assets/JavaScript-logo.png';
import flutterLogo from '../../assets/flutter.svg'
import phpLogo from '../../assets/new-php-logo.svg';
import fireBaseLogo from '../../assets/firebase-svgrepo-com.svg'
import mysqlLogo from '../../assets/mysql-svgrepo-com.svg'
import gitLogo from '../../assets/Git-Icon-1788C.svg'
import pythonLogo from '../../assets/python-svgrepo-com.svg';
import AnimatedContent from '../react-bits/AnimatedContent/AnimatedContent';



const TechSection: React.FC = () => {
    return (
        <section className="relative w-full h-screen bg-[#f1f1f1] flex items-center justify-center overflow-hidden poppins-font">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e5e5e5] to-[#ffffff]" />
            <div className="relative z-10 w-[100%] h-[100%] max-w-screen bg-whit text-black rounded shadow-[0_20px_80px_rgba(0,0,0,0.1)] border border-black p-16 flex items-center gap-16">
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
                        <h2 className="text-9xl font-extrabold ">[my tech stack]</h2>
                    </AnimatedContent>
                </div>
                <div className="w-1/2 space-y-25">

                    <div className="flex gap-10 justify-end">

                        <div className="w-150 h-150 rounded bg-black text-transparent">
                            <FallingText
                                highlightWords={["React", "TypeScript", "Vite", "Tailwind"]}
                                highlightClass="highlighted"
                                trigger="scroll"
                                gravity={0.5}
                                fontSize="1.1rem"
                            >
                                <div className="flex flex-col gap-2 p-2 font-extrabold">

                                    <div className="word  bg-white text-black rounded-2xl p-1">
                                        <img
                                            src={reactLogo}
                                            alt="React Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                        <h1 className="text-black">React</h1>
                                    </div>

                                    <div className="word  bg-white text-black rounded-2xl p-1">
                                        <img
                                            src={tailwindLogo}
                                            alt="Tailwind Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                        <h1 className="text-black">Tailwind</h1>
                                    </div>

                                    <div className="word  bg-white text-black rounded-2xl p-1">
                                        <img
                                            src={typescriptLogo}
                                            alt="TypeScript Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                        <h1 className="text-black">TypeScript</h1>
                                    </div>

                                    <div className="word  bg-white text-black rounded-2xl p-1">
                                        <img
                                            src={viteLogo}
                                            alt="Vite Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                        <h1 className="text-black">Vite</h1>
                                    </div>

                                    <div className="word  bg-white text-black rounded-2xl p-1 ">
                                        <img
                                            src={html5Logo}
                                            alt="HTML 5 Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                        <h1 className="text-black">HTML</h1>
                                    </div>

                                    <div className="word  bg-white text-black rounded-2xl p-1 ">
                                        <img
                                            src={cssLogo}
                                            alt="CSS Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                        <h1 className="text-black">CSS</h1>
                                    </div>

                                    <div className="word  bg-white text-black rounded-2xl p-1 ">
                                        <img
                                            src={javascriptLogo}
                                            alt="Javascript Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                        <h1 className="text-black">JavaScript</h1>
                                    </div>

                                    <div className="word  bg-white text-black rounded-2xl p-1 ">
                                        <img
                                            src={flutterLogo}
                                            alt="Flutter Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                        <h1 className="text-black">Flutter</h1>
                                    </div>

                                    <div className="word  bg-white text-black rounded-2xl p-1 ">
                                        <img
                                            src={phpLogo}
                                            alt="PHP Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                        <h1 className="text-black">PHP</h1>
                                    </div>

                                    <div className="word  bg-white text-black rounded-2xl p-1 ">
                                        <img
                                            src={mysqlLogo}
                                            alt="mySQL Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                        <h1 className="text-black">MySQL</h1>
                                    </div>

                                    <div className="word  bg-white text-black rounded-2xl p-1 ">
                                        <img
                                            src={fireBaseLogo}
                                            alt="Firebase Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                        <h1 className="text-black">Firebase</h1>
                                    </div>

                                    <div className="word  bg-white text-black rounded-2xl p-1 ">
                                        <img
                                            src={pythonLogo}
                                            alt="Python Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                        <h1 className="text-black">Python</h1>
                                    </div>

                                    <div className="word  bg-white text-black rounded-2xl p-1 ">
                                        <img
                                            src={gitLogo}
                                            alt="Git Logo"
                                            style={{ width: "30px", height: "30px" }}
                                        />
                                        <h1 className="text-black">Git</h1>
                                    </div>
                                </div>
                            </FallingText>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechSection;
