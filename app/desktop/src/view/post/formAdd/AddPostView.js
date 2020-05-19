Ext.define("SkyNewsIndex.view.post.formAdd.AddPostView", {
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
    "SkyNewsIndex.view.post.formAdd.AddPostViewController",
  ],

  controller: "addpostviewcontroller",
  viewModel: "categoryviewmodel",

  items: [
    {
      xtype: "formpanel",
      cors: true,
      useDefaultXhrHeader: false,

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

        {
          xtype: "filefield",
          name: "image",
          id: "image-post",
          label: "Image post",
        },

        {
          xtype: "button",
          text: "Add New Post",
          cls: "btn-primary btn-submit",
          handler: "onPostNewPost",
        },
        {
          xtype: "img",
          id: "image-review",
          src: "",
        },
      ],
    },
  ],
});
