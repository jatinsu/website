import './Projects.css';
import leftArrow from '../assets/icons/left-arrow.svg';
import rightArrow from '../assets/icons/right-arrow.svg';
import campusLFG from '../assets/projects/campus-lfg.png';
import discordBot from '../assets/projects/discord-bot.png';
import website from '../assets/projects/website.png';
import flashcards from '../assets/projects/flashcards.png';
import cadModels from '../assets/projects/cad-models.png';
import openButton from '../assets/icons/open-button.svg';
import { useRef, useState } from 'react';

function Projects(){
    const scrollContainerRef = useRef(null);
    const [expandedIndex, setExpandedIndex] = useState(null);
    
    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth * 0.42; // 40% width + 2% gap
        
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    const handleProjectClick = (index, e) => {
        // Prevent triggering when clicking the learn more button
        if (e.target.closest('.learn-more-btn')) return;
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleLearnMoreClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const projects = [
        {   
            name: 'Campus-LFG', 
            description: 'Gaming for Colleges.', 
            background: campusLFG, 
            expandedView: 
            <div>
                <a href="https://youtu.be/OrGEcA5Bsd8">Demo of project</a>
                <p>This is a Full stack website created using React for the frontend and SQL with NodeJS for the backend. It has alot of features, including</p>
                <ul>
                    <li>Creating an account</li>
                    <li>Creating and joining a group</li>
                    <li>Viewing a list of groups in a particular game</li>
                    <li>Sending/recieving messages to a group or to a user</li>
                </ul>
                <a href="https://github.com/JNC-Enterprise/campus-lfg">Source Code </a>
            </div>
            
        },
        { 
            name: 'Discord Bot', 
            description: 'Discord bot focused on gaming.', 
            background: discordBot, 
            expandedView:
            <div>
                <a href="https://github.com/jatinsu/ValorantDiscordBot">Source Code</a>
                <p>
                    A discord bot created using Python and Discordpy. It has a user friendly interface as it's used through Discord, and it supports discords slash commands. You are able to search GIFs, ask it to give you a specific Agent/Map, ask it to repeat what you said, and more.
                    It is hosted on Oracle Cloud, and you are able to add it to your server by clicking the link below.
                </p>
                <a href="">Add to Discord</a>
            </div>
        },
        { 
            name: 'My Portfolio Website', 
            description: 'The website you\'re currently viewing.', 
            background: website, 
            expandedView: 'Expanded view of Campus-LFG'
        },
        { 
            name: 'Cad Models', 
            description: 'A collection of models I created', 
            background: cadModels, 
            expandedView: 'Expanded view of Campus-LFG'
        },
        { 
            name: 'FlashCards', 
            description: 'A TUI version of Flashcards', 
            background: flashcards, 
            expandedView: 'Expanded view of Campus-LFG'
        }
    ];

    return(
        <>
            <div className='project-header'>My Projects</div>
            <div className='projects-container' ref={scrollContainerRef}>
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className={`project ${expandedIndex === index ? 'expanded' : ''}`}
                        onClick={(e) => handleProjectClick(index, e)}
                        style={{ flex: expandedIndex === index ? '0 0 80%' : '0 0 20%' }}
                    >
                        <div className='project-background'>
                            <img src={project.background} alt={project.name} />
                        </div>
                        <div className='project-info'>
                            <div className='project-name'>{project.name}</div>
                            <div className='project-description'>
                                {project.description}
                                {expandedIndex === index && (
                                    <div className='expanded-content'>
                                        <p>{project.expandedView}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <button 
                            className='learn-more-btn'
                            onClick={() => handleLearnMoreClick(index)}
                        >
                            <img src={openButton} alt="Learn more" />
                        </button>
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