import React, { useState, useEffect } from 'react';
import './profile.css';	
import Profile1 from '../../resources/profile1.jpg';
import Profile2 from '../../resources/profile2.jpg';
import Profile3 from '../../resources/profile3.jpg';
import Profile4 from '../../resources/profile4.jfif';
import Github from '../../resources/github.png';
import LinkedIn from '../../resources/linkedin.png';
import Email from '../../resources/gmail.webp';
import Summary from '../../resources/summary.txt';

function Profile() {
    const [num, setNum] = useState(1);
    const [profile, setProfile] = useState(Profile4);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isEmailCopied, setIsEmailCopied] = useState(false);
    const [summaryText, setSummaryText] = useState('');

    useEffect(() => {
        fetch(Summary)
            .then(response => response.text())
            .then(text => setSummaryText(text))
            .catch(error => console.error('Error fetching the summary:', error));
    }, []);

    function changeProfile() {
        setIsTransitioning(true); // Start the transition

        // Wait for the fade-out transition to complete before changing the image
        setTimeout(() => {
            setNum((prevNum) => (prevNum >= 4 ? 1 : prevNum + 1));
            switch (num) {
                case 1:
                    setProfile(Profile1);
                    break;
                case 2:
                    setProfile(Profile2);
                    break;
                case 3:
                    setProfile(Profile3);
                    break;
                case 4:
                    setProfile(Profile4);
                    break;
                default:
                    setProfile(Profile4);
                    break;
            }

            setIsTransitioning(false); // End the transition
        }, 500); // Match the duration with the CSS transition time
    }

    function copyText() {
        const textToCopy = "codyyliew@gmail.com";
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setIsEmailCopied(true);
                // Hide the pop-up after 2 seconds
                setTimeout(() => {
                    setIsEmailCopied(false);
                }, 500);
            })
            .catch((error) => {
                console.error("Failed to copy text:", error);
            });
    }

    return (
        <div className='profile'>
            <div className={`email-copied-popup ${isEmailCopied ? 'show' : ''}`}>
                Email copied!
            </div>
            <div className={`profile-image-container ${isTransitioning ? 'transitioning' : ''}`}>
                <img className='profile-image' src={profile} onClick={changeProfile} alt='Profile Picture' />
            </div>

            <div className='personal-details'>
                <h2>Cody Liew Chern Jin</h2>
                <h4>AI Engineer / Web3 Developer</h4>
            </div>

            <div className='social-media'>
                <a href="https://github.com/codyy6" target='blank'><img src={Github} className='social-media-img' alt="GitHub"/></a>
                <a href="https://www.linkedin.com/in/cody-liew-3388b81aa/" target='blank' ><img src={LinkedIn} className='social-media-img' alt="LinkedIn"/></a>
                <a onClick={copyText}><img src={Email} className='social-media-img' alt="Email"/></a>
            </div>
            
            <div className='summary'>
                {summaryText.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Profile;
