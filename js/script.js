$("#search").keyup(function(){
  $("#error-msg").css("display","none");
  var searchPhrase = $(this).val();
  var isFound = false;
  var $images = $("section div img");
  $images.each(function(e){
    let captionName = $( this ).attr("data-caption");

    if(captionName.toLowerCase().startsWith(searchPhrase.toLowerCase())){
      isFound = true;
      $(this).parent().css("display","block");
    }else{
      $(this).parent().css("display","none");
    }
  });

  if(!isFound){
    $("#error-msg").text("Not found!");
    $("#error-msg").css("display","block");
  }else{
    $("#error-msg").css("display","none");

  }
});

//ligtbox code
lightbox.option({
      'showImageNumberLabel': false
    });
