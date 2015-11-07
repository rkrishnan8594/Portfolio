function init() {
  $.getJSON('./data/json/desktop.json', function(data) {
    var template = Portfolio.templates.desktop(data);
    $('#content').html(template);
    bindHandlers();
  });
}

function bindHandlers() {
  //$('.icn').on('dblclick', dblclicked);
  //$('.icn').on('click', clicked);
  $('body').on('mousedown', '.icn', dragged);
  $('body').on('mouseup', function() {
    $('.draggable').removeClass('draggable');
  });
}

function dblclicked() {
  console.log('double clicked item');
}

function clicked(el) {
  $(el).hide();
}

function dragged(e) {
  $(this).addClass('draggable').parents().on('mousemove', function(e) {
    $('.draggable').offset({
      top: e.pageY - $('.draggable').outerHeight() / 2,
      left: e.pageX - $('.draggable').outerWidth() / 2
    }).on('mouseup', function() {
      $(this).removeClass('draggable');
    });
  });
  e.preventDefault();
}

$(document).ready(function() {
  init();
});
