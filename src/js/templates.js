this["Portfolio"] = this["Portfolio"] || {};
this["Portfolio"]["templates"] = this["Portfolio"]["templates"] || {};
this["Portfolio"]["templates"]["desktop"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "    <li class=\"icn\">\n      "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        <img class=\"icn__image\" src=\""
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\"/>\n        <p class=\"icn__label\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</p>\n      "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    </li>\n";
},"2":function(depth0,helpers,partials,data) {
    return "<a href=\""
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\">";
},"4":function(depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"desktop__icns\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
this["Portfolio"]["templates"]["folder"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "      <div class=\"folder__items--container\" contenteditable></div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"folder__items--container\">\n        <ul class=\"folder__items--list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n      </div>\n";
},"4":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "          <li class=\"icn folder__icn\">\n            <a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">\n              <img class=\"icn__image\" src=\""
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\"/>\n              <p class=\"icn__label folder__label\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</p>\n            </a>\n          </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"folder "
    + alias3(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"slug","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"folder__container\">\n    <div class=\"folder__bar--primary\">\n      <img class=\"bar__icn--img\" src=\""
    + alias3(((helper = (helper = helpers['taskbar-icn'] || (depth0 != null ? depth0['taskbar-icn'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"taskbar-icn","hash":{},"data":data}) : helper)))
    + "\"/>\n      <div class=\"bar__title\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n      <img class=\"bar__icn bar__icn--close\" src=\"../data/img/close.png\"/>\n      <img class=\"bar__icn bar__icn--expand\" src=\"../data/img/expand.png\"/>\n      <img class=\"bar__icn bar__icn--minimize\" src=\"../data/img/minimize.png\"/>\n    </div>\n    <div class=\"folder__bar--secondary\">\n      <u>F</u>ile <u>E</u>dit <u>V</u>iew <u>H</u>elp\n    </div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.notepad : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});
this["Portfolio"]["templates"]["info"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"folder alert "
    + alias3(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"slug","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"folder__container\">\n    <div class=\"folder__bar--primary\">\n      <img class=\"bar__icn--img\" src=\""
    + alias3(((helper = (helper = helpers['taskbar-icn'] || (depth0 != null ? depth0['taskbar-icn'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"taskbar-icn","hash":{},"data":data}) : helper)))
    + "\"/>\n      <div class=\"bar__title\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n      <img class=\"bar__icn bar__icn--close\" src=\"../data/img/close.png\"/>\n    </div>\n    <div class=\"folder__message\">\n      <p>"
    + alias3(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "<p>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
this["Portfolio"]["templates"]["taskbar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"taskbar__start-btn\">\n  <img class=\"start-btn__icn\" src=\"../data/img/logo.png\">\n  <p class=\"start-btn__txt\">Start</p>\n</div>\n<ul class=\"taskbar__programs\"></ul>\n<div class=\"taskbar__tray\">\n  <p class=\"tray__time\">"
    + this.escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"time","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n";
},"useData":true});
this["Portfolio"]["templates"]["taskbarItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"taskbar__program open\">\n  <img class=\"program__icn\" src=\""
    + alias3(((helper = (helper = helpers['taskbar-icn'] || (depth0 != null ? depth0['taskbar-icn'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"taskbar-icn","hash":{},"data":data}) : helper)))
    + "\"/>\n  <span class=\"program__label\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n</li>\n";
},"useData":true});