Ext.define("templateExt.view.post.detail.DetailViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.postdetailviewcontroller",

  onPostComment: function (view, index, record, data) {
    const store = this.getView().down("dataview").getStore("commentStore");
    console.log(store);

    // Get id post detail
    let postDetailId = Ext.getCmp("view-post-detail").getStore(
      "postDetailStore"
    ).activeRanges[0].records[0].id;
    let formPostComment = view.up("formpanel").getValues();

    Ext.Ajax.request({
      method: "POST",
      url: "http://localhost:8080/comment/addComment",
      cors: true,
      useDefaultXhrHeader: false,

      params: {
        username: formPostComment.username,
        post_id: postDetailId,
        content: formPostComment.content,
      },

      success: function (response) {
        let notification = response.responseText;

        // Add new category to store
        if (notification !== "Fail") {
          store.add({
            id: parseInt(response.responseText),
            username: formPostComment.username,
            content: formPostComment.content,
          });
        } else {
          // Show notification result add category
          Ext.Msg.alert("Notification", notification);
        }
      },
    });
  },
});
