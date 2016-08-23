/**
 * 
**/

$(document).ready(function(){
	$('#newformsubmit').formValidation({
    	framework: 'bootstrap',
        message: 'El Formulario no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	newRut: {
                message: 'Rut no valido',
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    },
                    stringLength: {
                    	minlength: 6,
                    	maxlength: 13,
                        message: 'El RUT debe tener entre 6 a 13 caracteres'
                    },
                    regexp: {
                        regexp: /\b\d{1,8}\-[K|k|0-9]{1}$/,
                    }
                }
            },
        	newName: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            newLastname: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            newDir: {
                message: 'Direccion no valida',
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    },
                    stringLength: {
                        min: 10,                       
                        message: 'a direccion debe tener mas de 10 caracteres'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,                        
                    }
                }
            },
            newComuna: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
           newRegion: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            newTelNumber: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            newLicencia: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            }
                        
        }
    });
})


$(document).ready(function(){
	$('#formNuevoSancion').formValidation({
    	framework: 'bootstrap',
        message: 'El Formulario no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	sanMotivo: {                
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            sanTema: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            sanMaquina: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            sanPatente: {
                message: 'Direccion no valida',
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            sanFecha: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            sanHora: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            sanLugar: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            sanRecorrido: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            sanDetalles: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            sanSancion: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            }
         }
    });
})

$(document).ready(function(){
	$('#formNuevoConstancia').formValidation({
    	framework: 'bootstrap',
        message: 'El Formulario no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	constNombre: {                
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            constApellido: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            constRut: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            constEmail: {
                message: 'Direccion no valida',
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            constTelefono: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            constMotivo: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            constTema: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            } ,

            constMaquina: {                
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            constPatente: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            constFecha: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },            
            constHora: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            consRecorrido: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            },
            constDetalles: {
                validators: {
                    notEmpty: {
                        message: 'Este campo es requerido'
                    }
                }
            }
        }    
    });
})

$('#sanReset').click(function(){    
    $('#formNuevoSancion').data('formValidation').resetForm();
});

$('#consReset').click(function(){    
    $('#formNuevoConstancia').data('formValidation').resetForm();
});

