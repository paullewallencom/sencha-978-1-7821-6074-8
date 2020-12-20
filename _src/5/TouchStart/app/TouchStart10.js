Ext.application({
name: 'TouchStart',
launch: function() {


var myDudeList = Ext.create('Ext.Panel', {
    fullscreen: true,
    layout: 'fit',
    items: [
    {
      xtype: 'list',
      grouped: true,
      indexBar: true,
      itemTpl: '{last}, {first}',
      store: Ext.create('Ext.data.Store', {
		fields: [
        	{name: 'first', type: 'string'},
        	{name: 'last', type: 'string'}
   		],
   		grouper: {	
			groupFn : function(record) {
			  return record.get('last').substr(0, 1);
			},
			sortProperty: 'last'
        },
        data: [
            {first: 'Aaron', last: 'Karp'},
            {first: 'Baron', last: 'Chandler'},
            {first: 'Bryan', last: 'Johnson'},
            {first: 'David', last: 'Evans'},
            {first: 'John', last: 'Clark'},
            {first: 'Norbert', last: 'Taylor'}

        ]
      })
    }]
});
Ext.Viewport.add(myDudeList);
}
});
