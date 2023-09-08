const btn1=document.getElementById("choose_btn1");
const btn2=document.getElementById("choose_btn2");
const home_btn=document.getElementById("home_btn");

btn1.addEventListener('click',toStudyPage);
btn2.addEventListener('click',toRestPage);
home_btn.addEventListener('click',toHomePage);

function toStudyPage(){
  window.location.href="../pages/eng_study.html";
}
function toRestPage(){
  window.location.href="../pages/eng_rest.html";
}
function toHomePage(){
  window.location.href="../first_page.html";
}