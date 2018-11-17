$(document).ready(() => {
function hideAll() {
  $('.audio').hide();
  $('.title').hide();
};
$('article').delay(500).animate({'opacity':'1'},700);
hideAll();
  $('.pic').click(function() {
    hideAll();
  switch ($(this).attr("id")) {
      case "adore":
        $('#a').show();
        $('#adoreyou').show();
        break;
      case "another_lifetime":
        $('#al').show();
        $('#another').show();
        break;
      case "bad":
        $('#bb').show();
        $('#badblood').show();
        break;
      case "alive":
        $('#m').show();
        $('#makeit').show();
        break;
    }
    $(".audio").each(function() {
        this.pause();
        this.currentTime = 0;
    });
  });
/*
$('#adore').on('click',() => {
$('audio').hide();
$('#a').show();
$('#al').hide();
$('#bb').hide();
$('#m').hide();
  $('#adoreyou').show();
});
$('#another_lifetime').on('click',() => {
$('audio').hide();
  $('#another').show();
  $('#al').show();
  $('#a').hide();
  $('#bb').hide();
  $('#m').hide()

});
$('#bad').on('click',() => {
$('audio').hide();
$('#bb').show();
$('#a').hide();
$('#al').hide();
$('#m').hide()
  $('#badblood').show();
});
$('#make').on('click',() => {
$('audio').hide();
$('#m').show();
$('#a').hide();
$('#bb').hide();
$('#al').hide()
  $('#makeit').show();

});
*/






});
