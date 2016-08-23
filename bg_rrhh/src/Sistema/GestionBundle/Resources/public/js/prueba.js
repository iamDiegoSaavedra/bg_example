/**
 * 
 */
$(document).ready(function() {
		var $validator = $("#commentForm").validate({
		  rules: {		    
		    name: {
		      required: true,
		      minlength: 3
		    },
			
			apellido: {
		      required: true,
		      minlength: 3
		    },
			
			rut: {
		      required: true,		      		      
		      minlength: 7
		    },
			
			dir: {
				required: true
		    },
		    
		    numtel: {
			    required: true,
			    number: true,
			    maxlength: 7,
			    minlength: 6
			},
		    			
			selcomuna: {
				required: true		      
		    },
			
			selNacionalidad: {
				required: true		      
		    },
			
		    gender: {
		        required: true
		    },
			
			email:{
			    required: true,
			    email: true,
			    minlength: 3
			},
			
		    password: {
                required: true,
                minlength: 6,
                maxlength: 25
            },
            
            rpassword: {
                required: true,
                minlength: 6,
                maxlength: 25,
                equalTo: "#password"
            },
            
            terms:{
            	required: true
            },
			    
		    urlfield: {
		      required: true,
		      minlength: 3,
		      url: true
		    }
			
		  },
		
		  highlight: function(element) {
              $(element).closest('.form-group').removeClass('has-success').addClass('has-error');              
          },
          success: function(element) {
              $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
              //$(element).closest('.form-group').find('input, textarea, button, select').attr('disabled','disabled');
          },
          
          
		
		});		
		

	  	$('#rootwizard').bootstrapWizard({
	  		'tabClass': 'nav nav-pills',
	  		'onNext': function(tab, navigation, index) {
	  			var $valid = $("#commentForm").valid();
	  			
	  			if(!$valid) {
	  				$validator.focusInvalid();
	  				return false;
	  			}
	  			
	  		},	  		
	  		
	  		
		  	'onTabShow': function(tab, navigation, index) {
				var $total = navigation.find('li').length;
				var $current = index+1;
				var $percent = ($current/$total) * 100;
				$('#rootwizard .progress-bar').css({width:$percent+'%'});
			}
	  	
	  	});	
	  	
	  	$('#rootwizard .finish').click(function() {	  			
  			$('#rootwizard').find("a[href*='tab1']").trigger('click');
  		});
	  	
		
});


/**
$('#mydiv').find('input, textarea, button, select').attr('disabled','disabled');
$("#id_elemento").attr("disabled", "disabled");
**/