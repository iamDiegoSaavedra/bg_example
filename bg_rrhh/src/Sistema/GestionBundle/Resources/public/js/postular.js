/**
 * 
 */

$(document).ready(function() {
	$('#loginform').formValidation({
		framework: 'bootstrap',
		message: 'Este valor no es valido',
		feedbackIcons: {
		  valid: 'glyphicon glyphicon-ok',
		  invalid: 'glyphicon glyphicon-remove',
		  validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			mpEmail: {
                validators: {
                	notEmpty: {
                        message: 'E-mail es requerido'
                    },
                    emailAddress: {
                        message: 'No es una direccion E-mail valido'
                    },
                    regexp: {
                        regexp: /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/,
                        message: 'E-mail no valido'
                    }
                }
            },
            mpPass: {                
                validators: {
                    notEmpty: {
                        message: 'Contrase&#xf es requerido'
                    },
                    stringLength: {
                        min: 6,                       
                        message: 'La Contrase&#xf1;a debe ser mayor a 6 caracteres'
                    }                    
                }
            }
		}
	});
})