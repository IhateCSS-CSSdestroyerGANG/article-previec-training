import '../App.css'
import share from '../assets/icon-share.svg'
import facebook from '../assets/icon-facebook.svg'
import pintrest from '../assets/icon-pinterest.svg'
import twitter from '../assets/icon-twitter.svg'


function Popup({handleClick}){
    return(
        <div className='popup'>
            <div className='popup__content'>
                <p className='popup_share'>SHARE</p>
                <div className='popup__links'>
                    <img className='popup__link' src={facebook} alt="" />
                    <img className='popup__link' src={twitter} alt="" />
                    <img className='popup__link' src={pintrest} alt="" />
                </div>
                <div className="card__share__wrapper card__share__wrapper--popup" onClick={handleClick}>
                    <img className="card__share card__share--popup" src={share} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Popup;