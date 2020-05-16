Ext.define("itunesApple.Application", {
  extend: "Ext.app.Application",
  name: "itunesApple",
  requires: ["itunesApple.*"],

  defaultToken: "homeview",

  launch: function () {
    var whichView = "mainview";
    Ext.Viewport.add([{ xtype: whichView }]);
  },
});
