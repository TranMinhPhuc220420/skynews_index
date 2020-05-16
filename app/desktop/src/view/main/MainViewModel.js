Ext.define("itunesApple.view.main.MainViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.mainviewmodel",

  data: {
    name: "templateExt",
    navview_max_width: 300,
    navview_min_width: 44,
  },

  stores: {
    menu: {
      type: "tree",
      proxy: {
        type: "ajax",
        reader: "json",
        url: "build/development/itunesApple/resources/desktop/menu.json",
      },
      autoLoad: true,
    },
  },
});
