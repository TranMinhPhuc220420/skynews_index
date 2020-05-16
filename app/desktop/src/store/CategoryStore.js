Ext.define("SkyNewsIndex.store.CategoryStore", {
  extend: "Ext.data.Store",
  alias: "store.categorystore",
  requires: ["SkyNewsIndex.model.CategoryModel"],

  constructor: function (cfg) {
    var me = this;
    cfg = cfg || {};
    me.callParent(
      [
        Ext.apply({
          autoLoad: true,
          model: "SkyNewsIndex.model.CategoryModel",
        }),
      ],
      cfg
    );
  },
});
