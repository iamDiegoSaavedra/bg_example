/**
 * 

$(document).on('click', '.edit', function() {
  $(this).parent().siblings('td.data').each(function() {
    var content = $(this).html();
    $(this).html('<input value="' + content + '" />');
  });
  
  $(this).siblings('.save').show();
  $(this).siblings('.delete').hide();
  $(this).hide();
});

$(document).on('click', '.save', function() {
  
  $('input').each(function() {
    var content = $(this).val();
    $(this).html(content);
    $(this).contents().unwrap();
  });
  $(this).siblings('.edit').show();
  $(this).siblings('.delete').show();
  $(this).hide();
  
});

$(document).on('click', '.delete', function() {
  $(this).parents('tr').remove();
});
**/
//siblings('td.data') Obtiene todos los hermanos(siblings) de cada elemento del conjunto de elementos, puede agregarse un selector
//.each() itera sobre un elemento ejecutando una función para cada elemento combinado.
//.unwrap() Quite a los padres del juego de elementos combinados del DOM, dejando los elementos combinados en su lugar.
$( ".save" ).load(function() {
	$(this).siblings('.save').hide();
});


$(document).on('click', '.edit', function() {
  $(this).parent().siblings('td.data').each(function() {
    var content = $(this).html();
    $(this).html('<input value="' + content + '" />');
  });
  
  $(this).siblings('.save').show();
  $(this).siblings('.delete').hide();
  $(this).hide();
});

$(document).on('click', '.save', function() {
  
  $('input').each(function() {
    var content = $(this).val();
    $(this).html(content);
    $(this).contents().unwrap();
  });
  $(this).siblings('.edit').show();
  $(this).siblings('.delete').show();
  $(this).hide();
  
});


$(document).on('click', '.delete', function() {
  $(this).parents('tr').remove();
});

$('.add').click(function() {
  $(this).parents('table').append('<tr><td class="data"></td><td class="data"></td><td class="data"></td><td><button class="save">Save</button><button class="edit">Edit</button> <button class="delete">Delete</button></td></tr>');
});

$(document).ready(function() {
    var activeSystemClass = $('.list-group-item.active');

    //algo se introduce en el formulario de búsqueda
    $('#system-search').keyup( function() {
       var that = this;
        // afecta todas las filas de la tabla en el siststema de tablas
        var tableBody = $('.table-list-search tbody');
        var tableRowsClass = $('.table-list-search tbody tr');
        $('.search-sf').remove();
        tableRowsClass.each( function(i, val) {
        
            //Lower text for case insensitive
            var rowText = $(val).text().toLowerCase();
            var inputText = $(that).val().toLowerCase();
            if(inputText != '')
            {
                $('.search-query-sf').remove();
                tableBody.prepend('<tr class="search-query-sf"><td colspan="6"><strong>Searching for: "'
                    + $(that).val()
                    + '"</strong></td></tr>');
            }
            else
            {
                $('.search-query-sf').remove();
            }

            if( rowText.indexOf( inputText ) == -1 )
            {
                //hide rows
                tableRowsClass.eq(i).hide();
                
            }
            else
            {
                $('.search-sf').remove();
                tableRowsClass.eq(i).show();
            }
        });
        //all tr elements are hidden
        if(tableRowsClass.children(':visible').length == 0)
        {
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">No entries found.</td></tr>');
        }
    });
});


/**
$(".btn-info[data-target='#modalEdit']").click(function() {
    var columnHeadings = $("thead th").map(function() {
              return $(this).text();
           }).get();
    columnHeadings.pop();
    var columnValues = $(this).parent().siblings().map(function() {
              return $(this).text();
    }).get();
	var modalBody = $('<div id="modalContent"></div>');
	var modalForm = $('<form role="form" name="modalForm" action="putYourPHPActionHere.php" method="post"></form>');
	$.each(columnHeadings, function(i, columnHeader) {
	    var formGroup = $('<div class="form-group"></div>');
	    formGroup.append('<label for="'+columnHeader+'">'+columnHeader+'</label>');
	    formGroup.append('<input class="form-control" name="'+columnHeader+i+'" id="'+columnHeader+i+'" value="'+columnValues[i]+'" />'); 
	    modalForm.append(formGroup);
	});
	modalBody.append(modalForm);
		$('.modal-body').html(modalBody);
});

$('.modal-footer .btn-primary').click(function() {
	$('form[name="modalForm"]').submit();
});

$(document).on('click', '.edit', function() {
	  $(this).parent().siblings('td.data').each(function() {
	    var content = $(this).html();
	    $(this).html('<input value="' + content + '" />');
	  });
	  
	  $(this).siblings('.save').show();
	  $(this).siblings('.delete').hide();
	  $(this).hide();
	});

	$(document).on('click', '.save', function() {
	  
	  $('input').each(function() {
	    var content = $(this).val();
	    $(this).html(content);
	    $(this).contents().unwrap();
	  });
	  $(this).siblings('.edit').show();
	  $(this).siblings('.delete').show();
	  $(this).hide();
	  
	});


	$(document).on('click', '.delete', function() {
	  $(this).parents('tr').remove();
	});

	$('.add').click(function() {
	  $(this).parents('table').append('<tr><td class="data"></td><td class="data"></td><td class="data"></td><td><button class="save">Save</button><button class="edit">Edit</button> <button class="delete">Delete</button></td></tr>');
	});**/