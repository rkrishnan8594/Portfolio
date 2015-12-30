function Desktop() {
  this.taskbar = new Taskbar();
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
  $('.icn').on('dblclick', function() {
    self.dblclicked(this, self.taskbar);
  });
  $('body').on('mousedown', '.icn', self.dragged);
  $('body').on('mouseup', function() {
    $('.draggable').removeClass('draggable');
  });
};

Desktop.prototype.dblclicked = function(icon, taskbar) {
  var name = $(icon).find('.icn__label').html();
  if(!$('.folder').hasClass(name))
    new Window(name.toLowerCase(), taskbar);
};

Desktop.prototype.dragged = function(e) {
  var xOffset = e.pageX - $(this).offset().left;
  var yOffset = e.pageY - $(this).offset().top;
  $(this).addClass('draggable').parents().on('mousemove', function(e) {
    $('.draggable').offset({
      top: e.pageY - yOffset,
      left: e.pageX - xOffset
    }).on('mouseup', function() {
      $(this).removeClass('draggable');
    });
  });
  e.preventDefault();
};

new Desktop();
