import { useParams } from "react-router-dom"
import Nav from "../../Components/Nav/Nav"
import About from "../../Components/About/About"
import Buttons from "../../Components/Button/Button"
import { fetchMovie } from "../../Utils/MovieCards/fetchMovie"
import useSWR from "swr"

const Movie = () => {
    const { movieId } = useParams()
    
    const url = `https://666194b563e6a0189fea921f.mockapi.io/movies/${movieId}`
    const { data, error, isLoading } = useSWR(url, fetchMovie)
    
    return(
        <>
            <Nav />
            <Buttons />
            
            {!isLoading &&
                <About 
                    title={data.title}
                    genre1={data.genre}
                    year={data.year}
                    time={data.time}
                    rating={data.rating}
                    information={data.descriptor}
                />
            }
        </>
    )
}

export default Movie;