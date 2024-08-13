import React from 'react';
import './self.css';
import AI from '../../resources/ai.jpg';
import SmartContract from '../../resources/smart contract.jpg';
import FullStack from '../../resources/fullstack.jpg';
import Resume from '../../resources/Cody Liew Chern Jin Resume.pdf';
import FlipCard from '../flip_card/flip_card.js'; // Import the FlipCard component

function Self() {
    return (
        <div className='self'>
            <div className='title'>
                <h2>Expertise</h2>
            </div>
            <div className='expertise'>
                <FlipCard
                    image={AI}
                    title="Artificial Intelligence Engineer"
                    description="Worked on multiple supervised learning models and implemented the saved models in website."
                />
                <FlipCard
                    image={SmartContract}
                    title="Smart Contract Developer"
                    description="Web 3 enthusiast and developing own business ideas and deploying smart contracts in the Ethereum Chain"
                />
                <FlipCard
                    image={FullStack}
                    title="Full Stack Developer"
                    description="Self learnt Full Stack Developer and worked on multiple website with front and backend interactions."
                />
            </div>

            <div className='resume' onClick={() => window.open(Resume)}>
                View Resume
            </div>
        </div>
    );
}

export default Self;
