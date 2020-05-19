Ext.define("SkyNewsIndex.view.post.show.PostShowViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.postshowviewcontroller",

  onSelectPost: function (view, index, record, data) {
    const postSelected = data.data;
    const store = this.getView().getViewModel().getStore("postStore");
    var gridPost = Ext.getCmp("dataview-post");

    Ext.create({
      xtype: "dialog",
      title: "Detail: " + postSelected.title,
      height: "80%",
      width: "80%",

      record: record,
      viewModel: {
        data: {
          employee: record,
        },
      },

      items: [
        {
          xtype: "formpanel",
          id: "edit-form",
          fullscreen: true,

          items: [
            {
              xtype: "textfield",
              label: "Title",
              name: "title",
              id: "title-post",
              value: postSelected.title,
            },

            {
              xtype: "comboboxfield",

              store: {
                type: "categorystore",
              },

              label: "Category: " + postSelected.categoryName,
              name: "category_id",
              id: "category-id-show",
              queryMode: "local",
              displayField: "name",
              valueField: "id",
            },

            {
              xtype: "textfield",
              label: "sapo",
              id: "sapo-show",
              name: "sapo",
              value: postSelected.sapo,
            },
            {
              xtype: "textareafield",
              height: 300,
              label: "Description",
              name: "description",
              id: "description-show",
              value: postSelected.description,
            },
            {
              xtype: "img",
              src: `http://localhost:8080/image/post/${postSelected.image}`,
              width: "100%",
              height: "100%",
            },
            {
              xtype: "container",
              defaultType: "button",
              cls: "gr-btn-dialog",
              layout: "hbox",

              items: [
                {
                  text: "Delete",
                  cls: "btn-dialog btn-danger",

                  handler: function () {
                    this.up("dialog").destroy();
                    Ext.create({
                      xtype: "dialog",
                      title: "Delete Post",
                      html: "Are you sure you want to delete this post?",

                      buttons: {
                        ok: function () {
                          this.up("dialog").destroy();
                          let idPostDelete = postSelected.id;

                          Ext.Ajax.request({
                            method: "POST",
                            url: "http://localhost:8080/deletePost",
                            params: {
                              post_id: idPostDelete,
                            },
                            cors: true,
                            useDefaultXhrHeader: false,

                            // Notification
                            success: function (response) {
                              let notification = response.responseText;
                              if (notification == "Complete") {
                                store.removeAt(
                                  store.find("id", postSelected.id)
                                );
                                gridPost.refresh();
                              }

                              // Show notification result delete post
                              Ext.Msg.alert("Notification", notification);
                            },
                          });
                        },
                        cancel: function () {
                          this.up("dialog").destroy();
                        },
                      },
                    }).show();
                  },
                },
                {
                  text: "Save",
                  cls: "btn-dialog btn-success",
                  handler: function () {
                    var formEdit = Ext.getCmp("edit-form").getValues();
                    this.up("dialog").destroy();

                    // set category_id
                    if (formEdit.category_id == null) {
                      formEdit.category_id = postSelected.category_id;
                    }
                    Ext.Ajax.request({
                      method: "POST",
                      url: "http://localhost:8080/editPost",
                      params: {
                        id: postSelected.id,
                        title: formEdit.title,
                        category_id: formEdit.category_id,
                        sapo: formEdit.sapo,
                        description: formEdit.description,
                      },
                      cors: true,
                      useDefaultXhrHeader: false,

                      success: function (response) {
                        let notification = response.responseText;

                        if (notification === "Complete") {
                          postSelected.title = formEdit.title;
                          postSelected.sapo = formEdit.sapo;
                          postSelected.category_id = formEdit.category_id;
                          postSelected.description = formEdit.description;
                          gridPost.refresh();
                        }

                        // Show notification result edit post
                        Ext.Msg.alert("Notification", notification);
                      },
                    });
                  },
                },
                {
                  text: "Cancel",
                  handler: function () {
                    this.up("dialog").destroy();
                  },
                },
              ],
            },
          ],
        },
      ],
    }).show();
  },

  onSelectCategory: function (view, index, record, data) {
    const store = this.getView().getViewModel().getStore("postStore");
    let url = "";

    if (view._value === "") {
      url = `http://localhost:8080/post/json`;
    } else {
      let category_id_select = data.id;
      url = `http://localhost:8080/post/category/${category_id_select}/json`;
    }

    store.getProxy().url = url;
    store.load();
  },

  searchPostByTitle: function (view, index, record, data) {},
});
