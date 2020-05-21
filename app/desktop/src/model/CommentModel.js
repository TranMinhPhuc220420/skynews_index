Ext.define("SkyNewsIndex.model.CommentModel", {
  extend: "Ext.data.Model",
  alias: "model.commnetmodel",

  requires: ["Ext.data.proxy.Rest"],
  fields: [
    {
      name: "comment_id",
      type: "integer",
      mapping: "comment_id",
    },
    {
      name: "content",
      mapping: "content",
      type: "string",
    },
    {
      name: "username",
      mapping: "username",
      type: "string",
    },
  ],

  proxy: {
    type: "rest",
    url: "http://localhost:8080/comment/get/5493160092368896/json",
    reader: {
      type: "json",
    },
    cors: true,
    useDefaultXhrHeader: false,
  },
});
