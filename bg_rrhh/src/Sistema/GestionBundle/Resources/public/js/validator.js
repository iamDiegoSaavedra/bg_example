/**
 * 
 */
function validar(){
	var form = document.getElementById("formulario");	
		
		for (var i = 0; i < total; i++){
	        if (!elementos[i].value.length){
	            salida.innerHTML += "<br />- " + elementos[i].name;
	            elementos[i].className = "falta";
	            comodin = false;
	        }
	        else{
	            elementos[i].className = null;
	        }
	    }
	  
}


function validar(){
	var form = document.getElementById("formulario"),
    salida = document.getElementById("miSalida");

	form.addEventListener("submit", function(event){
    event.preventDefault();
    
    salida.innerHTML = "Tienes que completar los siguientes campos:";
  
    var comodin = true,
        elementos = this.elements,
        total = elementos.length;
  
    for (var i = 0; i < total; i++){
        if (!elementos[i].value.length){
            salida.innerHTML += "<br />- " + elementos[i].name;
            elementos[i].className = "falta";
            comodin = false;
        }
        else{
            elementos[i].className = null;
        }
    }
  
    if (comodin){
        this.submit();
    }
    else{
        salida.style.display = "block";
    }
	}, false);
	
}

