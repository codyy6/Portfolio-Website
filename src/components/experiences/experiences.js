import React, { useState, useEffect } from 'react';
import WorkExperiences from './work_experiences.js'; // Import the component
import './experiences.css';
import sc from '../../resources/sc.jpg';
import outlier from '../../resources/outlier.webp';
import t_ai from '../../resources/t_ai.jpeg';

// Set the carousel images
const images = [
    sc,
    outlier,
    t_ai,
];

// Set the work experiences and also images when hovering over them
const workExperiences = [
    {
        title: 'Outlier AI Prompt Engineer - Part Time',
        description: 'Helped in improving the prompts of their LLM models, doing reinforcement learning for the company and verifying reinforcement work of other users.',
        image: outlier,
    },
    {
        title: 'Talentcloud.AI Software Tester / Project Manager - Intern',
        description: 'Doing QA testing and liaising with clients about the project. Occasionally helping out with frontend development of the project.',
        image: t_ai,
    },
    {
        title: 'SalesConnection Software Tester / Business Development - Intern',
        description: 'Responsible for improving workflow in the company and doing QA testing for the company.',
        image: sc,
    },
    // Add more work experiences here
];

function Experiences() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (!hovered) {
            const intervalId = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000); // Change image every 3 seconds

            return () => clearInterval(intervalId);
        }
    }, [hovered]);

    const handleMouseEnter = (index) => {
        setHovered(true);
        setCurrentImageIndex(index);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className='divider'>
            <div className='slideshow'>
                <img src={images[currentImageIndex]} alt={`Slideshow ${currentImageIndex}`} className='slideshow-image' />
            </div>
            <div className='options'>
                {workExperiences.map((experience, index) => (
                    <WorkExperiences
                        key={index}
                        image={experience.image}
                        title={experience.title}
                        description={experience.description}
                        onHover={() => handleMouseEnter(index)} // Pass the index to handleMouseEnter
                        onLeave={handleMouseLeave}
                    />
                ))}
            </div>
        </div>
    );
}

export default Experiences;
