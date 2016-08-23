function verificar()
{
	var verificacion = true;	
	var fi = document.getElementById("form1");
	var controles = fi.getElementsByTagName("input");//obtenemos un array de todos los elementos de etiqueta INPUT
	
	for ( i=0; i<controles.length; i++){ //recorremos el array
		control = controles[i];
		if (control.type == 'text'){ // filtramos aquellos que sean type="text"
			if (control.value == "" ) { //validamos si INPUT text estan vacios
				$(controles[i]).closest(".form-group").addClass("has-error").removeClass("has-success");;
				verificacion = false;				
			}
			else{				
				$(controles[i]).closest(".form-group").addClass("has-success").removeClass("has-error");
			}
			
		}
	}
	return verificacion;
}


$('.prev').click(function(){
  var prevId = $(this).parents('.tab-pane').prev().attr("id");
  $('[href=\\#'+prevId+']').tab('show');
  return false;
  
})


$('.next').click(function(){
	var nextId = $(this).parents('.tab-pane').next().attr("id");
	var step = $(e.target).data('step');
	var valform = verificar; 
	  
	if (valform() == true ){		
		$('[href=\\#'+nextId+']').tab('show');		
	}	
	else
	{
		alert("Faltan datos")
	}
	  
})


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  
  //actualizar progreso
  var step = $(e.target).data('step');
  var percent = (parseInt(step) / 4) * 100;
  
  $('.progress-bar').css({width: percent + '%'});
  $('.progress-bar').text("Paso " + step + "de 4");  
  
})


$('.first').click(function(){

  $('#myWizard a:first').tab('show')

})



