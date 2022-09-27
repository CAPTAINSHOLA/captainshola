let myBurger = document.getElementById('burger');
let myAnchorx = document.getElementById('anchorx');
let myAnchor = document.getElementById('anchor');
let myBurg = document.getElementById('burg');
//var slide = document.getElementById('slide')
var i=0; //starting pointer
var images =[];
var time = 3000;
// I mage list
images[0] = "images.jpeg";
images[1] = "tall.jpg";
images[2] = "unsplash.jpg";
// Change IMAGE

function changeImg(){
  document.slide.src = images[i] //set it to 0 value
  if(i<images.length-1){
    i++
}else{
  i=0;
}
}
//setTimeOut('changeImg()' , time)
window.onLoad = changeImg;
myBurger.addEventListener('click', show);
function show(){
  myAnchorx.style.display = 'block';
    myBurger.style.display = 'none';
}
myBurg.addEventListener('click', discard);
function discard(){
  myAnchorx.style.display = 'none';
    myBurger.style.display = 'block';
}


button.addEventListener('click', changeText);
function changeText(){
bigHeading.innerHTML ='<h2>Hello WORLD</h2>' ;
bigHeading.style.backgroundColor = 'red';
secondText.style.display ='block'
}
