$(document).ready(function(){
    //reference
    var main = $('.Main');
    var myHost = 'http://localhost:80/php-ajax-dischi/partials/script/database_ajax.php'
    // init handlebars template
    var source = $('#album-template').html();
    var template = Handlebars.compile(source);
    // call function
    database(myHost, main, template);
    // function to select author
    selectAuthor();
}); // end document ready

/***********************
    FUNCTION           *
 **********************/

function database(myHost, main, template) {
    $.ajax({
        url: myHost,
        method: 'GET',
        success: function(res){
            printTemplate(res, main, template);
        }, 
        error: function() {
            console.log('Error call');
        }
    })
}

function printTemplate(res, main, template) {
    for( var i = 0; i < res.length; i++ ) {
        var data = res[i]
        var context = {
            img : data.cover,
            title : data.album,
            author : data.author,
            year : data.year,
            singer : data.author.toLowerCase()
        }
        //output
        var output = template(context);
        // items
        main.append(output);
    }
}

function selectAuthor() {
    $('#author').change(function(){
        var author = $(this).val().toLowerCase();
        if( author ===  'all') {
            $('.cd').show();
        } else {
            $('.cd').hide();
            $('.cd.' + author).show();
        }
    });
}