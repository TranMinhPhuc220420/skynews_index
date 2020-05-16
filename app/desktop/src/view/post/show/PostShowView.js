Ext.define("SkyNewsIndex.view.post.formAdd.PostShowView", {
  extend: "Ext.Panel",
  alias: "widget.postshowview",
  title: "Show All Post",

  requires: [
    "SkyNewsIndex.view.post.show.PostShowViewModel",
    "SkyNewsIndex.view.post.show.PostShowViewController",
  ],
  viewModel: "postshowviewmodel",
  controller: "postshowviewcontroller",

  tbar: {
    items: [
      {
        text: "button",
        text: "Chính Trị",
      },
      {
        xtype: "button",
        text: "Kinh Tế",
      },
      {
        xtype: "button",
        text: "Thế Giới",
      },
      {
        xtype: "button",
        text: "Xã Hội",
      },
      {
        xtype: "button",
        text: "Y Tế",
      },
      // begin using the right-justified button container
      "->", // same as { xtype: 'tbfill' }
      {
        xtype: "textfield",
        name: "field1",
        label: "Search by title",
      },
    ],
  },

  items: [
    {
      xtype: "dataview",
      id: "dataview-post",
      bind: {
        store: "{postStore}",
      },

      itemTpl: `
      <div class="media my-md-5">
        <img class="mr-3" src="{image}" alt="image of {title}">
        <div class="media-body">
          <h3 class="mt-0">{title}</h3>
          <h5 class="mt-0">{categoryName}</h5>
          {sapo}
          <p class="date-up">{date_joined}</p>
        </div>
      </div>
      `,

      listeners: {
        itemTap: "onSelectPost",
      },
    },
  ],
});
