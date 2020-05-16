Ext.define("itunesApple.view.main.nav.NavView", {
  extend: "Ext.Panel",
  xtype: "navview",
  controller: "navviewcontroller",
  layout: "fit",
  title: "ADMIN",

  items: [
    {
      xtype: "menuview",
      reference: "menuview",
      listeners: {
        selectionchange: "onMenuViewSelectionChange",
      },
    },
  ],
});
