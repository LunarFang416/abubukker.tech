import './Content.css'
import info from './info'
import resume from '../assets/resume.pdf'

const Content = () => {
    return (
        <div className="contentContainer">
            <div className="introContainer">
                <h1><bold>Abubukker Chaudhary</bold></h1>
                <h3>{info.status}</h3>
                <h4>[<a href={resume} target="_blank">Resume</a>]</h4>
            </div>
            <div className="projectsContainer">
            
            </div>

        </div>
    );
}

export default Content;