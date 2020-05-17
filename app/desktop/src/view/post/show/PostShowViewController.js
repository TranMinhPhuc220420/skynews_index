Ext.define("SkyNewsIndex.view.post.show.PostShowViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.postshowviewcontroller",

  onSelectPost: function (view, index, record, data) {
    const postSelected = data.data;
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

          buttons: {
            cancel: function () {
              this.up("dialog").destroy();
            },
            submit: function () {
              var formEdit = Ext.getCmp("edit-form").getValues();
              this.up("dialog").destroy();
              console.log(formEdit);

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
                    // postSelected.category_id = formEdit.categoryName;
                    console.log("Update stored");

                    postSelected.description = formEdit.description;
                    gridPost.refresh();
                  }

                  // Show notification result add category
                  Ext.create({
                    xtype: "dialog",
                    html: notification,
                    buttons: {
                      ok: function () {
                        this.up("dialog").destroy();
                      },
                    },
                  }).show();
                },
              });
            },
          },

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
              src: postSelected.image,
              width: "100%",
              height: "100%",
            },
          ],
        },
      ],
    }).show();
  },

  onSelectCategory: function (view, index, record, data) {
    let category_id_select = data.id;
    const store = this.getView().getViewModel().getStore("postStore");
    store.getProxy().url = `http://localhost:8080/post/category/${category_id_select}/json`;
    console.log(category_id_select);
    store.load();
  },
});
