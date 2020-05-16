Ext.define("SkyNewsIndex.view.category.CategoryView", {
  extend: "Ext.Panel",
  alias: "widget.categoryview",
  title: "Category",

  requires: ["SkyNewsIndex.view.category.CategoryViewModel"],

  controller: "categoryviewcontroller",
  viewModel: "categoryviewmodel",

  tbar: [
    {
      text: "Add New",
      iconCls: "x-fa fa-plus",
      handler: "onClickAddCategory",
    },
  ],

  items: [
    {
      xtype: "grid",
      id: "grid",
      height: "100%",
      scrollable: true,

      bind: {
        store: "{categoryStore}",
      },

      columns: [
        {
          text: "ID",
          flex: 0.4,
          dataIndex: "id",
        },
        {
          text: "Name Category",
          flex: 1,
          dataIndex: "name",
        },
      ],

      listeners: {
        itemTap: "onSelectCategory",
      },
    },
  ],
});
