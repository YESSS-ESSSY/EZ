const btn1=document.getElementById("choose_btn1");
const btn2=document.getElementById("choose_btn2");
const home_btn=document.getElementById("home_btn");

//js에서 할 일 -> function(){}

btn1.addEventListener('click',toStudyPage);
btn2.addEventListener('click',toRestPage);
home_btn.addEventListener('click',toHomePage);

function toStudyPage(){
<<<<<<< HEAD
  window.location.href="../pages/bldg_study.html";
}
function toRestPage(){
  window.location.href="../pages/bldg_rest.html";
=======
  window.location.href="../pages/ecc_study.html";
}
function toRestPage(){
  window.location.href="../pages/ecc_rest.html";
}
function toHomePage(){
  window.location.href="../pages/first_page.html";
>>>>>>> 8f666fc57eed93113fcd4beb6a90f04c3480e1c1
}