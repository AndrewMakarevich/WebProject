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
                       <div className ="firstAboutUsBlockHeader">Просматривайте материалы других пользователей
                       <div className ="firstLine"><span></span></div>
                       </div> 
                       
                       <div className="firstAboutUsBlockExtendedText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                    <div className="secondAboutUsBlock">
                        <div className= "secondAboutUsBlockHeader">Публикуйте статьи на всевозможные темы
                        <div className ="secondLine"><span></span></div></div>
                        {/* <img className="secondAboutUsBlockArrow" src={Arrow}></img> */}
                        <div className="secondAboutUsBlockExtendedText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                    <div className="thirdAboutUsBlock">
                        <div className= "thirdAboutUsBlockHeader">Оставляйте комментарии под интересующими вас статьями
                        <div className ="thirdLine"><span></span></div> 
                        </div>
                        {/* <img className="thirdAboutUsBlockArrow" src={Arrow}></img> */}
                        <div className="thirdAboutUsBlockExtendedText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        
                    </div>
                
                </div>
                
            </div>
        </div>
    );
}
export default About;