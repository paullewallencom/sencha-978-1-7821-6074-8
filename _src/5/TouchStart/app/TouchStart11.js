Ext.application({
name: 'TouchStart',
launch: function() {
var data = {
    text: 'Offices',
    items: [{
    text: 'Atlanta Office',
    items: [{
        text: 'Marketing',
        items: [{
            text: 'David Smith',
            leaf: true
            }, {
            text: 'Alex Wallace',
            leaf: true
            }]
          },{
        text: 'Sales',
        items: [{
            text: 'Jane West',
            leaf: true
            }, {
            text: 'Mike White',
            leaf: true
            }]
          }
        ]
    },{
    text: 'Athens Office',
    items: [{
        text: 'IT',
        items: [{
            text: 'Baron Chandler',
            leaf: true
            }, {
            text: 'Aaron Karp',
            leaf: true
            }]
          },{
        text: 'Executive',
        items: [{
            text: 'Bryan Johnson',
            leaf: true
            }, {
            text: 'John Clark',
            leaf: true
            }]
          }
        ]
    }]
};

var store = Ext.create('Ext.data.TreeStore', {
    root: data,
    fields: [{name: 'text', type: 'string'}],
    defaultRootProperty: 'items',
    autoLoad: true
});
var nestedList = Ext.create('Ext.dataview.NestedList', {
    fullscreen: true,
    title: 'Minions',
    displayField: 'text',
    store: store
});

}

});