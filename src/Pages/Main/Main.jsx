import './Main.module.css';
import Nav from "../../Components/Nav/Nav";
import Buttons from "../../Components/Button/Button";
import About from "../../Components/About/About";
import Card from "../../Components/Card/Card";
import { IoMdStar } from "react-icons/io";
import { IoMdTimer } from "react-icons/io";
import { fetchMovie } from "../../Utils/MovieCards/fetchMovie";
import { NavLink } from 'react-router-dom';
import useSWR from 'swr';

const aboutMovie = "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."

const Main = () => {
    const url = "https://666194b563e6a0189fea921f.mockapi.io/movies"
    
    const { data, error, isLoading } = useSWR(url, fetchMovie)
    console.log(data);

    return(
        <>
            <Nav />
            
            <Buttons />
            
            <About 
                title="Avatar: The Way of Water" 
                genre1 = "Action" 
                genre2 = "Adventure" 
                genre3 = "Science Fiction" 
                information={aboutMovie} 
                year="2022" time="3:12:00" 
                rating="8.5"/>
            
            <div className="bg-black mt-6 p-6">
                <h1 className="text-white text-3xl mt-24 ml-24 mb-8 font-bold">Trending</h1>
                <div className="grid grid-cols-3 justify-center items-center">
                    
                    {!isLoading && data.map((el) => 
                        <NavLink to={`/${el.id}`}>
                            <Card 
                                imageUrl = {el.poster}
                                card = "relative text-white flex mt-10"
                                image = "w-96 h-72 absolute top-0 left-0"
                                timeAndRating = "absolute top-0 left-16 mt-5 flex gap-40"
                                time = {el.time}
                                rating = {el.rating}
                                icon1 = {<IoMdTimer />}
                                icon2 = {<IoMdStar />}
                                information = "flex gap-1 mt-80 ml-10 text-white"
                                title = {el.title}
                                genre = {el.genre}
                                titleStyle = "font-bold text-xl w-60"
                                genreStyle = "text-lg p-1.5 rounded-xl bg-red-700"/>
                        </NavLink>
                        )}
                </div>
            </div>
        </>
    )
}

export default Main; 