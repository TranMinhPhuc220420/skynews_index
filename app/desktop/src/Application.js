Ext.define("templateExt.Application", {
  extend: "Ext.app.Application",
  name: "templateExt",
  requires: ["templateExt.*"],
  defaultToken: "homeview",

  launch: function () {
    var whichView = "mainview";
    Ext.Viewport.add([{ xtype: whichView }]);
  },

  onAppUpdate: function () {
    Ext.Msg.confirm(
      "Application Update",
      "This application has an update, reload?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  },
});
