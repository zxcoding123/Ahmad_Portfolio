import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedContent from '../react-bits/AnimatedContent/AnimatedContent';

interface Testimonial {
    id: number;
    name: string;
    institution: string;
    image: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Kyla Celecious Tomocon',
        institution: 'Western Mindanao State University',
        image: 'https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-1/504027539_1981650085925947_4421986297752753649_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHTx-0KubsTgf0VwLCsvVIPsRdRRZHU7GCxF1FFkdTsYK_UWv-4UdCQIZ0R-Djk6maFEyoWfhfk-2eKpi833VX0&_nc_ohc=A6RHImAQpf0Q7kNvwFL2Z2u&_nc_oc=AdmQ8-t-3HTZutBztAK4Z3_K7vHPj_jwgHJL34luf2aNsSfV62NbI-CndQ06NFbxIiQ&_nc_zt=24&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=aghFgI55e7Fs8qzJQyjqvg&oh=00_AfN52WvdEwjG00gZtemd2-yJmZHbgsWKwSS0hAnpHUJylA&oe=6859FCAF',
        quote: 'Incredibly warm and easy to work with — made everything feel smooth and effortless.',
    },
    {
        id: 2,
        name: 'Leon A.',
        institution: 'Private',
        image: 'https://cdn.vectorstock.com/i/500p/63/42/placeholder-icon-person-silhouette-vector-30916342.jpg',
        quote: 'Ahmad made working with our web applications look easier than ever. Our features worked seamlessly with each and every new iterations! ',
    },
    {
        id: 3,
        name: 'Private',
        institution: 'Ateneo de Zamboanga University',
        image: 'https://cdn.vectorstock.com/i/500p/63/42/placeholder-icon-person-silhouette-vector-30916342.jpg',
        quote: 'Pretty neat to work with. His designs are always pleasing!',
    },
];

const colors = [
    { bg: 'bg-black', text: 'text-white', iconBg: 'bg-white', iconText: 'text-black' },
    { bg: 'bg-white', text: 'text-black', iconBg: 'bg-black', iconText: 'text-white' },
];

const TestimonialCarousel: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const handleNext = () => {
        setDirection('right');
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection('left');
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[index];
    const colorTheme = colors[index % colors.length];

    return (
        <section className="poppins-font">
            <div className="max-w-6xl mx-auto px-4 py-20">
                    <AnimatedContent
                        distance={10}
                        direction="horizontal"
                        reverse={false}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.0}
                        threshold={0.2}
                        delay={0.0}
                    > 
                <h2 className="text-7xl font-bold  mb-12 text-gray-800">[testimonials]</h2>
                </AnimatedContent>
                   <AnimatedContent
                        distance={10}
                        direction="horizontal"
                        reverse={true}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.0}
                        threshold={0.2}
                        delay={0.4}
                    >  
                <p className='mb-15 text-right'>
                    Here’s what my clients say about our collaboration.
                    Their satisfaction and meeting expectations are my top priorities — ensuring the best experience possible every step of the way.
                </p>
                     </AnimatedContent>
                      <AnimatedContent
                        distance={10}
                        direction="horizontal"
                        reverse={true}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.0}
                        threshold={0.2}
                        delay={0.8}
                    >   
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current.id}
                            initial={{ x: direction === 'right' ? 300 : -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: direction === 'right' ? -300 : 300, opacity: 0 }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                            className={`rounded-lg shadow-lg flex gap-5 transition-colors duration-1000 ${colorTheme.bg}`}
                        >
                            {/* Profile section */}
                            <div className={`w-1/3 flex flex-col items-center justify-center p-5  ${colorTheme.bg}`}>
                                <img
                                    src={current.image}
                                    alt={current.name}
                                    className="w-12 h-12 rounded-full bg-gray-300"
                                />
                                <p className={`mt-2 text-center font-semibold ${colorTheme.text}`}>{current.name}</p>
                                <p className={`text-sm text-center ${colorTheme.text}`}>{current.institution}</p>
                            </div>

                            {/* Testimonial section */}
                            <div className={`w-2/3 pl-6 flex flex-col justify-center p-10  ${colorTheme.bg}`}>
                                <FaQuoteLeft className={`text-4xl mb-2 border rounded-full p-2 ${colorTheme.iconText} ${colorTheme.iconBg}`} />
                                <p className={`text-2xl ${colorTheme.text}`}>{current.quote}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        title="asd"
                        onClick={handlePrev}
                        className="absolute left-[-2.5rem] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        title="asd"
                        onClick={handleNext}
                        className="absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
                    >
                        <FaChevronRight />
                    </button>
                </div>
                   </AnimatedContent>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
