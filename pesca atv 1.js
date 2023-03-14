function calcPx(){
    var px = parseFloat(document.getElementById("peso").value);
    var e=0;
    var m=0;
    
    if (px > 50){
        e = px-50;
        m = 4*e;
        alert ("O peso excedido foi: "+ e + " e a multa foi:" + m);
    }
    else{
        e=0;
        m=0;
        alert ("Nao foi gerado multa"+ "\n"+"Excedido ="+ e +"\n Multa-" +m);
    }
}