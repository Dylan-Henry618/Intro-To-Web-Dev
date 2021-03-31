console.log("Test for User patience commencing...")

function ChangeBGColor(color){
  if(document.body.style.background != color){
  document.body.style.background = color
  console.log("Button pushed, patience of subject...lacking")
  }
}


function ChangeBack(){
  if(document.body.style.background != 'white'){
  document.body.style.background = 'white'
  console.log("Page reset, continuing experiment")
  }
}



function buttonSwitch(){
  if (document.getElementById("Reset").hidden ==true){
    document.getElementById("Push").hidden = true
    document.getElementById("Reset").hidden = false
  }
  else {
    document.getElementById("Push").hidden = false
    document.getElementById("Reset").hidden = true
  }
}
