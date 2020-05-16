Ext.define("itunesApple.view.main.menu.MenuView", {
  extend: "Ext.list.Tree",
  xtype: "menuview",
  ui: "nav",
  scrollable: true,
  requires: ["Ext.data.TreeStore"],
  bind: {
    store: "{menu}",
  },
});
