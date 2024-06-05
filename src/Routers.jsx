import Main from "./Pages/Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Routers = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Main />}/>
            </Routes>
        </Router>
    )
}

export default Routers;