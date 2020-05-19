Ext.define("itunesApple.view.main.MainView", {
  extend: "Ext.Container",
  xtype: "mainview",

  requires: [
    "templateExt.view.main.center.CenterView",
    "itunesApple.view.main.nav.NavView",
  ],

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
      flex: 0.3,
      listeners: { select: "onMenuViewSelectionChange" },
    },
    {
      xtype: "centerview",
      reference: "centerview",
      flex: 1,
    },
  ],
});
