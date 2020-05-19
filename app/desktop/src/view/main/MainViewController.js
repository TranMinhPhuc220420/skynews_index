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
    if (node == null) {
      return;
    }

    // if not select this panel so remove 
    let panelRemove = this.getView().down("centerview").down();
    if (node.data.xtype != panelRemove.xtype) {
      this.getView().down("centerview").remove(panelRemove);
    }
    
    if (node.get("xtype") != undefined) {
      this.redirectTo(node.get("xtype"));
    }
  },
});
