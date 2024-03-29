function somar(){
    var num1;
    var num2;
    
    num1 = parseInt (document.getElementById("tPrimeiro").value);
    num2 = parseInt (document.getElementById("tSegundo").value);

    resultado = num1 + num2;
    alert(resultado);
}

function subtrair(){
    var num1;
    var num2;
    
    num1 = parseInt (document.getElementById("tPrimeiro").value);
    num2 = parseInt (document.getElementById("tSegundo").value);

    resultado = num1 - num2;
    alert(resultado);
}

function dividir(){
    var num1;
    var num2;
    
    num1 = parseInt (document.getElementById("tPrimeiro").value);
    num2 = parseInt (document.getElementById("tSegundo").value);

    resultado = num1 / num2;
    alert(resultado);
}

function multiplicar(){
    var num1;
    var num2;
    
    num1 = parseInt (document.getElementById("tPrimeiro").value);
    num2 = parseInt (document.getElementById("tSegundo").value);

    resultado = num1 * num2;
    alert(resultado);
}