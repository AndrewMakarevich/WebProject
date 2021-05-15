let opened1 = false;
let opened2 = false;
let opened3 = false;


// const pageChange = new Event('PageChanged');
const currentLocation = function(e){
    const currentLocation = document.location.href;
    const aboutUsLocation = currentLocation.indexOf('/about');
    if(aboutUsLocation !== -1){

            const extendedText1 = document.querySelector('.firstAboutUsBlockExtendedText');
            const header1 = document.querySelector('.firstAboutUsBlock .firstAboutUsBlockHeader');
            const line1 = document.querySelector('.firstAboutUsBlock .firstLine');
            const extendedText2 = document.querySelector('.secondAboutUsBlockExtendedText');
            const header2 = document.querySelector('.secondAboutUsBlock .secondAboutUsBlockHeader');
            const line2 = document.querySelector('.secondAboutUsBlock .secondLine');
            const extendedText3 = document.querySelector('.thirdAboutUsBlockExtendedText');
            const header3 = document.querySelector('.thirdAboutUsBlock .thirdAboutUsBlockHeader');
            const line3 = document.querySelector('.thirdAboutUsBlock .thirdLine');
            extendedText1.style.transition = ".2s";
            extendedText2.style.transition = ".2s";
            extendedText3.style.transition = ".2s";
            function extendedTextHide(bool,header,text,line){
                    if(bool){
                        header.style.marginBottom = "10px";
                        text.style.marginTop = "0px";
                        text.style.opacity = "1";
                        text.style.pointerEvents = "auto";
                        line.style.transform = "scale(1)";

                    }else{
                        // header.style.marginBottom = "100px";
                        text.style.marginTop = "-500px";
                        text.style.opacity = "0";
                        text.style.pointerEvents = "none";
                        line.style.transform = "scale(0)";

                    }
            }
            if(e.target == header1){
                
                if(opened1){
                    opened1 = false;
                    console.log("closed...");
                    extendedTextHide(opened1,header1,extendedText1,line1);
                    
                }else{
                    opened1 = true;
                    console.log("opened...");
                    extendedTextHide(opened1,header1,extendedText1,line1);
                }
        
            };
            if(e.target == header2){
                if(opened2){
                    opened2 = false;
                    extendedTextHide(opened2,header2,extendedText2,line2);
                    
                }else{
                    opened2 = true;
                    extendedTextHide(opened2,header2,extendedText2,line2);
                    
                }
                
            };
            if(e.target == header3){
                if(opened3){
                    opened3 = false;
                    extendedTextHide(opened3,header3,extendedText3,line3);
                    
                }else{
                    opened3 = true;
                    extendedTextHide(opened3,header3,extendedText3,line3);
                    
                }
                
            };
    }
    
};

window.addEventListener('DOMContentLoaded', currentLocation);
window.addEventListener('keydown', currentLocation);
window.addEventListener('click', currentLocation);


// buttons.forEach(button=>{
//     console.log(button);
//        button.addEventListener('click', currentLocation);
// });






window.addEventListener('PageChanged', function(){
    window.addEventListener('click', function(e){

        
    });
});

    
        
        
         









// /*Первый блок с текстом*/
// let turn = false;
// let turnSecond = false;
// let turnThird = false;
// let aboutUsLocation;
// let arrow;
// let arrowSecond;
// let arrowThird;
// const handler = function(){
//     const currentLocation = document.location.href;
//     aboutUsLocation = currentLocation.indexOf('/about');
//     if(aboutUsLocation !== -1)   
//         {
//           arrow = document.querySelector(".firstAboutUsBlockArrow");  
//           arrow.addEventListener('click', handler1);  
//           arrowSecond = document.querySelector(".secondAboutUsBlockArrow");  
//           arrowSecond.addEventListener('click', handler2);
//           arrowThird = document.querySelector(".thirdAboutUsBlockArrow");  
//           arrowThird.addEventListener('click', handler3);    
//         } 
// };
// window.addEventListener('click', handler);
// window.addEventListener('keydown',handler);
// window.addEventListener('DOMContentLoaded', handler);
//     const handler1 = function(){    
//             const block = document.querySelector(".firstAboutUsBlock"); 
//             const text = document.querySelector(".firstAboutUsBlockExtendedText"); 
            
//               if(turn == false)
//               {
//                  arrow.style.animation ="none";
//                  arrow.style.transform ="rotate(180deg)"; 
//                  turn = true;
//                  block.style.minHeight = "10vw";
//                  text.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//                  console.log(block.style.height);
//               }
//               else{
//                  arrow.style.transform ="rotate(360deg)";
//                  turn = false;
//                  block.style.minHeight = "0vw";
//                  text.textContent="";
                 
//                  console.log("povorot2");
//              } 
//             };      

// /*Второй блок с текстом*/       
 
//     const handler2 = function(){   
//             const block = document.querySelector(".secondAboutUsBlock"); 
//             const text = document.querySelector(".secondAboutUsBlockExtendedText"); 
            
//               if(turnSecond == false)
//               {
//                  arrowSecond.style.animation ="none";
//                  arrowSecond.style.transform ="rotate(180deg)"; 
//                  turnSecond = true;
//                  block.style.minHeight = "10vw";
//                  text.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//               }
//               else{
//                  arrowSecond.style.transform ="rotate(360deg)";
//                  turnSecond = false;
//                  block.style.minHeight = "0vw";
//                  text.textContent="";
//              } 
//             };      

//             /*Третий блок с текстом*/ 
//             const handler3 = function(){   
//                 const block = document.querySelector(".thirdAboutUsBlock"); 
//                 const text = document.querySelector(".thirdAboutUsBlockExtendedText"); 
                
//                   if(turnThird == false)
//                   {
//                      arrowThird.style.animation ="none";
//                      arrowThird.style.transform ="rotate(180deg)"; 
//                      turnThird = true;
//                      block.style.minHeight = "10vw";
//                      text.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

//                   }
//                   else{
//                      arrowThird.style.transform ="rotate(360deg)";
//                      turnThird = false;
//                      block.style.minHeight = "0vw";
//                      text.textContent="";
//                  } 
//                 }; 



