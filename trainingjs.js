document.getElementById('button001').addEventListener('click', addActivity);
document.getElementById('removebtn').addEventListener('click', remover);
function addActivity(){
    let input2, displalyText, results;
    input2 = document.getElementById('input2').value;
    displalyText = document.createElement('div');
    results = document.createTextNode(input2);
    displalyText.setAttribute('id', 'addedActivity');
    displalyText.appendChild(results);
    document.getElementById("result").appendChild(displalyText);
    //console.log(input2);
}
function remover(){
    document.getElementById('addedActivity').remove();
}
console.log("history length", window.history.length);


/*let amount = prompt("enter amout to convert");
let rate = prompt("enter the conversion rate");*/
function convert(amount, rate){
    result = amount * rate;
    return result;
    console.log(result);
}
convert(100, 1.1);
