/**
 * 
 **/
//siblings('td.data') Obtiene todos los hermanos(siblings) de cada elemento del conjunto de elementos, puede agregarse un selector
//.each() itera sobre un elemento ejecutando una función para cada elemento combinado.
//.unwrap() Quite a los padres del conjunto de elementos combinados del DOM, dejando los elementos combinados en su lugar.
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

/**$(document).on('click', '.delete', function() {	
	$(this).parents('tr').remove();	
});**/

$('#modaldelete').on('show', function() {
    var tit = $('.confirm-delete').data('title');

    $('#modaldelete .modal-body p').html("Desea eliminar al usuario " + '<b>' + tit +'</b>' + ' ?');
    var id = $(this).data('id'),
    removeBtn = $(this).find('.danger');
})

$('.delete').on('click', function(e) {
    e.preventDefault();

    var id = $(this).data('id');
    $('#modaldelete').data('id', id).modal('show');
});

$('#btnDelYes').click(function() {
    // handle deletion here
    var id = $('#modaldelete').data('id');
    $('[data-id='+id+']').parents('tr').remove();
    $('#modaldelete').modal('hide');
    
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
        
            
            var rowText = $(val).text().toLowerCase();
            var inputText = $(that).val().toLowerCase();
            if(inputText != '')
            {
                $('.search-query-sf').remove();
                tableBody.prepend('<tr class="search-query-sf"><td colspan="6"><strong>Buscar por: "'
                    + $(that).val()
                    + '"</strong></td></tr>');
            }
            else
            {
                $('.search-query-sf').remove();
            }

            if( rowText.indexOf( inputText ) == -1 )
            {
                
                tableRowsClass.eq(i).hide();
                
            }
            else
            {
                $('.search-sf').remove();
                tableRowsClass.eq(i).show();
            }
        });
       
        if(tableRowsClass.children(':visible').length == 0)
        {
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">Busqueda no encontrada</td></tr>');
        }
    });
});
