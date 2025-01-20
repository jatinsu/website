import './Tools.css'
import cplusIcon from '../assets/icons/cplus.svg'
import pythonIcon from '../assets/icons/python.svg'
import reactIcon from '../assets/icons/react.svg'
import htmlIcon from '../assets/icons/html.svg'


function Tools(){
    const tools = [
        { name: 'C++', icon: cplusIcon },
        { name: 'Python', icon: pythonIcon },
        { name: 'React', icon: reactIcon },
        { name: 'HTML', icon: htmlIcon },
    ];

    return(
        <>
            <div className='tools-section'>
                <div className="tools-container">
                <div className='tools'>Tools</div>
                    <div className='tools-grid'>
                        {tools.map((tool, index) => (
                            <div key={index} className='tool-icon'>
                                <img src={tool.icon} alt={tool.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tools;