Ext.define("templateExt.view.main.center.CenterView", {
  extend: "Ext.Container",
  requires: [
    "SkyNewsIndex.view.category.CategoryView",
    "SkyNewsIndex.view.post.formAdd.AddPostView",
  ],

  xtype: "centerview",
  cls: "centerview",
  layout: "card",
});
