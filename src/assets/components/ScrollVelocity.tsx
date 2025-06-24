import React from 'react';
import ScrollVelocity from '../react-bits/ScrollVelocity/ScrollVelocity';

const WorksSection: React.FC = () => {
    return (
   <div className='font-extrabold'>
                <ScrollVelocity
                    texts={['MY FEATURED WORKS', 'WORKS FEATURED MY']}
                    velocity={50}
                    className="custom-scroll-text"
                />
            </div>
    )
};

export default WorksSection