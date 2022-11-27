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