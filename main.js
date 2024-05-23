let noBtn = document.getElementById("no-btn");
function changeD(){
  let soundEffect = document.getElementById("no-sound-effect");
  
let x = Math.random() * 100;
console.log(x);

if(x <= 10){
  noBtn.style.position = "absolute";
  noBtn.style.top = "60px";
  noBtn.style.left = "70px";
  soundEffect.play();
}
else if (x <= 20) {
  noBtn.style.position = "absolute";
  noBtn.style.top = "180px";
  noBtn.style.left = "90px";
  soundEffect.play();
}
else if (x <= 30) {
  noBtn.style.position = "absolute";
  noBtn.style.top = "350px";
  noBtn.style.left = "40px";
  soundEffect.play();
}
else if (x <= 40) {
  noBtn.style.position = "absolute";
  noBtn.style.top = "260px";
  noBtn.style.left = "200px";
  soundEffect.play();
}
else if (x <= 50) {
  noBtn.style.position = "absolute";
  noBtn.style.top = "480px";
  noBtn.style.left = "150px";
  soundEffect.play();
}
else if (x <= 60) {
  noBtn.style.position = "absolute";
  noBtn.style.top = "480px";
  noBtn.style.left = "250px";
  soundEffect.play();
}
else if (x <= 70) {
  noBtn.style.position = "absolute";
  noBtn.style.top = "115px";
  noBtn.style.left = "30px";
  soundEffect.play();
}
else if (x <= 80) {
  noBtn.style.position = "absolute";
  noBtn.style.top = "400px";
  noBtn.style.left = "180px";
  soundEffect.play();
}
else if (x <= 100) {
  noBtn.style.position = "absolute";
  noBtn.style.top = "570px";
  noBtn.style.left = "70px";
  soundEffect.play();
}
}
function openW(){
  window.open("home.html");
}