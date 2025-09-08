import { useState } from "react";
import '../App.css'
import drawers from '../assets/drawers.jpg'
import avatar from '../assets/avatar-michelle.jpg'
import share from '../assets/icon-share.svg'
import Popup from "./Popup";

function Card(){

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () =>{
        setIsClicked(!isClicked);
    }

    return(
        <div className="card">
            <div className="card__picture">
                <img className="card__img" src={drawers} alt="" />
            </div>
            <div className="card__content">
                <div className="card__text">
                    <h3 className="card__title">
                        Shift the overall look and feel by adding these wonderful 
                        touches to furniture in your home
                    </h3>
                    <p className="card__paragraph">
                        Ever been in a room and felt like something was missing? Perhaps 
                        it felt slightly bare and uninviting. I’ve got some simple tips 
                        to help you make any room feel complete.
                    </p>
                </div>
                <div className="card__status">
                    <img className="card__avatar" src={avatar} alt="" />
                    <div className="card__info">
                        <h4 className="card__name">
                            Michelle Appleton
                        </h4>
                        <p className="card__date">
                            28 Jun 2020
                        </p>
                    </div>
                    <div className="card__share__wrapper">
                        <img className="card__share" onClick={handleClick}  src={share} alt="" />
                        {isClicked && <Popup handleClick={handleClick} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;