function Window(slug, name, taskbar) {
  this.slug = slug;
  this.name = name;
  this.taskbar = taskbar;
  this.init();
};

Window.prototype.init = function() {
  var self = this;
  var path = './data/json/' + self.slug + '.json';
  $.getJSON(path, function(data) {
    if(self.slug == 'internet-explorer') {
      var template = Portfolio.templates.info(data);
    } else {
      var template = Portfolio.templates.folder(data);
    }
    self.render(template);
    self.taskbar.addItem(data);
    self.data = data;
    self.win = $('.' + data.slug);
    self.bindHandlers();
  });
};

Window.prototype.render = function(template) {
  $('.desktop__icns').after(template);
  if($(window).width() > 736) {
    var offset = 70 * $('.folder').length;
    $('.desktop__icns').next().css({"bottom": 300 - offset + "px", "left": 350 + offset + "px"});
  }
};

Window.prototype.bindHandlers = function() {
  var self = this;
  this.win.find('.bar__icn--close').click(function() {
    self.win.remove();
    self.taskbar.removeItem(self.data);
  });
  this.win.find('.bar__icn--minimize').click(function() {
    self.win.hide();
    self.taskbar.minimize(self.data);
  });

  this.win.on('mousedown', self.focus);
  $('body').on('mousedown', '.folder__bar--primary', self.drag);
  $('body').on('mouseup', function() {
    $('.draggable').removeClass('draggable');
  });
};

Window.prototype.drag = function(e) {
  var folder = $(this).parents('.folder');
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

Window.prototype.focus = function() {
  $('.focused').removeClass('focused').addClass('unfocused');
  $('.folder').addClass('unfocused');
  $(this).removeClass('unfocused').addClass('focused');
  $('.unfocused').find('.folder__bar--primary').css("background-color", "#7B7B7B");
  $('.focused').find('.folder__bar--primary').css("background-color", "#020282");
};
