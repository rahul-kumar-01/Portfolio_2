const bar1 = document.getElementsByClassName('bar1');
const bar2 = document.getElementsByClassName('bar2');
const circle = document.getElementsByClassName('circle');
const sidebar = document.getElementsByClassName('sideBar');
const allList = document.querySelectorAll('.alllist li');
const allDot = document.getElementsByClassName('dot');
const largeCircle = document.getElementsByClassName('largeCircle');
const entryPage = document.getElementById('entryPage');
const entryNameElement = document.getElementById('entrytitle');
const langArray = ["Hello","Hello","नमस्ते ","Hola","Bonjour","Ciao","こんにちは","مرحبًا ","Привет","你好)",];
const display = document.getElementsByClassName('display');
const textSlider = document.getElementsByClassName('text-slider');
const footerLineBall = document.getElementsByClassName('footer-line-ball');
const s = document.getElementsByClassName('s');
const header = document.getElementsByClassName('header');
const fotterContact = document.getElementsByClassName('fotter-contact');
const footer = document.getElementsByClassName('footer');

const main = document.getElementsByClassName('main');

s[0].style.display = "none";



let temp2 = 75;

const coordinates = fotterContact[0].getBoundingClientRect();




setInterval(()=>{
  const coordinates = fotterContact[0].getBoundingClientRect();
  const temp = coordinates.bottom;


  // if(temp < 1116){
  //   if(temp2 < 10) return;
  //   footerLineBall[0].style.right = temp2 + "%";
  //   temp2 = temp2 - 1;
  // }
  
},20)




//Entry Page Animation
let i = 0;
let id = setInterval(function(){
    i = i % langArray.length;
    entryNameElement.textContent = langArray[i];
    ++i;
    if(i == langArray.length){
        clearInterval(id);
        entryPage.style. top  =  -100 + "vh";
        s[0].style.display = "block";
        helper();
    }
},150)



// SideBar Animation 
let showCross = false;
circle[0].addEventListener('click', function() {
  if(showCross == true) {
    bar1[0].classList.remove('bar12');
    bar2[0].classList.remove('bar22');
    sidebar[0].classList.remove('visible');
    circle[0].style.background = 'black';

    showCross = false;
  }else{
    sidebar[0].classList.add('visible');
    bar1[0].classList.add('bar12');
    bar2[0].classList.add('bar22');
    circle[0].style.background = "rgb(69,91,233)";
    largeCircle[0].style.background = "rgb(69,91,233)";
    showCross = true;
  }
});

window.addEventListener("scroll", myScript);
let intialScroll = 0;
let finalScroll = 0;
function myScript(){
  const windowCoordinates =  display[0].getBoundingClientRect();
  if(windowCoordinates.top < -80){
    circle[0].style.display = "block";
  }
  else{
    circle[0].style.display = "none";
  }
}

let count = -1;
let leftCount = -1000 ;

let direction = "left";
let stopPoint = -1;

let prev = -1, curr = -1;
let scrollDirectionChange = false;
let scrollDirectionChangeValue = 0;
let prev3 = "left";

setInterval(() => {
  let cord1 = header[0].getBoundingClientRect().bottom;
  cord = (cord1) / 1000;

  if (cord < 0) return;
  if (cord1.bottom < 0) direction = "left";

  if (stopPoint < cord) {
    prev = curr;
    curr = cord;
    direction = "left";

    stopPoint = cord;
    let currentLeft = parseInt(textSlider[0].style.left);
    scrollDirectionChangeValue = -200;

    if (prev3 === "right") scrollDirectionChange = true;
    prev3 = "left";
  } else if (cord < curr) {
    stopPoint = cord;
    direction = "right";
    scrollDirectionChangeValue = +200;

    if (prev3 === "left") scrollDirectionChange = true;
    prev3 = "right";
  }
}, 20);

function scrollSudden(si, ei) {
  if (si < ei) {
    var id = setInterval(() => {
      if (si > ei) clearInterval(id);
      textSlider[0].style.left = si + "px";
      si = si + 5;
    }, 0.5);
  } else {
    var id = setInterval(() => {
      if (si < ei) clearInterval(id);
      textSlider[0].style.left = si + "px";
      si = si - 5;
    }, 0.5);
  }
}

function helper() {
  let id2 = setInterval(() => {
    if (scrollDirectionChange === true) {
      let si = leftCount;
      let ei = leftCount + scrollDirectionChangeValue;
      scrollSudden(si, ei);
      leftCount = leftCount + scrollDirectionChangeValue;
      scrollDirectionChange = false;
    } else {
      if (direction === "left") count = -1.5;
      else count = 1.5;

      leftCount = leftCount + (count);
      textSlider[0].style.left = leftCount + "px";
      if (Math.abs(leftCount) >= 2000) clearInterval(id2);
    }
  }, 20);
}

 




for(let i = 0; i < allList.length; ++i){
  allList[i].addEventListener('mouseover', function(){
      allDot[i].style.visibility = "visible";
  });
  allList[i].addEventListener('mouseleave', function(){
      allDot[i].style.visibility = "hidden";
  });
}

