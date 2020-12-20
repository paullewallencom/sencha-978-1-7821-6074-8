Ext.define('TouchStart.view.ListPanel', {
    extend: 'Ext.dataview.List',
    xtype: 'listpanel',
    requires: [
        'TouchStart.store.ListItemStore'
    ],
    config: {
		title: 'List',
		fullscreen: false,
		store: 'ListItemStore',
		iconCls: 'bookmarks',
		itemTpl: '{id} - {fullname}'
    }
});
