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
  if(minutes < 10) {
    minutes = "0" + minutes;
  }
  time = hours + ':' + minutes + morning;
  time = {"time": time};
  return time;
};

Taskbar.prototype.addItem = function(item) {
  if($('.taskbar__program').filter(":contains(" + item.name + ")").length == 0) {
    item = "<div class='taskbar__program open'>" + item.name + "</div>";
    $('.taskbar__programs').append(item);
  }
};

Taskbar.prototype.minimize = function(item) {
  item = $('.taskbar__program').filter(":contains(" + item.name + ")")
  item.removeClass('open');
  item.addClass('min');
}

Taskbar.prototype.removeItem = function(item) {
  $('.taskbar__program').filter(":contains(" + item.name + ")").remove();
};

Taskbar.prototype.bindHandlers = function() {
  var self = this;
  $('.taskbar__start-btn').on('click', self.openStartMenu);
  $(document).on('click', '.taskbar__program', self.openWindow);
};

Taskbar.prototype.openWindow = function() {
  var win = $(this).text();
  if($(this).hasClass('min')) {
    $(this).removeClass('min').addClass('open');
    $("." + win).show();
  } else {
    $(this).removeClass('open').addClass('min');
    $("." + win).hide();
  }
};

Taskbar.prototype.openStartMenu = function() {
  console.log("opening start menu");
};
