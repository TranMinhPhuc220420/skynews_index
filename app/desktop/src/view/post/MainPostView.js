Ext.define("SkyNewsIndex.view.category.MainPostView", {
  extend: "Ext.TabPanel",
  alias: "widget.mainpostview",
  // requires: ["SkyNewsIndex.view.category.PostViewModel"],

  // controller: "postviewcontroller",
  // viewModel: "postviewmodel",

  tabBarPosition: "right",

  items: [
    {
      title: "Show All",
      iconCls: "x-fa fa-digital-tachograph",
      scrollable: true,
      items: [
        {
          xtype: "postshowview",
        },
      ],
    },
    {
      title: "Add New Post",
      iconCls: "x-fa fa-plus",
      scrollable: true,

      items: [
        {
          xtype: "addpostview",
        },
      ],
    },
  ],
});
