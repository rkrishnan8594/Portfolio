function Desktop() {
  this.init();
};

Desktop.prototype.init = function() {
  var self = this;
  $.getJSON('./data/json/desktop.json', function(data) {
    var template = Portfolio.templates.desktop(data);
    $('#content').html(template);
    self.bindHandlers();
  });
};

Desktop.prototype.bindHandlers = function() {
  var self = this;
  $('.icn').on('dblclick', self.dblclicked);
  $('body').on('mousedown', '.icn', self.dragged);
  $('body').on('mouseup', function() {
    $('.draggable').removeClass('draggable');
  });
};

Desktop.prototype.dblclicked = function() {
  var name = $(this).find('.icn__label').html();
  new Window(name.toLowerCase());
};

Desktop.prototype.dragged = function(e) {
  $(this).addClass('draggable').parents().on('mousemove', function(e) {
    $('.draggable').offset({
      top: e.pageY - $('.draggable').outerHeight() / 2,
      left: e.pageX - $('.draggable').outerWidth() / 2
    }).on('mouseup', function() {
      $(this).removeClass('draggable');
    });
  });
  e.preventDefault();
};

new Desktop();
