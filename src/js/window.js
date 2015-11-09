function Window(name) {
  this.name = name;
  this.init();
}

Window.prototype.init = function() {
  var self = this;
  var path = './data/json/' + self.name + '.json';
  $.getJSON(path, function(data) {
    var template = Portfolio.templates.folder(data);
    self.render(template);
  });
}

Window.prototype.render = function(template) {
  vex.open({
    content: template
  });
}
