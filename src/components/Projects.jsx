import './Projects.css';
import exampleBackground from '../assets/dev-image.png';
import leftArrow from '../assets/icons/left-arrow.svg';
import rightArrow from '../assets/icons/right-arrow.svg';
import campusLFG from '../assets/projects/campus-lfg.png';
import discordBot from '../assets/projects/discord-bot.png';
import { useRef } from 'react';

function Projects(){
    const scrollContainerRef = useRef(null);
    
    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth * 0.42; // 40% width + 2% gap
        
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    const projects = [
        { name: 'Campus-LFG', description: 'Gaming for Colleges.', background: campusLFG },
        { name: 'Discord Bot', description: 'Discord bot focused on gaming.', background: discordBot },
        { name: 'Project 3', description: 'Description 3', background: exampleBackground },
        { name: 'Project 4', description: 'Description 4', background: exampleBackground },
        { name: 'Project 5', description: 'Description 5', background: exampleBackground },
    ];

    return(
        <>
            <div className='project-header'>My Projects.</div>
            <div className='projects-container' ref={scrollContainerRef}>
                {projects.map((project, index) => (
                    <div key={index} className='project'>
                        <div className='project-background'>
                            <img src={project.background} alt={project.name} />
                        </div>
                        <div className='project-info'>
                            <div className='project-name'>{project.name}</div>
                            <div className='project-description'>{project.description}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='scroll-buttons'>
                <button className='scroll-button left' onClick={() => scroll('left')}>
                    <img src={leftArrow} alt="Scroll left" />
                </button>
                <button className='scroll-button right' onClick={() => scroll('right')}>
                    <img src={rightArrow} alt="Scroll right" />
                </button>
            </div>
        </>
    )
}

export default Projects;