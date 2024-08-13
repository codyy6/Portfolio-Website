import React, { useState, useRef, useEffect } from 'react';
import './home.css';
import Profile from '../components/profile/profile.js';
import Projects from '../components/projects/projects.js';
import Self from '../components/self/self.js';
import Skills from '../components/skills/skills.js';
import Experiences from '../components/experiences/experiences.js';

function Home(){
    const [activeComponent, setActiveComponent] = useState(null);
    const contentRefs = useRef([]);

    useEffect(() => {
        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                if (activeComponent === index + 1) {
                    ref.style.maxHeight = `${ref.scrollHeight}px`;
                    ref.style.opacity = '1';
                } else {
                    ref.style.maxHeight = '0px';
                    ref.style.opacity = '0';
                }
            }
        });
    }, [activeComponent]);

    const handleClick = (component) => {
        setActiveComponent(activeComponent === component ? null : component);
    };

    return(
        <div className='main'>
            <Profile />
            <div className='right'>
                <div className='right-content'>
                    <div>
                        <h4>class CodyLiew:</h4>
                    </div>

                    <div className='section' >
                        <h4 className='header' onClick={() => handleClick(1)}>def __init__(self):</h4>
                        <div
                            className='content'
                            ref={el => contentRefs.current[0] = el}
                            
                        >
                            <Self />
                        </div>
                    </div>

                    <div className='section'>
                        <h4 className='header' onClick={() => handleClick(2)}>def projects:</h4>
                        <div
                            className='content'
                            ref={el => contentRefs.current[1] = el}
                        >
                            <Projects />
                        </div>
                    </div>

                    {/* <div className='section'>
                        <h4 className='header' onClick={() => handleClick(3)}>def skills:</h4>
                        <div
                            className='content'
                            ref={el => contentRefs.current[2] = el}
                        >
                            <Skills />
                        </div>
                    </div> */}

                    <div className='section'>
                        <h4 className='header' onClick={() => handleClick(3)}>def experiences:</h4>
                        <div
                            className='content'
                            ref={el => contentRefs.current[2] = el}
                        >
                            <Experiences />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;
