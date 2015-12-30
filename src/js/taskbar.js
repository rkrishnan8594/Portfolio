function Taskbar() {
  this.init();
};

Taskbar.prototype.init = function() {
  var template = Portfolio.templates.taskbar();
  $('.taskbar').html(template);
  this.bindHandlers();
};

Taskbar.prototype.addItem = function(item) {
  item = "<span class='program'>" + item.name + "</span>";
  $('.taskbar__programs').append(item);
};

Taskbar.prototype.removeItem = function(item) {
  $('.program').filter(":contains(" + item.name + ")").remove();
};

Taskbar.prototype.bindHandlers = function() {
  var self = this;
  $('.taskbar__start-btn').on('click', self.openStartMenu);
  $(document).on('click', '.program', self.openWindow);
};

Taskbar.prototype.openWindow = function() {
  var win = $(this).text();
  $("." + win).show();
};

Taskbar.prototype.openStartMenu = function() {
  console.log("opening start menu");
};
