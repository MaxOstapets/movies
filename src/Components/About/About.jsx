import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

const About = (props) => {
    return(
        <div className="space-y-11 ml-24 mt-6">
            <h1 className="text-3xl text-white">{props.title}</h1>
            
            <div className="flex gap-6">
                <ul className="flex gap-5 text-2xl">
                    <li className="bg-white rounded-2xl p-2">{props.genre1}</li>
                    <li className="bg-white rounded-2xl p-2">{props.genre2}</li>
                    <li className="bg-white rounded-2xl p-2">{props.genre3}</li>
                </ul>

                <ul className="flex gap-4">
                    <li className="text-white flex justify-center items-center gap-2"><FaRegCalendarAlt />{props.year}</li>
                    <li className="text-white flex justify-center items-center gap-2"><IoMdTimer />{props.time}</li>
                    <li className="text-white flex justify-center items-center gap-2"><IoMdStar />{props.rating}</li>
                </ul>
            </div>
            
            <div className="w-1/2 text-lg text-white">{props.information}</div>
        </div>
    )
}

export default About;