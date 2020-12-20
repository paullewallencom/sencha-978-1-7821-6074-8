Ext.define('TouchStart.store.ListItemStore', {
    extend: 'Ext.data.Store',
    alias: 'store.listitemstore',
    requires: [
        'TouchStart.model.ListItem'
    ],
    config: {
        model: 'TouchStart.model.ListItem',
        storeId: 'ListItemStore',
        data: [
			{id: 1, fullname: 'Aaron Karp'},
			{id: 2, fullname: 'Baron Chandler'},
			{id: 3, fullname: 'Bryan Johnson'},
			{id: 4, fullname: 'David Evans'},
			{id: 5, fullname: 'John Clark'},
			{id: 6, fullname: 'Norbert Taylor'},
			{id: 7, fullname: 'Jane West'}
		]
    }
});