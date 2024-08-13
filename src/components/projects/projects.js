import React from 'react';
import './projects.css';
import FlipCard from '../flip_card/flip_card.js'; 
import AIditVerse from '../../resources/aiditverse.png';
import LBP from '../../resources/lbp.webp';
import Hotel from '../../resources/hotel.png';
import BlockChess from '../../resources/blockchess.png';
import Glove from '../../resources/glove.jpg';
import APUBCC from '../../resources/apubcc.png';

function Projects() {
    return (
        <div className="projects-container">
            <FlipCard
                image={AIditVerse}
                title="AI Smart Contract Auditing"
                description="Trained an AI model to predict vulnerabilities in smart contracts through NLP. Detection not functioning because unable to host backend"
                link="https://aiditverse.vercel.app/"
            />
            <FlipCard
                image={LBP}
                title="Lower Back Pain Prediction"
                description="Used multiple supervised machine learning models to predict lower back pain in patients using numerical columns"
                link="https://github.com/JiaYong02/Lower-Back-Pain-Prediciton"
            />
            <FlipCard
                image={Hotel}
                title="Hotel Sentiment Analysis"
                description="Supervised learning model to predict sentiment of hotel reviews"
                link="https://github.com/codyy6/Text-Analytic-Hotel-Review-Sentiment-Analysis"
            />
            <FlipCard
                image={BlockChess}
                title="BlockChess"
                description="Develop a smart contract that allow chess betting on the Ethereum blockchain"
                link="https://github.com/Jeanqianying/ETHKL"
            />
            <FlipCard
                image={Glove}
                title="Glove Vulnerabilities Detection"
                description="Utilise image processing techniques to detect defects in gloves"
                link="https://github.com/EHeng17/glove-defect-detection"
            />
            <FlipCard
                image={APUBCC}
                title="APUBCC Website"
                description="Responsible for vision and mission page for Asia Pacific University Blockchain & Cryptocurrency (APUBCC) website"
                link="https://apubcc.org/"
            />
        </div>
    );
}

export default Projects;
