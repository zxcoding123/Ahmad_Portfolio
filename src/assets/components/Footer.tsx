import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Manila',
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 poppins-font">
        {/* Left: Name + Tagline + Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-8xl font-semibold tracking-wide mb-5">[ahmad aquino]</h2>
          <p className="text-sm text-gray-400">Crafting clean code and compelling experiences.</p>
          <div className="mt-3 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Ahmad Aquino. All rights reserved.
          </div>
        </div>

        {/* Right: Social + PH Clock */}
        <div className="flex flex-col items-center gap-3 md:items-end">
          <div className="flex space-x-6 text-lg">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-gray-400">
              <FaEnvelope />
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400 mt-3">
            
            <span className="text-lg">🇵🇭</span>
            <span>Philippine Time:</span>
            <span className="font-mono text-white">{time}</span>
          </div>
          
        </div>
        
      </div>
      
    </footer>
  );
};

export default Footer;
