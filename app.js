function number(num){
    var dsply = document.getElementById("dsply");
    dsply.value += num;
}

function clearinput(){
    var dsply = document.getElementById("dsply");
    dsply.value = "";
}

function getAnswer(num){
    var dsply = document.getElementById("dsply");
    console.log(dsply.value);
    dsply.value = eval(dsply.value);
}

function soon(){
alert("Function Available Soon");



}