import Main from "./Pages/Main/Main";
import Movie from "./Pages/Movie/Movie"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Routers = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:movieId" element={<Movie />}/>
            </Routes>
        </Router>
    )
}

export default Routers;