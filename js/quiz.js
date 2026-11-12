function randInt(min,max){
    let num = Math.floor(Math.random()*(max-min+1)+min);
    return num;
}

let M = randInt(500,700);
document.getElementById("M").textContent = M.toString();
let N = randInt(100,300);
document.getElementById("N").textContent = N.toString();
let K = randInt(1,10);
document.getElementById("K").textContent = K.toString();
// Update the answer
document.querySelector('[value="3"]').nextSibling.nodeValue=M.toString()+"-"+N.toString()+"-"+K.toString();
// Change style of the answer block --- click --- selected to unselected to selected
function changeStyle(event){ // checkbox has default behavior in HTML
    event.preventDefault();
    console.log(this.getAttribute('class'));
    let classname = this.getAttribute('class');
    if(classname == "answer"){
        classname = 'answer selected';
    }else if(classname == "answer selected"){
        classname = 'answer';
    }
    this.setAttribute('class', classname);
}
// Event -- Old Action
//document.getElementsByClassName('answer')[0].addEventListener("click", changeStyle);
//document.getElementsByClassName('answer')[1].addEventListener("click", changeStyle);
//document.getElementsByClassName('answer')[2].addEventListener("click", changeStyle);
//document.getElementsByClassName('answer')[3].addEventListener("click", changeStyle);
// Event -- New Action (for loop)
for(i=0; i<document.getElementsByClassName('answer').length; i++) {
    document.getElementsByClassName('answer')[i].addEventListener("click", changeStyle);
}