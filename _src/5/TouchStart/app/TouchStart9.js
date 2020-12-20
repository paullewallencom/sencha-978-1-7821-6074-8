Ext.application({
name: 'TouchStart',
launch: function() {

var myDudeList = Ext.create('Ext.Container', {
    fullscreen: true,
    layout: 'fit',
    items: [
    {
      xtype: 'list',
      itemTpl: '{last}, {first}',
      store: Ext.create('Ext.data.Store', {
        sorters: 'last',
		fields: [
			{name: 'first', type: 'string'},
			{name: 'last', type: 'string'}
		],
        data: [
            {first: 'Aaron', last: 'Karp'},
            {first: 'Baron', last: 'Chandler'},
            {first: 'Bryan', last: 'Johnson'},
            {first: 'David', last: 'Evans'},
            {first: 'John', last: 'Clark'},
            {first: 'Norbert', last: 'Taylor'},
            {first: 'Jane', last: 'West'}
        ]
      })
    }]
});
Ext.Viewport.add(myDudeList);
}
});
