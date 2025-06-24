import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTiktok, FaArrowCircleDown } from 'react-icons/fa';
import CircularText from '../react-bits/CircularText/CircularText'
import SplitText from '../react-bits/SplitText/SplitText';
import BlurText from '../react-bits/BlurText/BlurText';
import Magnet from '../react-bits/animations/Magnet/Magnet';
import AnimatedContent from '../react-bits/AnimatedContent/AnimatedContent';
import ClickSpark from '../react-bits/ClickSpark/ClickSpark';

const WelcomePage: React.FC = () => {
  const [, setIsDark] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDark((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <ClickSpark
      sparkColor='#ffa223e'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="relative h-screen w-full poppins-font overflow-hidden">

        <div className="flex justify-between w-full text-[10.9rem]  px-10 ">
          <div className="flex flex-col items-start ">
            <SplitText
              text="AHMAD"
              className=" font-semibold text-center"
              delay={100}
              duration={2}
              ease="elastic.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <div className="flex gap-4 mt-4 e">
              <AnimatedContent
                distance={10}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <CircularText
                  text="socials*socials*socials*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="tb"
                />
              </AnimatedContent>


              <FaFacebook size={32} />
              <a href="https://www.tiktok.com/@livet515"> 
              <FaTiktok size={32} />
              </a>
            </div>

          </div>
          <div className="flex flex-col items-end">
            <SplitText
              text="AQUINO"
              className=" font-semibold text-center"
              delay={100}
              duration={2.6}
              ease="elastic.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"

            />
            <FaArrowCircleDown size={32} />
            <span
              className="text-[1.2rem] text-gray-500 mt-5 text-right w-100"
            >
              <BlurText
                text="I design and develop websites that give  ambitious brands a digital edge."
                delay={50}
                animateBy="words"
                direction="bottom"
              />
            </span>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-end justify-end pointer-events-none z-0 mb-20 p-5">
          <span
            className="text-[2rem] text-gray-500"
          >
            <BlurText
              text="freelancing since"
              delay={150}
              animateBy="words"
              direction="bottom"
            />


          </span>
          <span
            className="text-[5rem]   text-black font-semibold"

          >
            <BlurText
              text="MAY 2023"
              delay={125}
              animateBy="letters"
              direction="top"
            />
          </span>
        </div>


        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span
            className="text-[20rem] font-bold opacity-100 select-none text-white"
            style={{ WebkitTextStroke: '10px black' }}
          >
            <Magnet padding={100} disabled={false} magnetStrength={50}>
              <BlurText
                text="&lt;/&gt;"
                delay={125}
                animateBy="letters"
                direction="bottom"
              />
            </Magnet>
          </span>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black text-white overflow-hidden z-20 border-t-2 border-b-2 border-black">
          <div className="flex w-max animate-scroll whitespace-nowrap p-2 font-semibold tracking-wider text-5xl">
            {[
              'FULLSTACK DEVELOPER',
              'FRONTEND DEVELOPER',
              'BACKEND DEVELOPER',
              'MOBILE APPLICATION DEVELOPER',
              'GRAPHIC DESIGNER',
            ].map((text, i) => (
              <span key={i} className="mx-8">
                <span className="inline-block animate-spin-slow mr-4">▲</span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ClickSpark>
  );
};

export default WelcomePage;
