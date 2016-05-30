$(function() {
var counter=0;
//Ajax call to get JSON data
getMovies();
function getMovies(){
    $.ajax({
        url: "getJson",
        data: 'counter='+counter,
        success: function(data) {
              counter=counter+3;
                if(data !='<div class="row"></div>'){
                  $('#movies').html(data);
                }else{
                  $('#next').attr("disabled","disabled");
                  counter=counter-3;
                }

            $("#movies p").each(function() {
                var txt = $(this).text();
                //To display only 250 characters in list view
                $(this).text(txt.substr(0, 250));
            });
            //On click function to show movie details
            $(".know").click(function() {
                var data1 = $(this).attr('id');
                var values = data1.split('&');
                $('#myModalLabel').html('Movie Details');
                $('.title').hide();
                $('.date').hide();
                $('.director').hide();
                $('.actors').hide();
                $('.about').hide();
                $('.rating').hide();
                $('.wins').hide();
                $('.nominations').hide();
                $('.posterdiv').hide();
                $('.trailer').hide();

                $('.title-info').html(values[0]);
                $('.date-info').html(values[1]);
                $('.director-info').html(values[2]);
                $('.actors-info').html(values[3]);
                $('.about-info').html(values[4]);
                $('.rating-info').html(values[6]);
                $('.awards-info').html(values[7] + " Wins & " + values[8] + " Nominations");
                var trlr = '<div class="col-sm-8"><a href="' + values[9] + '" target="_blank" class="btn btn-primary btn-lg trlr">Watch Trailer </a>';
                $('.trailer-info').html(trlr);
                $('.adbt').addClass('hidden');
                $('.upbt').addClass('hidden');
            });
            //on click function for displaying popup to update movie details
            $(".update").click(function() {
                var data1 = $(this).attr('id');
                var values = data1.split('&');
                $('.title-info').empty();
                $('.date-info').empty();
                $('.director-info').empty();
                $('.actors-info').empty();
                $('.about-info').empty();
                $('.rating-info').empty();
                $('.awards-info').empty();
                $('.trailer-info').empty();

                $('.title').show();
                $('.date').show();
                $('.director').show();
                $('.actors').show();
                $('.about').show();
                $('.rating').show();
                $('.wins').show();
                $('.nominations').show();
                $('.posterdiv').show();
                $('.trailer').show();

                $('#title').val(values[0]);
                $('#title').attr("readonly", "readonly");
                $('#releasedate').val(values[1]);
                $('#director').val(values[2]);
                $('#actors').val(values[3]);
                $('#about').val(values[4]);
                $('#ytlink').val(values[9]);
                $('#rating').val(values[6]);
                $('#wins').val(values[7]);
                $('#nominations').val(values[8]);
                $('.adbt').addClass('hidden');
                $('.trlr').addClass('hidden');
                $('.upbt').removeClass('hidden');
                $('#myModalLabel').html('Update Movie Details');

            });
            //on click function for add new
            $('#adbt,#adbtlink').click(function() {
                $('#myModalLabel').html('Add Movie');
                $('#title').removeAttr("readonly", "readonly");
                $('.upbt').addClass('hidden');
                $('.trlr').addClass('hidden');
                $('.adbt').removeClass('hidden');
                $('.title-info').empty();
                $('.date-info').empty();
                $('.director-info').empty();
                $('.actors-info').empty();
                $('.about-info').empty();
                $('.rating-info').empty();
                $('.awards-info').empty();
                $('.trailer-info').empty();

                $('.title').show();
                $('.date').show();
                $('.director').show();
                $('.actors').show();
                $('.about').show();
                $('.rating').show();
                $('.wins').show();
                $('.nominations').show();
                $('.posterdiv').show();
                $('.trailer').show();
                $('input').val('');
                $('textarea').val('');
                $('select').val('');

            });
            //Assigning href attribute value to delete movie
            $('.delete').click(function() {
                var data = $(this).attr('id');
                console.log(data);
                $('.dlbt').attr("href", data);
            });

        }
    });

}
//To get next 3 movies
$('#next').click(function(){
    $('#previous').prop("disabled",false);
    getMovies();
});
//To get previous 3 movies
$('#previous').click(function(){
  $('#next').prop("disabled",false);
  counter=counter-6;
  if(counter<0){
    $('#previous').prop("disabled",true);
    counter=0;
  }
  getMovies();
});
});
