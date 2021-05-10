/*Первый блок с текстом*/
let turn = false;
let turnSecond = false;
let turnThird = false;
let aboutUsLocation;
let arrow;
let arrowSecond;
let arrowThird;
const handler = function(){
    const currentLocation = document.location.href;
    aboutUsLocation = currentLocation.indexOf('/about');
    if(aboutUsLocation !== -1)   
        {
          arrow = document.querySelector(".firstAboutUsBlockArrow");  
          arrow.addEventListener('click', handler1);  
          arrowSecond = document.querySelector(".secondAboutUsBlockArrow");  
          arrowSecond.addEventListener('click', handler2);
          arrowThird = document.querySelector(".thirdAboutUsBlockArrow");  
          arrowThird.addEventListener('click', handler3);    
        } 
};
window.addEventListener('click', handler);
window.addEventListener('keydown',handler);
window.addEventListener('DOMContentLoaded', handler);
    const handler1 = function(){    
            const block = document.querySelector(".firstAboutUsBlock"); 
            const text = document.querySelector(".firstAboutUsBlockExtendedText"); 
            
              if(turn == false)
              {
                 arrow.style.animation ="none";
                 arrow.style.transform ="rotate(180deg)"; 
                 turn = true;
                 block.style.minHeight = "10vw";
                 text.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
                 console.log(block.style.height);
              }
              else{
                 arrow.style.transform ="rotate(360deg)";
                 turn = false;
                 block.style.minHeight = "0vw";
                 text.textContent="";
                 
                 console.log("povorot2");
             } 
            };      

/*Второй блок с текстом*/       
 
    const handler2 = function(){   
            const block = document.querySelector(".secondAboutUsBlock"); 
            const text = document.querySelector(".secondAboutUsBlockExtendedText"); 
            
              if(turnSecond == false)
              {
                 arrowSecond.style.animation ="none";
                 arrowSecond.style.transform ="rotate(180deg)"; 
                 turnSecond = true;
                 block.style.minHeight = "10vw";
                 text.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
              }
              else{
                 arrowSecond.style.transform ="rotate(360deg)";
                 turnSecond = false;
                 block.style.minHeight = "0vw";
                 text.textContent="";
             } 
            };      

            /*Третий блок с текстом*/ 
            const handler3 = function(){   
                const block = document.querySelector(".thirdAboutUsBlock"); 
                const text = document.querySelector(".thirdAboutUsBlockExtendedText"); 
                
                  if(turnThird == false)
                  {
                     arrowThird.style.animation ="none";
                     arrowThird.style.transform ="rotate(180deg)"; 
                     turnThird = true;
                     block.style.minHeight = "10vw";
                     text.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

                  }
                  else{
                     arrowThird.style.transform ="rotate(360deg)";
                     turnThird = false;
                     block.style.minHeight = "0vw";
                     text.textContent="";
                 } 
                }; 



