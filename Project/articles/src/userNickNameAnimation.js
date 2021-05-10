window.addEventListener("DOMContentLoaded", function(){
  let nickName = document.querySelector(".navigationUserBlock .userNickName");
  const logo = document.querySelector(".navigationUserBlock .userPicture");
  if(nickName.innerText.length>10){
    nickName.innerText = `${nickName.innerText.slice(0,9)}...`;
  }
  logo.addEventListener('mouseover', function(){
      nickName.style.transform = `translateX(-65px)`;
      nickName.style.opacity = "1";
  });
  logo.addEventListener('mouseout', function(){
    nickName.style.transform = `translateX(65px)`;
    nickName.style.opacity = "0";
  });
});
