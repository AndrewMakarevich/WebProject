import React from 'react';
import './About.css';
import './ShakeAnimation.css';
import './AboutUsTextAnimation.js';
import Arrow from '../../Images/AboutUsImages/ArrowDownPicture.png';
import Book from '../../Images/AboutUsImages/openBook.png';
import Pencil from '../../Images/AboutUsImages/Pencil.png';
import Caesar from '../../Images/AboutUsImages/caesar.png';
import GreeceHelmet from '../../Images/AboutUsImages/greeceHelmet.png';
import MilitaryHelmet from '../../Images/AboutUsImages/militaryHelmet.png';
import spaceStation from '../../Images/AboutUsImages/spaceStation.png';

function About() {
    return (
        <div className='about'>
            <div className="headerSection">
            
              <img className="AnimatedBookFirst" src={Book}></img>  
              <img className="AnimatedSpaceStation" src={spaceStation}></img>
              <img className="AnimatedMilitaryHelmet" src={MilitaryHelmet}></img>
              <img className="reversedAnimatedCaesar" src={Caesar}></img>  
              <img className="reversedAnimatedPencil" src={Pencil}></img>
              <img className="revesedAnimatedBookThird" src={GreeceHelmet}></img>

              <div className="headerSectionMainText">ART<span>HA</span></div>
              <span className="DivideLine"></span>
              <div className="headerSectionSecondaryText"><span>AN AB<span>ILI</span>TY</span> TO <span>PU</span>BLISH <span>YO</span>UR OWN AR<span>TICL</span>ES</div>
        
            </div>
            <div className="mainBlock">
                
                
                
                <div className="AboutUsText">
                    <div className="firstAboutUsBlock">
                       <div>Просматривайте материалы других пользователей </div>
                       <img className="firstAboutUsBlockArrow" src={Arrow}></img>
                       <div className="firstAboutUsBlockExtendedText"></div>
                    </div>
                    <div className="secondAboutUsBlock">
                        <div>Публикуйте статьи на всевозможные темы</div>
                        <img className="secondAboutUsBlockArrow" src={Arrow}></img>
                        <div className="secondAboutUsBlockExtendedText"></div>
                    </div>
                    <div className="thirdAboutUsBlock">
                        <div>Оставляйте комментарии под интересующими вас статьями</div>
                        <img className="thirdAboutUsBlockArrow" src={Arrow}></img>
                        <div className="thirdAboutUsBlockExtendedText"></div>
                        
                    </div>
                
                </div>
                
            </div>
            <script src="./AboutUsTextAnimation"></script>
        </div>
    );
}
export default About;