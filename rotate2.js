//function Rotate(){
//  document.getElementById("a").style.transform = "20deg";
//}
let rotations = 0;

//var test = document.getElementById("a").bottom;
//test.addEventListener("click", Rotate);
var timer = 0
timer = setInterval(Rotate, 1);
function Rotate(){
//  document.getElementById("a").style.mstransform = "rotate("+ (20*rotations)+ "deg)";
//if test <= 0{
  rotations += 1;
  document.getElementById("a").style.transform = "rotate(" + rotations + "deg)";
  document.getElementById("b").style.transform = "rotate(" + (-1*(20+rotations)) + "deg)";
  console.log(rotations)
  //}
};
