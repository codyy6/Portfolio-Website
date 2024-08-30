import React from 'react';
import './work_experiences.css';

function WorkExperiences({ image, title, description, onHover, onLeave }) {
    return (
        <div
            className='work-experience'
            onMouseEnter={() => onHover(image)}
            onMouseLeave={onLeave}
        >
            <h4 className='title'>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

export default WorkExperiences;
