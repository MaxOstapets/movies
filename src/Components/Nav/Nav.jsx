import { useContext, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CounterContext } from "../../Provider/Counter";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { SettingsContext } from '../../Provider/Settings' 
import { NavLink } from "react-router-dom";

const BasicMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    // TODO dark | light mode cliker
    const {darkTheme, lightTheme} = useContext(SettingsContext)

    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <IoSettingsOutline className="text-white"/>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => lightTheme()}><FaRegSun />Light Theme</MenuItem>
          <MenuItem onClick={() => darkTheme()}><FaRegMoon />Dark Theme</MenuItem>
        </Menu>
      </div>
    );
  }

const Nav = () => {
    const {counter} = useContext(CounterContext)
    const {theme} = useContext(SettingsContext)

    return(
        <nav className={`flex flex-row ${theme.bgColor} h-20 justify-around items-center`}>
            <ul className="flex flex-row text-xl text-stone-50 gap-7">
                <NavLink to="/">Home</NavLink> 
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
                <BasicMenu />
            </div>


        </nav>
    )
}

export default Nav;