import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";
import Writing from "./Writing.jsx";

export default function HomePage(){
    return (
        <main>
            <About />
            <Projects />
            <Writing/>
            <Contact/>
        </main>
    );
}