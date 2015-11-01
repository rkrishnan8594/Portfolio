function init() {
  $.getJSON('./data/json/desktop.json', function(data) {
    var template = MyApp.templates.desktop(data);
    $('#content').html(template);
  });
}

$(document).ready(function() {
  init();
});
