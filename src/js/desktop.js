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
  if(this == window)
    var self = this.Desktop.prototype;
  else
    var self = this;
  if($(window).width() < 736) {
    self.mobileHandlers();
  } else {
    self.desktopHandlers();
  }
};

Desktop.prototype.desktopHandlers = function() {
  var self = this;
  $('.icn').on('dblclick', function() {
    self.dblclicked(this, self.taskbar);
  });
  $('body').on('mousedown', '.icn', self.dragged);
  $('body').on('mouseup', function() {
    $('.draggable').removeClass('draggable');
  });
  $(window).one('resize', self.bindHandlers);
};

Desktop.prototype.mobileHandlers = function() {
  var self = this;
  $('.icn').on('click', function() {
    self.dblclicked(this, self.taskbar);
  });
  $('.folder').removeAttr('style');
  $(window).one('resize', self.bindHandlers);
};

Desktop.prototype.dblclicked = function(icon, taskbar) {
  var self = this;
  var name = $(icon).find('.icn__label').html();
  if(!$('.folder').hasClass(self.slugify(name)))
    new Window(self.slugify(name), name, taskbar);
};

Desktop.prototype.slugify = function(name) {
  name = name.toLowerCase();
  name = name.replace(/\s/g, "-");
  return name;
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
