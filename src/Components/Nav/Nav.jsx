import { useContext } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CounterContext } from "../../Provider/Counter";

const Nav = () => {
    const {counter} = useContext(CounterContext)

    return(
        <nav className="flex flex-row bg-black h-20 justify-around items-center">
            <ul className="flex flex-row text-xl text-stone-50 gap-7">
                <li>Home</li>
                <li>Genre</li>
                <li>Country</li>
            </ul>

            <div className=" flex flex-row items-center bg-white rounded-xl">
                <input type="text" className="w-80 h-10 text-neutral-950 rounded-xl active: outline-none pl-2.5"/>
                <FaSearch className="mr-1.5"/>
            </div>

            <ul className="flex flex-row text-xl text-stone-50 gap-7">
                <li>Movies</li>
                <li>Animation</li>
                <li>Series</li>
            </ul>

            <span className="text-sm text-white">Watched movies: {counter}</span>

            <div className="gap-5 text-stone-50 flex flex-row text-base">
                <span>Login/SignUp</span>
                <FaRegBell />
            </div>
        </nav>
    )
}

export default Nav;