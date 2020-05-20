Ext.define("SkyNewsIndex.view.post.formAdd.PostShowView", {
  extend: "Ext.Panel",
  alias: "widget.postshowview",
  title: "Show All Post",

  requires: [
    "SkyNewsIndex.view.post.show.PostShowViewModel",
    "SkyNewsIndex.view.post.show.PostShowViewModel",
    "SkyNewsIndex.view.post.show.PostShowViewController",
  ],

  // viewModel
  viewModel: {
    type: "postshowviewmodel",
  },

  // controller
  controller: "postshowviewcontroller",

  // ------------------------ TOOL BAR  ------------------------
  tbar: {
    items: [
      {
        xtype: "button",
        text: "All",
        value: "",
        handler: "onSelectCategory",
      },
      {
        xtype: "dataview",
        id: "tbar-show",
        layout: "hbox",
        viewModel: {
          type: "categoryviewmodel",
        },
        bind: {
          store: "{categoryStore}",
        },
        itemTpl: `<button class="btn btn-default">{name}</button>`,

        // add event select category
        listeners: {
          itemTap: "onSelectCategory",
        },
      },
      '->',
      {
        xtype: "textfield",
        label: "Search by title post",
        listeners: { 
          change: "searchPostByTitle"
        }
      },
    ],
  },

  // ------------------------ ITEMS  ------------------------
  items: [
    {
      xtype: "dataview",
      id: "dataview-post",
      bind: {
        store: "{postStore}",
      },

      itemTpl: `
      <div class="media my-md-5">
        <img class="mr-3" src="http://localhost:8080/view_photo/{image}" alt="image of {title}">
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
