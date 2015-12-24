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
  // vex.open({
  //   content: template
  // });
  $('.desktop__icns').after(template);
};

Window.prototype.bindHandlers = function() {
  var self = this;
  $('.folder__bar').on('click', self.drag);
};

Window.prototype.drag = function() {
  console.log("in drag");
};
