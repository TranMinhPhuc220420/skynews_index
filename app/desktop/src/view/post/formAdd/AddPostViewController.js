Ext.define("SkyNewsIndex.view.post.formAdd.AddPostViewController", {
  alias: "controller.addpostviewcontroller",
  extend: "Ext.app.ViewController",

  onPostNewPost: function (e) {
    var form = this.getView().down("formpanel");

    if (form.isValid()) {
      form.submit({
        url: "http://localhost:8080/addPost",
        enctype: "multipart/form-data",
      });

      Ext.getCmp("title").setValue(null);
      Ext.getCmp("sapo").setValue(null);
      Ext.getCmp("category_id").setValue(null);
      Ext.getCmp("description").setValue(null);
      Ext.getCmp("image-post").setValue(null);

      // Show notification result add category
      Ext.Msg.alert("Upload Post", "Check your post in Show All");
    }
  },
});
