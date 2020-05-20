Ext.define("templateExt.view.home.HomeViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.homeviewmodel",

  requires: ["SkyNewsIndex.store.PostStore"],

  stores: {
    postStore: {
      type: "poststore",
    },
    categoryStore: {
      type: "categorystore",
    },
  },
});
