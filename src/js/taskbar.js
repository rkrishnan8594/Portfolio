function Taskbar() {
  this.init();
};

Taskbar.prototype.init = function() {
  var template = Portfolio.templates.taskbar(this.getTime());
  $('.taskbar').html(template);
  this.bindHandlers();
};

Taskbar.prototype.getTime = function() {
  var time = new Date();
  var hours = time.getHours();
  var morning;
  if(hours > 12) {
    hours -= 12;
    morning = ' PM';
  } else if(hours == 0) {
    hours = 12;
    morning = ' AM';
  } else {
    morning = ' AM';
  }
  var minutes = time.getMinutes();
  time = hours + ':' + minutes + morning;
  time = {"time": time};
  return time;
};

Taskbar.prototype.addItem = function(item) {
  if($('.program').filter(":contains(" + item.name + ")").length == 0) {
    item = "<span class='program'>" + item.name + "</span>";
    $('.taskbar__programs').append(item);
  }
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
