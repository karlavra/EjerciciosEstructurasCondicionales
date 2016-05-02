function presupuesto(){
	var personas=parseInt(prompt("Ingrese el numero de personas"));

	if(personas==1 ){
		alert("El costo de platillo por persona es $95.00");
	}
	if(personas>200 && personas<=300){
		alert("El costo de platillo por persona es $85.00");
	}
	if(personas>300){
		alert("El costo de platillo por persona es $75.00");
	}
	
}
presupuesto()