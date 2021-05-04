$(document).ready(function(){
  $("input").keydown(function(){
    // $("input").css("background-color", "yellow");

    controlInput();
  });
});

function controlInput(){
    var idModal = this.attr('id');
    // console.log(idModal);

    $('#'+idModal).removeClass('is-invalid');
    $('div.invalid-feedback').removeAfter('#'+idModal);
}



// $("form#formID :input").each(function(){
//  var input = $(this); 
//  console.log(input);
// });