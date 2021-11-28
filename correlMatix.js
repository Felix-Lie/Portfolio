function yVarCheck() {
    document.getElementById("1.3").className = "blueback";
    document.getElementById("2.3").className = "blueback";
    document.getElementById("2.5").className = "redback";
    document.getElementById("2.6").className = "redback";
    document.getElementById("2.9").className = "redback";
    document.getElementById("button2").disabled = false;
    document.getElementById("button1").disabled = true;
}

function elVar(){
    //exclude variable sodium, carbo and protein
    document.getElementById("1.5").className = "redback";
    document.getElementById("3.5").className = "redback";
    document.getElementById("4.5").className = "redback";
    document.getElementById("5.5").className = "redback";
    document.getElementById("5.6").className = "redback";
    document.getElementById("5.7").className = "redback";
    document.getElementById("5.8").className = "redback";
    document.getElementById("5.9").className = "redback";
    document.getElementById("5.10").className = "redback";
    document.getElementById("5.11").className = "redback";
    document.getElementById("5.12").className = "redback";
    document.getElementById("5.13").className = "redback";
    document.getElementById("1.6").className = "redback";
    document.getElementById("3.6").className = "redback";
    document.getElementById("4.6").className = "redback";
    document.getElementById("6.6").className = "redback";
    document.getElementById("6.7").className = "redback";
    document.getElementById("6.8").className = "redback";
    document.getElementById("6.9").className = "redback";
    document.getElementById("6.10").className = "redback";
    document.getElementById("6.11").className = "redback";
    document.getElementById("6.12").className = "redback";
    document.getElementById("6.13").className = "redback";
    document.getElementById("1.9").className = "redback";
    document.getElementById("3.9").className = "redback";
    document.getElementById("4.9").className = "redback";
    document.getElementById("6.9").className = "redback";
    document.getElementById("7.9").className = "redback";
    document.getElementById("8.9").className = "redback";
    document.getElementById("9.9").className = "redback";
    document.getElementById("9.10").className = "redback";
    document.getElementById("9.11").className = "redback";
    document.getElementById("9.12").className = "redback";
    document.getElementById("9.13").className = "redback";

    //include total
    document.getElementById("3.3").className = "blueback";
    document.getElementById("3.4").className = "blueback";
    document.getElementById("3.7").className = "blueback";
    document.getElementById("3.8").className = "blueback";
    document.getElementById("3.10").className = "blueback";
    document.getElementById("3.11").className = "blueback";
    document.getElementById("3.12").className = "blueback";
    document.getElementById("3.13").className = "blueback";

    document.getElementById("button2").disabled = true;
    document.getElementById("button1").disabled = true;
    document.getElementById("buttonReset").disabled = false;
}

function reset(){
    document.getElementById("1.3").className = "transparent";
    document.getElementById("2.3").className = "transparent";
    document.getElementById("2.5").className = "transparent";
    document.getElementById("2.6").className = "transparent";
    document.getElementById("2.9").className = "transparent";

    document.getElementById("1.5").className = "transparent";
    document.getElementById("3.5").className = "transparent";
    document.getElementById("4.5").className = "transparent";
    document.getElementById("5.5").className = "transparent";
    document.getElementById("5.6").className = "transparent";
    document.getElementById("5.7").className = "transparent";
    document.getElementById("5.8").className = "transparent";
    document.getElementById("5.9").className = "transparent";
    document.getElementById("5.10").className = "transparent";
    document.getElementById("5.11").className = "transparent";
    document.getElementById("5.12").className = "transparent";
    document.getElementById("5.13").className = "transparent";
    document.getElementById("1.6").className = "transparent";
    document.getElementById("3.6").className = "transparent";
    document.getElementById("4.6").className = "transparent";
    document.getElementById("6.6").className = "transparent";
    document.getElementById("6.7").className = "transparent";
    document.getElementById("6.8").className = "transparent";
    document.getElementById("6.9").className = "transparent";
    document.getElementById("6.10").className = "transparent";
    document.getElementById("6.11").className = "transparent";
    document.getElementById("6.12").className = "transparent";
    document.getElementById("6.13").className = "transparent";
    document.getElementById("1.9").className = "transparent";
    document.getElementById("3.9").className = "transparent";
    document.getElementById("4.9").className = "transparent";
    document.getElementById("6.9").className = "transparent";
    document.getElementById("7.9").className = "transparent";
    document.getElementById("8.9").className = "transparent";
    document.getElementById("9.9").className = "transparent";
    document.getElementById("9.10").className = "transparent";
    document.getElementById("9.11").className = "transparent";
    document.getElementById("9.12").className = "transparent";
    document.getElementById("9.13").className = "transparent";

    document.getElementById("3.3").className = "transparent";
    document.getElementById("3.4").className = "transparent";
    document.getElementById("3.7").className = "transparent";
    document.getElementById("3.8").className = "transparent";
    document.getElementById("3.10").className = "transparent";
    document.getElementById("3.11").className = "transparent";
    document.getElementById("3.12").className = "transparent";
    document.getElementById("3.13").className = "transparent";

    document.getElementById("button2").disabled = true;
    document.getElementById("button1").disabled = false;
    document.getElementById("buttonReset").disabled = true;
}