Ext.define("SkyNewsIndex.model.CategoryModel", {
  extend: "Ext.data.Model",
  alias: "model.categorymodel",

  requires: ["Ext.data.proxy.Rest"],
  fields: [
    {
      name: "id",
      type: "integer",
      mapping: "id",
    },

    {
      name: "name",
      mapping: "name",
      type: "string",
    },
  ],

  proxy: {
    type: "rest",
    url: "http://localhost:8080/category/json",
    reader: {
      type: "json",
    },
    cors: true,
    useDefaultXhrHeader: false,
  },
});
