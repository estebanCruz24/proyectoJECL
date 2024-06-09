function datos(){
	let a=document.getElementById("nombre").value;
	document.getElementById("mostrar1").value=a;
	let b=document.getElementById("fecha").value;
	document.getElementById("mostrar1_1").value=b;
}
function texto(){
	let a=document.getElementById("nombre2").value;
	document.getElementById("mostrar2").value=a;
}
function mostrar() {
	datos();
	texto();
}


