Ext.define("SkyNewsIndex.view.post.show.PostShowViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.postshowviewmodel",

  requires: ["SkyNewsIndex.store.PostStore"],

  stores: {
    postStore: {
      type: "poststore",
    },
  },
});
