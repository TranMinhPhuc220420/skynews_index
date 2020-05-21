Ext.define("SkyNewsIndex.view.post.detail.DetailPostView", {
  alias: "widget.detailpostview",
  extend: "Ext.dataview.DataView",
  id: "view-post-detail",
  title: "Post Detail",
  scrollable: true,
  cls: "content-post-detail",
  controller: "postdetailviewcontroller",
  viewModel: "postdetailviewmodel",

  requires: ["SkyNewsIndex.store.CommentStore"],

  itemTpl: `
  <img class="post-image" src="http://localhost:8080/view_photo/{image}">
  
  <div class="post-body">
    <h2 class="title">{title}</h2>
    <p class="sapo">{sapo}</p>
    <p class="description">{description}<p>
  </div>
  `,

  items: [
    {
      bind: {
        store: "{commentStore}",
      },
      xtype: "dataview",
      cls: "list-comment",
      itemTpl: `
      <div class="media">
        <div class="media-body">
          <h6 class="username">{username}</h6>
          <p class="content">{content}</p>
        </div>
      </div>
      `
    },
    {
      xtype: "formpanel",
      layout: "hbox",
      items: [
        {
          xtype: "textfield",
          name: "content",
          label: "Your comment",
          flex: 1,
        },
        {
          xtype: "textfield",
          name: "username",
          label: "Your name",
          flex: 0.7,
        },
        {
          xtype: "button",
          cls: "btn btn-primary btn-submit",
          text: "Post Comment",
          handler: "onPostComment",
          flex: 0.5,
        },
      ],
    },
  ],
});
