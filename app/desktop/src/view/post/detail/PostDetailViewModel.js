Ext.define("itunesApple.view.post.detail.PostDetailViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.postdetailviewmodel",

  stores: {
    postDetailStore: {
      type: "poststore",
    },
    commentStore: {
      type: "commentstore",
    },
  },
});
