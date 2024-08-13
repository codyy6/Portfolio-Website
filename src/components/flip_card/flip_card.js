import React from 'react';
import './flip_card.css';

function FlipCard({ image, title, description, link }) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={image} alt="Image" />
                </div>
                <div className="flip-card-back">
                    <a href={link} target="_blank"><h4 className="title">{title}</h4></a>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;