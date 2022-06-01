// CALCULATOR

function ohmCalc() {
    let ohmT = parseInt(document.querySelector("#ohm-tensiune").value);
    let ohmR = parseInt(document.querySelector("#ohm-rezistenta").value);
    
    let calc = ohmT/ohmR;

    document.querySelector("#ohm-result").innerHTML = "Intensitatea este = " + calc + " A";
}

function ohmCalc1() {
    let ohmE = parseInt(document.querySelector("#ohm-tensiune-1").value);
    let ohmr = parseInt(document.querySelector("#ohm-rezistenta-int").value);
    let ohmR = parseInt(document.querySelector("#ohm-rezistenta-ext").value);

    document.querySelector("#ohm-result-1").innerHTML = "Intensitatea este = " + ohmE/(ohmr + ohmR) + " A";
    document.querySelector("#ohm-result-2").innerHTML = "Tensiunea la borne este = " + (ohmE * ohmR)/(ohmr + ohmR) + " V";
}

function randCalc() {
    let randR = parseInt(document.querySelector("#randament-R").value);
    let randr = parseInt(document.querySelector("#randament-r").value);

    document.querySelector("#randament-result").innerHTML = "Randamentul este " + randR/(randR + randr);
}

function putereCalc() {
    let putereR = parseInt(document.querySelector("#putere-r").value);
    let putereI = parseInt(document.querySelector("#putere-i").value);

    document.querySelector("#putere-result").innerHTML = "Puterea este = " + putereR * (putereI * putereI) + "kwh";
}