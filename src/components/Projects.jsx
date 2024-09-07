import ProjectFrame from "./ProjectFrame.jsx";
import "./Projects.css";
import csBridgeImg from "../assets/CSBRIDGE.png";
import pageTunesImg from "../assets/pagetunes.png"

export default function Projects() {
    return (
    <section id="projects">
        <h1 className="section-heading"> Projects & Qualifications </h1>
 
        <ProjectFrame   name="PageTunes" 
                        text="With AI-powered playlist creation and a vibrant community, 
                        readers can dive into personalized playlists, 
                        taking their reading experience to the next level!"
                        image={pageTunesImg}> <a href="/allProjects">View Project</a>
        </ProjectFrame>

        <ProjectFrame   name="CS Bridge" 
                        text="Developed a computer science curriculum specifically 
                        designed for high school students in the New York City 
                        public school system." 
                        image={csBridgeImg}
                        > <a href="/allProjects">View Project</a>
        </ProjectFrame>

        <button>More Projects</button>

                      

    </section>)
}