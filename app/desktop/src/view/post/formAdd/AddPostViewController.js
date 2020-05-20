Ext.define("SkyNewsIndex.view.post.formAdd.AddPostViewController", {
  alias: "controller.addpostviewcontroller",
  extend: "Ext.app.ViewController",

  onPostNewPost: function (e) {
    var form = this.getView().down("formpanel");
    let formValues = form.getValues();
    let notification = null;

    // Check values in form
    if (formValues.title != null) {
      if (formValues.sapo != null) {
        if (formValues.description != null) {
          if (formValues.category_id != null) {
            if (Ext.getCmp("image-post").getFiles()[0] != undefined) {
              // Let do add post
              Ext.Ajax.request({
                method: "GET",
                url: "http://localhost:8080/post/get-url-add",
                cors: true,
                useDefaultXhrHeader: false,

                success: function (response) {
                  let url_submit = response.responseText;

                  if (form.isValid()) {
                    form.submit({
                      url: url_submit,
                      enctype: "multipart/form-data",
                      cors: true,
                      useDefaultXhrHeader: false,
                    });

                    Ext.getCmp("title").setValue(null);
                    Ext.getCmp("sapo").setValue(null);
                    Ext.getCmp("category_id").setValue(null);
                    Ext.getCmp("description").setValue(null);
                    Ext.getCmp("image-post").setValue(null);

                    // Show notification result add category
                    Ext.Msg.alert(
                      "Upload Post",
                      "Post add complete!\nCheck your post in Show All"
                    );
                  }
                },
              });

              // Notification
            } else {
              notification = "Fail because of none image post";
            }
          } else {
            notification = "Fail because of none category_id";
          }
        } else {
          notification = "Fail because of none description";
        }
      } else {
        notification = "Fail because of none sapo";
      }
    } else {
      notification = "Fail because of none title";
    }

    if (notification != null) {
      Ext.Msg.alert("Upload Post", notification);
    }
  },
});
