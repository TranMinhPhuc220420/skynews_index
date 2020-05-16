Ext.define("SkyNewsIndex.view.category.CategoryViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.categoryviewmodel",

  requires: ["SkyNewsIndex.store.CategoryStore"],

  stores: {
    categoryStore: {
      type: "categorystore",
    },
  },
});
