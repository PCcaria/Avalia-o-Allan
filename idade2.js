function calculaIdade(){


var idade  = parseFloat(document.getElementById("idade").value);
        

if (( idade >= 5) && (idade <= 7)){
    alert ("Infantil A")
}
else {
    if ((idade>=8)&&(idade<=10)){
        alert ("Infantil B")
    }
        else{
            if ((idade >=11)&&(idade <=13)){
                alert ("Juvenil A")
            }
            else{
                if ((idade >=14)&&(idade <=17)){
                    alert("Junevil B")
                }
                    else{
                        if ((idade >=18)){
                            alert ("Adulto")
                        }
                    else{
                        alert("Menor de 5 anos")
                        }
                    }
                }
            }
        }
    }
