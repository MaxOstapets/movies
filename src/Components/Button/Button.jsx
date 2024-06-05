import { MdAccessTime } from "react-icons/md";
import { IoMdPlayCircle } from "react-icons/io";

const Buttons = () => {
    return(
        <div className="flex justify-center items-center gap-5 text-white mt-60">
            <button className="w-40 bg-red-700 flex p-3 justify-center items-center gap-5">Watch Now <IoMdPlayCircle /></button>
            <button className="w-40 border-4 border-red-700 flex p-2 justify-center items-center gap-5">Watch Later <MdAccessTime /></button>
        </div>
    )
}

export default Buttons;