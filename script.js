
function randomDice(){
 


    const min = getMinValue();
    const max = getMaxValue();
    const result= Math.floor(Math.random() * (max - min + 1) + min);

    const resultFinal = document.getElementById('result');
    console.log(resultFinal);

    resultFinal.innerText = "Resultado: " + result;
    
    console.log(resultFinal);
}

function getMinValue(){
    return Math.ceil(document.querySelector(".min").value);
}
function getMaxValue(){
    return Math.floor(document.querySelector(".max").value)
}
