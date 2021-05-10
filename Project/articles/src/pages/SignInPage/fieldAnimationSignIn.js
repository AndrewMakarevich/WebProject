let handler =  function() {
    const field = document.querySelectorAll('.signInInput');
    
    const labelChange = document.querySelectorAll('.signInLabel');
    const event = new CustomEvent('unfocused');
    for(let i=0; i< field.length; i++)
    {
        if(field[i] != document.activeElement)
        {
            field[i].dispatchEvent(event);  
        }
        if(field[i].type == "submit")
        {
            continue;
        }
       field[i].addEventListener("focus", function(){
            labelChange[i].style.transform ="translate(0,-19px)";
            labelChange[i].style.color ="black";
            labelChange[i].style.fontWeight ="bold";
        
           });
       field[i].addEventListener("mouseout", function(){ 
               if(field[i].value.length == 0 && field[i] != document.activeElement)
               {
                labelChange[i].style.transform ="translate(0,0)";
                labelChange[i].style.color ="rgb(145, 140, 140)"; 
                labelChange[i].style.fontWeight ="normal";  
               }
            
           }); 
        field[i].addEventListener('unfocused', function(){
            if(field[i].value.length == 0){
              labelChange[i].style.transform ="translate(0,0)";
            labelChange[i].style.color ="rgb(145, 140, 140)"; 
            labelChange[i].style.fontWeight ="normal";   
            }
        });
        } 
    };
    window.addEventListener('click', handler);
    window.addEventListener('DOMContentLoaded', handler);
    window.addEventListener('keydown', handler);
    window.addEventListener('keyup', handler);