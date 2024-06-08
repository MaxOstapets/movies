import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Nav from "../../Components/Nav/Nav"
import About from "../../Components/About/About"
import Buttons from "../../Components/Button/Button"
import { fetchMovie } from "../../Utils/MovieCards/fetchMovie"

const Movie = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState()
    
    const url = `https://666194b563e6a0189fea921f.mockapi.io/movies/${movieId}`
    useEffect(() => {fetchMovie(url).then(res => setMovie(res))}, [])


    return(
        <>
            <Nav />
            <Buttons />
            
            {movie &&
                <About 
                    title={movie.title}
                    genre1={movie.genre}
                    year={movie.year}
                    time={movie.time}
                    rating={movie.rating}
                    information={movie.descriptor}
                />
            }
        </>
    )
}

export default Movie;