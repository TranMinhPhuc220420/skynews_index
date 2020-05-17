Ext.define("SkyNewsIndex.view.post.formAdd.AddPostViewModel", {
  alias: "widget.addpostview",
  extend: "Ext.panel.Panel",
  title: "Add Post",
  scrollable: true,

  requires: [
    "Ext.form.Panel",
    "Ext.form.FieldSet",
    "Ext.field.Url",
    "Ext.field.Select",
    "Ext.field.Hidden",
  ],

  viewModel: "categoryviewmodel",

  items: [
    {
      xtype: "formpanel",
      items: [
        {
          xtype: "textfield",
          label: "Title",
          name: "title",
          id: "title",
        },

        {
          xtype: "comboboxfield",

          bind: {
            store: "{categoryStore}",
          },

          label: "Category",
          name: "category_id",
          id: "category_id",
          queryMode: "local",
          displayField: "name",
          valueField: "id",
        },

        {
          xtype: "textfield",
          label: "sapo",
          id: "sapo",
          name: "sapo",
        },
        {
          xtype: "textareafield",
          height: 300,
          label: "Description",
          name: "description",
          id: "description",
        },
      ],

      buttons: [
        {
          text: "Add New Post",
          cls: "btn-primary",
          handler: function (e) {
            var form = this.up("formpanel").getValues();

            // Ajax execute the add new post
            Ext.Ajax.request({
              method: "POST",
              url: "http://localhost:8080/addPost",
              params: {
                title: form.title,
                category_id: form.category_id,
                sapo: form.sapo,
                description: form.description,
              },
              cors: true,
              useDefaultXhrHeader: false,

              success: function (response) {
                let notification = response.responseText;

                Ext.getCmp("title").setValue(null);
                Ext.getCmp("sapo").setValue(null);
                Ext.getCmp("category_id").setValue(null);
                Ext.getCmp("description").setValue(null);

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
      ],
    },
    {},
  ],
});
