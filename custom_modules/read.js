var fs = require('fs');
module.exports=function(counter){
    var content= JSON.parse(fs.readFileSync("./json/movie.json"));
    content=content.splice(counter,3);
    var html = '';
    //Create movie list using json data
    html += '<div class="row">';
    var ti = "";
    content.forEach(function(val) {
        ti = val.title;
        html += '<div class="col-md-4">';
        html += '<h3 class="text-center text-primary">';
        html += val.title;
        html += '</h3><img alt="Bootstrap Image Preview size" src="' + val.file + '" class="img-circle img-responsive">';
        html += '<p class="text-left">';
        html += val.about;
        html += '</p>';
        html += '<button type="button" class="btn btn-block btn-lg btn-info know" id="' + val.title +
            "&" + val.date + "&" + val.director + "&" + val.actors + "&" + val.about + "&" + val.file + "&" + val.rating + "&" + val.wins + "&" +
            val.nominations + "&" + val.ytlink + '" data-toggle="modal" data-target="#myModal">Know More';
        html += '</button>';
        html += '<button type="button" class="btn btn-block btn-lg btn-primary update" id="' + val.title +
            "&" + val.date + "&" + val.director + "&" + val.actors + "&" + val.about + "&" + val.file + "&" + val.rating + "&" + val.wins + "&" +
            val.nominations + "&" + val.ytlink + '" data-toggle="modal" data-target="#myModal">Update Details';
        html += '</button>';
        html += '<a href="#" id="deleteMovie?title=' + ti + '" class="btn btn-block btn-lg btn-danger delete" data-toggle="modal" data-target="#myModal1">Delete Movie';
        html += '</a>';
        html += '</div>';
      });
        html += '</div>';
    return html;
}
