// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

//TODO MOVE THIS
$(function(){
  $("#launchmodal").on("click", function(){
    $("#messages").html("");
  })
  $("#comment_submit").on("click", function(){
    $("#comment_submit").attr("placeholder", "");
  })
  $(".tag-input").on("focus", function(){
    $(".tag-input").attr("placeholder", "");
  })
  $(".tag-input").on("blur", function(){
    $(".tag-input").attr("placeholder", "Tags");
  })
})

$(function(){
  var taginput = $(".tag-input")
  taginput.bind('keypress', function(event) {
    if (event.keyCode === 13){
      event.preventDefault();
      var tagSpan = '<span class="label label-info tag-label">'+ $(".tag-input").val() + '</span>'
      var hiddenValue = '<input type="hidden" name="tag_names[]" value="' + $(".tag-input").val() + '">'
      // debugger
      $("#tags").append(tagSpan).append(hiddenValue)
      $(".tag-input").val("")
    }
  });

})