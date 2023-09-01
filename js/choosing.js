const btn1=document.getElementById("choose_btn1");
const btn2=document.getElementById("choose_btn2");

//js에서 할 일 -> function(){}

btn1.addEventListener('click',toStudyPage);
btn2.addEventListener('click',toRestPage);

function toStudyPage(){
  window.location.href="../pages/bldg_study.html";
}
function toRestPage(){
  window.location.href="../pages/bldg_rest.html";
}