Ext.define("ItunesApple.view.home.ViewHome", {
  alias: "widget.homeview",
  extend: "Ext.panel.Panel",
  scrollable: true,

  viewModel: {
    type: "homeviewmodel",
  },

  // ------------------------ TOOL BAR  ------------------------
  tbar: {
    items: [
      {
        xtype: "button",
        text: "All",
        value: "",
      },
      {
        xtype: "dataview",
        id: "tbar-show",
        layout: "hbox",

        bind: {
          store: "{categoryStore}",
        },

        itemTpl: `<button class="btn btn-default">{name}</button>`,
      },
      "->",
      {
        xtype: "textfield",
        label: "Search by title post",
      },
    ],
  },

  items: [
    {
      xtype: "dataview",
      cls: "dataview",
      bind: {
        store: "{postStore}",
      },
      itemTpl: `
      <div class="card my-md-5 shadow" style="width: 40rem;">
      <div class="inner">
        <img class="card-img-top" src="http://localhost:8080/view_photo/{image}" alt="Card image cap">
      </div>
      <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{sapo}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      `,
    },
  ],
});
