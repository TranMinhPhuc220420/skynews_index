Ext.define("itunesApple.view.main.MainViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.mainviewcontroller",

  routes: {
    ":xtype": { action: "mainRoute" },
  },

  mainRoute: function (xtype) {
    var centerview = this.lookup("centerview");
    centerview.add({ xtype: xtype });
    centerview.setActiveItem(xtype);
  },

  onMenuViewSelectionChange: function (tree, node) {
    let panelRemove = this.getView().down("centerview").down();
    this.getView().down("centerview").remove(panelRemove);

    if (node == null) {
      return;
    }
    var vm = this.getViewModel();
    if (node.get("xtype") != undefined) {
      this.redirectTo(node.get("xtype"));
    }
  },
});
