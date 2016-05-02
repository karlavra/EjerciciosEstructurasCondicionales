function numeroMayor(){
	var num1=parseInt(prompt("Ingrese el primer numero"));
	var num2=parseInt(prompt("Ingrese el segundo numero"));
	if (num1>num2){
		alert("El numero " +num1+ " es mayor.");
	}
	else {
		alert("El numero " +num2+ " es mayor." )
	}
}
numeroMayor()