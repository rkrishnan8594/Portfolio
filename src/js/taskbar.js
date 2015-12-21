function Taskbar() {
  this.init();
};

Taskbar.prototype.init = function() {
  var template = Portfolio.templates.taskbar();
  $('.taskbar').html(template);
  this.bindHandlers();
};

Taskbar.prototype.addItem = function() {
  console.log("Adding item to taskbar");
};

Taskbar.prototype.bindHandlers = function() {
  var self = this;
  console.log("Binding shit");
  $('.taskbar__start-btn').on('click', self.openStartMenu)
};

Taskbar.prototype.openStartMenu = function() {
  console.log("opening start menu");
}

new Taskbar();
