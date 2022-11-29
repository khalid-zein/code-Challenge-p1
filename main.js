const btn = document.getElementById("btn");


function formReset(){
    document.getElementById("myform").reset();
}

btn.addEventListener("click", function (event){
    event.preventDefault();
    var result = document.getElementById("result").value;
    const output = document.getElementById("output"); 

    console.log(result);
    if (result > 79){
        output.innerHTML = "A";
    }else if(result <= 79 && result >= 60){
        output.innerHTML = "B";
    }else if(result <= 59 && result >= 49){
        output.innerHTML = "C";
    }else if(result <= 49 && result >= 40){ 
        output.innerHTML = "D";
    }else if(result < 40){
        output.innerHTML = "E";
    }



    formReset();
});

// Code Challenge 2
const speed = document.getElementById("speed");

function formReseting(){
    document.getElementById("myForm").reset();
}


speed.addEventListener("click", function (e){
    e.preventDefault();
    var speedDriven = document.getElementById("speedDriven").value;
    const speedLimit = 70;
    const detector = document.getElementById("detector");

    console.log(speedDriven);
    console.log(speedLimit);

    let demerit = (speedDriven -speedLimit)/5;
    console.log(demerit);
    if(speedDriven < 70){
        detector.innerHTML = "OK";
    }else if(speedDriven > speedLimit && demerit <= 12){
        detector.innerHTML = demerit;
    }else if(demerit > 12){
        detector.innerHTML = "License Suspended";
    }


    formReseting();
});

const calculation = document.getElementById("calculation");

calculation.addEventListener("click", function (e){
    e.preventDefault();
    
});