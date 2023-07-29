//calculation
function calculation() {
    let first = document.getElementById("result").value;
    let second = eval(first);
    document.getElementById("result").value = second;
}
 
//to dispaly values
function displaying(value) {
    document.getElementById("result").value += value;
}
 


//to clear
function screenClear() {
    document.getElementById("result").value = "";
}
