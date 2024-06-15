import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import Nav from "../../Components/Nav/Nav"
import About from "../../Components/About/About"
import Buttons from "../../Components/Button/Button"
import { fetchMovie } from "../../Utils/MovieCards/fetchMovie"
import { CounterContext } from "../../Provider/Counter"

const Movie = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState()
    const {counter, increment, decrement} = useContext(CounterContext)

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

            <div className="text-white">
                <div>Your count: {counter}</div>
            
                <div className="flex gap-10">
                    <button onClick={()=>increment()}>Add</button>
                    <button onClick={()=>decrement()}>Minus</button>
                </div>
            </div>
        </>
    )
}

export default Movie;