const currentLocation1 = function(e){
    const backgroundImageSvg = document.querySelector('#root');
    const currentLocation = document.location.href;
    const homeLocation = currentLocation.indexOf('/home');
    const aboutUsLocation = currentLocation.indexOf('/about');
    function randomWallPaper(){
                    
                function getRandomNumber(max){
                    return Math.floor(Math.random()*max);
                };
                const randomNumber = getRandomNumber(4);
                
                switch(randomNumber){
                    case 0:
                        backgroundImageSvg.classList.add('firstBackground');
                        break;
                    case 1:
                        backgroundImageSvg.classList.add('secBackground');
                        break;
                    case 2:
                        backgroundImageSvg.classList.add('thirdBackground');
                        break;
                    case 3:
                        backgroundImageSvg.classList.add('fourthBackground');
                        break;
                    case 4:
                        backgroundImageSvg.classList.add('fifthBackground');
                        break;
                    default:
                        backgroundImageSvg.style.backgroundImage = "";
                        break;
                }
            }
    function moveWallpaper(event){
                    let currentCursorPositionX = event.clientX;
                    let currentCursorPositionY = event.clientY;
                    backgroundImageSvg.style.backgroundPositionX = -0.025* currentCursorPositionX + 'px';
                    backgroundImageSvg.style.backgroundPositionY = -0.025* currentCursorPositionY + 'px';
    }
    if(aboutUsLocation == -1 && homeLocation == -1){  
            randomWallPaper();
            console.log(aboutUsLocation);
            document.addEventListener('mousemove', moveWallpaper);
            console.log("moving");
    }       
    else{
          randomWallPaper();
          document.removeEventListener('mousemove', moveWallpaper);
          console.log("not moving");
    }
};

window.addEventListener('DOMContentLoaded', currentLocation1);
window.addEventListener('keydown', currentLocation1);
window.addEventListener('click', currentLocation1);





    

