function init() {
  $.getJSON('./data/json/desktop.json', function(data) {
    var template = Portfolio.templates.desktop(data);
    $('#content').html(template);
    bindHandlers();
  });
}

function bindHandlers() {
  $('.icn').on('dblclick', dblclicked);
  $('.icn').on('click', clicked);
}

function dblclicked() {
  console.log('double clicked item');
}

function clicked() {
  console.log('clicked item');
}

$(document).ready(function() {
  init();
});
