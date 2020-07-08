
//Can be used throughout the whole code
var name;
//Can only be used in this instance
let ourName;
//A variable that can't be changed
const constName = 25;

//--------------------------------------------------



var a = Symbol("Una cosa sol.a")
function functionName(a) {
    getElementById('')
    console.log(a.innerHTML);
}

function recoloring() {
    var color1 = "red"
    var color2 = "blue"

    var bodyE = document.getElementById("color-p").style;
    if (bodyE.backgroundColor === color1) {
        bodyE.backgroundColor = color2;
        bodyE.color = color1;
    } else {
        bodyE.backgroundColor = color1
        bodyE.color = color2
    }


}
