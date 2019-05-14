function Convert() {
    let indexMeter = document.getElementById("meter").value;
    let indexFoot= document.getElementById("foot").value;
    let number = document.getElementById("inputNumber").value;
    let result= number*indexMeter/indexFoot;
    document.getElementById("outputResult").innerHTML = result.toFixed(3);
}

