Ext.define("SkyNewsIndex.model.PostModel", {
  extend: "Ext.data.Model",
  alias: "model.postmodel",
  requires: ["Ext.data.proxy.Rest"],
  fields: [
    {
      name: "id",
      type: "integer",
      mapping: "id",
    },

    {
      name: "title",
      mapping: "title",
      type: "string",
    },

    {
      name: "sapo",
      mapping: "sapo",
      type: "string",
    },
    {
      name: "date_joined",
      mapping: "date_joined",
      type: "string",
    },

    {
      name: "description",
      mapping: "description",
      type: "string",
    },

    {
      name: "image",
      mapping: "image",
      type: "string",
    },

    {
      name: "categoryName",
      mapping: "category.label",
      type: "string",
    },

    {
      name: "category_id",
      mapping: "category.id",
      type: "string",
    },
  ],

  proxy: {
    type: "rest",
    url: "http://localhost:8080/post/json",
    reader: {
      type: "json",
    },
    cors: true,
    useDefaultXhrHeader: false,
  },
});
