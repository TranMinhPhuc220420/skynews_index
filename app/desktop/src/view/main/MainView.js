Ext.define("itunesApple.view.main.MainView", {
  extend: "Ext.Container",
  xtype: "mainview",

  controller: "mainviewcontroller",
  viewModel: {
    type: "mainviewmodel",
  },

  requires: ["Ext.layout.HBox"],
  layout: "hbox",

  items: [
    {
      xtype: "navview",
      reference: "navview",
      docker: "lef",
      flex: 0.2,
      listeners: { select: "onMenuViewSelectionChange" },
    },
    {
      xtype: "centerview",
      reference: "centerview",
      flex: 1,
    },
  ],
});
