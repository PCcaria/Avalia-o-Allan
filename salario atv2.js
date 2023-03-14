function calcN(){
    var h = parseFloat(document.getElementById("horas").value);
    var e=0;
    var n=0;
    
    if (h> 50){
        e = h-50;
        n = 20*e;
        alert ("O salario  excedido foi: "+ e + " e a multa foi:" + n);
    }
    else{
        e=0;
        n=0;
        alert ("Nao foi gerado multa"+ "\n"+"Excedido ="+ e +"\n Multa-" +n);
    }
}