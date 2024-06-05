import Nav from "../../Components/Nav/Nav";
import Buttons from "../../Components/Button/Button";
import About from "../../Components/About/About";
import './Main.module.css';

const aboutMovie = "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."

const Main = () => {
    return(
        <>
            <Nav />
            <Buttons />
            <About title="Avatar: The Way of Water" genre1 = "Action" genre2 = "Adventure" genre3 = "Science Fiction" information={aboutMovie} year="2022" time="3:12:00" rating="8.5"/>
        </>
    )
}

export default Main; 