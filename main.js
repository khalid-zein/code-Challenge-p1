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

// Code Challenge 3

const calculation = document.getElementById("calculation");

function formResetingg(){
    document.getElementById("reseting").reset();
}

calculation.addEventListener("click", function (yow){
    yow.preventDefault();
    var basicSalary = document.getElementById("money").value;

    console.log(basicSalary);
    const percantage = function (){
        if(basicSalary <= 24000){
            return 10;
        }else if(basicSalary > 24000 && basicSalary <= 32333){
            return 25;
        }else if(basicSalary > 32333){
            return 30;
        }
    }
    console.log(percantage);

    const nhif = function (){
        if (basicSalary <= 5900){
            return 150;
        }else if(basicSalary >= 6000 && basicSalary <= 7999){
            return 300;
        }else if(basicSalary > 7999 && basicSalary <= 11999){
            return 400;
        }else if(basicSalary > 11999 && basicSalary <= 14999){
            return 500;
        }else if(basicSalary > 14999 && basicSalary <= 19999){
            return 600;
        }else if(basicSalary > 19999 && basicSalary <= 24999){
            return 750;
        }else if(basicSalary > 24999 && basicSalary <= 29999){
            return 850;
        }else if(basicSalary > 29999 && basicSalary <= 34999){
            return 900;
        }else if(basicSalary > 34999 && basicSalary <= 39999){
            return 950;
        }else if(basicSalary > 39999 && basicSalary <= 44999){
            return 1000;
        }else if(basicSalary > 44999 && basicSalary <= 49999){
            return 1100;
        }else if(basicSalary > 49999 && basicSalary <= 59999){
            return 1200;
        }else if(basicSalary > 59999 && basicSalary <= 69999){
            return 1300;
        }else if(basicSalary > 69999 && basicSalary <= 79999){
            return 1400;
        }else if(basicSalary > 79999 && basicSalary <= 89999){
            return 1500;
        }else if(basicSalary > 89999 && basicSalary <= 99999){
            return 1600;
        }else if(basicSalary > 99999){
            return 1700;
        }
    }
    console.log(nhif);

    const kra = (basicSalary * 10)/100;
    const relief = 2400;
    const tax = (basicSalary * percantage())/100;
    const nssf = (basicSalary * 6)/100;
    const netSalary = (basicSalary - tax - nssf - nhif() - kra) + relief;
    const net = document.getElementById("net");
    const hamza = document.getElementById("hamza");
    const deductions = document.getElementById("deductions");
    const alwy = document.getElementById("alwy");
    const husna = document.getElementById("husna");
    const hashim = document.getElementById("hashim");
    const mama = document.getElementById("mama");
    const dada = document.getElementById("dada");
    const kaka = document.getElementById("kaka");
    
    console.log(netSalary);
    net.innerHTML = "Net Salary: " + netSalary;
    hamza.innerHTML = "Basic Salary: " + basicSalary;
    deductions.innerHTML = "Deductions";
    alwy.innerHTML = "Tax: " + tax;
    husna.innerHTML = "NSSF: " + nssf;
    hashim.innerHTML = "NHIF: " + nhif();
    mama.innerHTML = "KRA: " + kra;
    kaka.innerHTML = "RELIEF";
    dada.innerHTML = "RELIEF: " + relief;

    // if (basicSalary <= 24000){
    //     alert(basicSalary - ((basicSalary * 10)/100))
    // }

    formResetingg();
});