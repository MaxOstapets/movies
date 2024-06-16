const Card = (props) => {
    return(
        <div className={props.card}>
            <img src={props.imageUrl} alt="" className={props.image}/>
        
            <ul className={props.timeAndRating}>
                <li className="flex justify-center items-center">{props.icon1} {props.time}</li>
                <li className="flex justify-center items-center">{props.icon2} {props.rating}</li>
            </ul>
       
            <ul className={props.information}>
                <li className={props.titleStyle}>{props.title}</li>
                <li className={props.genreStyle}>{props.genre}</li>
                <li className={props.dataStyle}>{props.data}</li>
            </ul>
        </div>
    )
}

export default Card;