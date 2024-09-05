import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";
import Writing from "./components/Writing.jsx";
import {Container } from 'react-bootstrap';


function App() {

    return (
      <>
        {/* forward slash is needed */}
        <div id="body">
                <Header/>
                <main>
                    <About />
                    <Projects />
                    <Writing/>
                    <Contact/>
                </main>
        </div>
      </>
    );
}

export default App;