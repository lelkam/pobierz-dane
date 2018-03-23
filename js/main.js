$('button').click(function () {
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
        $.each(data, function (i, field) {
            var $newdiv1 = $("<div id='dane-programisty'></div>")
            $('body').append($newdiv1);
            document.getElementById('dane-programisty').append(field + " ");

        });
    });
});




/*var $newdiv1 = $( "<div id='object1'></div>" ),
  newdiv2 = document.createElement( "div" ),
  existingdiv1 = document.getElementById( "foo" );
 
$( "body" ).append( $newdiv1, [ newdiv2, existingdiv1 ] );*/


/*
$(document).ready(function () {
    $('button').click(function () {
            $.ajax({
                    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', {
                            get_param: 'value'
                            function (data) {
                                $.each(data, function (index, element) {
                                    $('body').append($('<div>', {
                                        text: element.name
                                    }));
                                });
                            });

                        console.log(data);
                    }),
            });
    });
})

function addDiv() {

}
*/




/*    $('button').on('click',function () {
        $.ajax({ 
    type: 'GET', 
    url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
        console.log(data);
        
        var newDiv = document.createElement('div#dane-programisty');
        newDiv.innerHTML = data;
        
        
        $.each('data', function(index, element) {
            $('body').append($('<div #dane-programisty>'); {
                text: element.name
                
                
            }
        });
    });
        */









/*$.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
            console.log(data);
            $.each(data, function(i, field){
                $("div").append(field + " ");
            });
            });*/
