function Window(name) {
  this.name = name;
  this.init();
};

Window.prototype.init = function() {
  var self = this;
  var path = './data/json/' + self.name + '.json';
  $.getJSON(path, function(data) {
    var template = Portfolio.templates.folder(data);
    self.render(template);
    self.bindHandlers();
  });
};

Window.prototype.render = function(template) {
  $('.desktop__icns').after(template);
};

Window.prototype.bindHandlers = function() {
  var self = this;
  $('body').on('mousedown', '.folder__bar', self.drag);
  $('body').on('mouseup', function() {
    $('.draggable').removeClass('draggable');
  });
};

Window.prototype.drag = function(e) {
  var folder = $(this).parent();
  var xOffset = e.pageX - $(folder).offset().left;
  var yOffset = e.pageY - $(folder).offset().top;
  $(folder).addClass('draggable').parents().on('mousemove', function(e) {
    $('.draggable').offset({
      top: e.pageY - yOffset,
      left: e.pageX - xOffset
    }).on('mouseup', function() {
      $(folder).removeClass('draggable');
    });
  });
  e.preventDefault();
};
