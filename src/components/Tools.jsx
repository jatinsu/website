import './Tools.css'
import cplusIcon from '../assets/icons/cplus.svg'
import pythonIcon from '../assets/icons/python.svg'
import reactIcon from '../assets/icons/react.svg'
import htmlIcon from '../assets/icons/html.svg'
import goIcon from '../assets/icons/go.svg'
import vrlIcon from '../assets/icons/vrl.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import typescriptIcon from '../assets/icons/typescript.svg'
import cssIcon from '../assets/icons/css.svg'
import autdeskIcon from '../assets/icons/autodesk.svg'


function Tools(){
    const tools = [
        { name: 'C++', icon: cplusIcon },
        { name: 'Python', icon: pythonIcon },
        { name: 'React', icon: reactIcon },
        { name: 'HTML', icon: htmlIcon },
        { name: 'Go', icon: goIcon },
        { name: 'VRL', icon: vrlIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'TypeScript', icon: typescriptIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'Autodesk', icon: autdeskIcon }
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