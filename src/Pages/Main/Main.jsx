import './Main.module.css';
import Nav from "../../Components/Nav/Nav";
import Buttons from "../../Components/Button/Button";
import About from "../../Components/About/About";
import Card from "../../Components/Card/Card";
import { IoMdStar } from "react-icons/io";
import { IoMdTimer } from "react-icons/io";
import { useEffect, useState } from "react";
import { fetchMovie } from "../../Utils/MovieCards/fetchMovie";

const aboutMovie = "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."

const Main = () => {
    const url = "https://666194b563e6a0189fea921f.mockapi.io/movies"
    
    const [movie, setMovie] = useState([])

    useEffect(() => {fetchMovie(url).then(res => setMovie(res))}, [])

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
                    <h1 className="text-white text-3xl ml-24 mb-8">Recently Updated</h1>
                    <div className="flex justify-around items-center">
                        <Card 
                            imageUrl = "../../public/Images/SmCard.svg" 
                            information = "flex justify-center flex-col text-white ml-4"  
                            title = "The Flash"
                            genre = "Action"
                            data = "22.09.13"
                            card = "flex"/>
                        
                        <Card 
                            imageUrl = "../../public/Images/SmCard.svg" 
                            information = "flex justify-center flex-col text-white ml-4"  
                            title = "The Flash"
                            genre = "Action"
                            data = "22.09.13"
                            card = "flex"/>

                        <Card 
                            imageUrl = "../../public/Images/SmCard.svg" 
                            information = "flex justify-center flex-col text-white ml-4"  
                            title = "The Flash"
                            genre = "Action"
                            data = "22.09.13"
                            card = "flex"/>
                        
                        <Card 
                            imageUrl = "../../public/Images/SmCard.svg" 
                            information = "flex justify-center flex-col text-white ml-4"  
                            title = "The Flash"
                            genre = "Action"
                            data = "22.09.13"
                            card = "flex"/>
                    </div>

                    <h1 className="text-white text-3xl mt-24 ml-24 mb-8 font-bold">Trending</h1>
                    <div className="flex justify-center items-center">
                        <Card 
                            imageUrl = "../../public/Images/Card.svg"
                            card = "relative text-white flex"
                            image = "w-96 h-72 absolute top-0 left-0"
                            timeAndRating = "absolute top-0 left-16 mt-5 flex gap-40"
                            time = "2:20:13"
                            rating = "6.4"
                            icon1 = {<IoMdTimer />}
                            icon2 = {<IoMdStar />}
                            information = "flex gap-40 mt-80 ml-10 text-white"
                            title = "Medelin"
                            genre = "Action"
                            titleStyle = "font-bold text-xl"
                            genreStyle = "text-lg p-1.5 rounded-xl bg-red-700"
                        />

                        <Card 
                            imageUrl = "../../public/Images/Card.svg"
                            card = "relative text-white flex"
                            image = "w-96 h-72 absolute top-0 left-0"
                            timeAndRating = "absolute top-0 left-16 mt-5 flex gap-40"
                            time = "2:20:13"
                            rating = "6.4"
                            icon1 = {<IoMdTimer />}
                            icon2 = {<IoMdStar />}
                            information = "flex gap-40 mt-80 ml-12 text-white"
                            title = "Medelin"
                            genre = "Action"
                            titleStyle = "font-bold text-xl"
                            genreStyle = "text-lg p-1.5 rounded-xl bg-red-700"
                        />

                        <Card 
                            imageUrl = "../../public/Images/Card.svg"
                            card = "relative text-white flex"
                            image = "w-96 h-72 absolute top-0 left-0"
                            timeAndRating = "absolute top-0 left-16 mt-5 flex gap-40"
                            time = "2:20:13"
                            rating = "6.4"
                            icon1 = {<IoMdTimer />}
                            icon2 = {<IoMdStar />}
                            information = "flex gap-40 mt-80 ml-12 text-white"
                            title = "Medelin"
                            genre = "Action"
                            titleStyle = "font-bold text-xl"
                            genreStyle = "text-lg p-1.5 rounded-xl bg-red-700"
                        />
                    </div>
            </div>
        </>
    )
}

export default Main; 