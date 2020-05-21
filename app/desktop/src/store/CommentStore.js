Ext.define("SkyNewsIndex.store.CommentStore", {
  extend: "Ext.data.Store",
  alias: "store.commentstore",
  requires: ["SkyNewsIndex.model.CommentModel"],

  constructor: function (cfg) {
    var me = this;
    cfg = cfg || {};
    me.callParent(
      [
        Ext.apply({
          autoLoad: true,
          model: "SkyNewsIndex.model.CommentModel",
        }),
      ],
      cfg
    );
  },
});
