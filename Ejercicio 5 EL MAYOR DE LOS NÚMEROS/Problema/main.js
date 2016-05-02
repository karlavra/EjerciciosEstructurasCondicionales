function numMayor(){
	var num1=parseInt(prompt("Ingrese el primer numero a comparar"));
	var num2=parseInt(prompt("Ingrese el segundo numero a comparar"));
	var num3=parseInt(prompt("Ingrese el tercer numero a comparar"));

	if(num1>num2 && num1>num3){
		alert("El numero mayo es " +num1);
	}
	if(num2>num1 && num2>num3){
		alert("El numero mayo es " +num2);
	}
	else{
		alert("El numero mayo es " +num3);
	}
}
numMayor()