Ext.define("SkyNewsIndex.store.PostStore", {
  extend: "Ext.data.Store",
  alias: "store.poststore",
  requires: ["SkyNewsIndex.model.PostModel"],

  constructor: function (cfg) {
    var me = this;
    cfg = cfg || {};
    me.callParent(
      [
        Ext.apply({
          autoLoad: true,
          model: "SkyNewsIndex.model.PostModel",
        }),
      ],
      cfg
    );
  },
});
