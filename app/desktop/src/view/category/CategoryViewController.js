Ext.define("SkyNewsIndex.view.category.CategoryViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.categoryviewcontroller",

  onClickAddCategory: function (view, index, target, data) {
    const store = this.getView().getViewModel().getStore("categoryStore");
    Ext.create({
      xtype: "dialog",
      with: 1000,
      height: 250,
      title: "Add New Category",

      items: [
        {
          xtype: "formpanel",
          fullscreen: true,
          id: "add-form",
          buttons: {
            cancel: function () {
              this.up("dialog").destroy();
            },

            submit: function () {
              var nameCategoryAdd = Ext.getCmp("add-form").getValues().name;
              this.up("dialog").destroy();

              Ext.Ajax.request({
                method: "POST",
                url: "http://localhost:8080/addCategory",
                params: {
                  name: nameCategoryAdd,
                },
                cors: true,
                useDefaultXhrHeader: false,

                success: function (response) {
                  let notification = response.responseText;

                  // Add new category to store
                  if (notification !== "Fail") {
                    store.add({
                      id: parseInt(response.responseText),
                      name: nameCategoryAdd,
                    });
                    notification = "Complete";
                  }

                  // Show notification result add category
                  Ext.Msg.alert("Notification", notification);
                },
              });
            },
          },

          items: [
            {
              xtype: "textfield",
              label: "Category",
              name: "name",
              required: true,
            },
          ],
        },
      ],
    }).show();
  },

  onSelectCategory: function (view, index, record, data) {
    const store = this.getView().getViewModel().getStore("categoryStore");
    categorySelected = data.data;
    var gridCategory = Ext.getCmp("grid");

    Ext.create({
      xtype: "dialog",
      id: "dialog-main",
      with: 1000,
      height: 290,
      items: [
        {
          xtype: "formpanel",
          title: "To Do something",
          id: "edit-form",

          record: record,
          viewModel: {
            data: {
              employee: record,
            },
          },

          buttons: {
            cancel: function () {
              this.up("dialog").destroy();
            },
            save: function () {
              var nameCategoryEdit = Ext.getCmp("edit-form").getValues().name;
              this.up("dialog").destroy();

              Ext.Ajax.request({
                method: "POST",
                url: "http://localhost:8080/editCategory",
                params: {
                  id: categorySelected.id,
                  name: nameCategoryEdit,
                },
                cors: true,
                useDefaultXhrHeader: false,

                success: function (response) {
                  let notification = response.responseText;

                  if (notification !== "Edit Fail") {
                    categorySelected.name = nameCategoryEdit;
                    gridCategory.refresh();
                  }

                  // Show notification result add category
                  Ext.Msg.alert("Notification", notification);
                },
              });
            },
          },

          items: [
            {
              xtype: "textfield",
              label: "Category: " + categorySelected.name,
              name: "name",
              required: true,
            },
          ],
        },
        {
          xtype: "button",
          text: "Delete",
          cls: "btn btn-danger",

          // Delete category selected
          handler: function () {
            Ext.create({
              xtype: "dialog",
              title: "Delete",
              html: "Are you sure you want to delete",
              buttons: {
                // Sub delete category
                ok: function () {
                  this.up("dialog").destroy();
                  
                  Ext.Ajax.request({
                    method: "POST",
                    url: "http://localhost:8080/deleteCategory",
                    params: {
                      id: categorySelected.id,
                    },
                    cors: true,
                    useDefaultXhrHeader: false,

                    success: function (response) {
                      Ext.getCmp("dialog-main").destroy();
                      let notification = response.responseText;

                      // Check and remove item category in store
                      if (notification === "Delete complete") {
                        store.removeAt(store.find("id", categorySelected.id));
                        gridCategory.refresh();
                      }

                      // Show notification result add category
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
      ],
    }).show();
  },
});
