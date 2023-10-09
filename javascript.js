console.log("connected");

const celcius = document.querySelector('.celcius');
console.log(celcius)

const output = document.querySelector('.output');
console.log(output)

const convert = document.querySelector('.sub');
const swap = document.querySelector('.swap');
const reset = document.querySelector('.reset');
const CelciusText = document.querySelector('.CelciusText');
const FarenheitText = document.querySelector('.FarenheitText');
const cel = document.querySelector('.cel');
const far = document.querySelector('.far');

var temp = 0;

function MyConvert() {
    if(temp == 0) {
    var far = (parseFloat(celcius.value) *9)/5 + 32;
    output.value = parseFloat(far.toFixed(2));
    console.log("works" + far);
    }
    else if(temp == 1) {
        var cel = (parseFloat(celcius.value) - 32) * (5/9);
        output.value = cel;
        console.log("works" + cel);
    }
}

convert.addEventListener('click', MyConvert);

function MySwap() {
    if (temp == 0) {
        CelciusText.innerText = "Temperature in farenheit:";
        FarenheitText.innerText = "Temperature in degree celcius:"
        cel.innerText = "°F";
        far.innerText = "°C";
        temp = 1;
    }
    else {
        FarenheitText.innerText = "Temperature in farenheit:";
        CelciusText.innerText = "Temperature in degree celcius:"
        cel.innerText = "°C";
        far.innerText = "°F";
        temp = 0;
    }
    console.log("done");
}

swap.addEventListener('click', MySwap, reset);