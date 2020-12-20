Ext.define('TouchStart.model.ListItem', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'fullname', type: 'string' }
        ]
    }
});