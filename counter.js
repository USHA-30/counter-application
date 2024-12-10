if (typeof window !== "undefined"){
    let element = document.getElementById("counting");

//function to increase count    
function increaseCount( ){
    let preValue = element.textContent;
    let updateValue =parseInt( preValue) + 1;
    element.textContent=updateValue;
    if(updateValue > 0){
        element.style.color ="green";
    }
    else if(updateValue < 0 ){
        element.style.color="red";
    }
    else {
        element.style.color="black";

    }
    document.getElementById("positive").style.borderBlockColor ="blue"
    document.getElementById("negative").style.borderBlockColor ="grey"
    document.getElementById("zero").style.borderBlockColor ="grey"
}

//function to decrease the count
function decreaseCount( ){
    let preValue = element.textContent;
    let updateValue =parseInt( preValue) - 1;
    element.textContent=updateValue;
    if(updateValue > 0){
        element.style.color ="green";
    }
    else if(updateValue < 0 ){
        element.style.color="red";
    }
    else {
        element.style.color="black";

    }
    document.getElementById("negative").style.borderBlockColor ="blue"
    document.getElementById("positive").style.borderBlockColor ="grey"
    document.getElementById("zero").style.borderBlockColor ="grey"
}

//function to reset count to zero
function resetCount( ){
  let val = 0;
  element.textContent = val;
  element.style.color ="black"

  document.getElementById("zero").style.borderBlockColor ="blue"
  document.getElementById("positive").style.borderBlockColor ="grey"
  document.getElementById("negative").style.borderBlockColor ="grey"

}
}