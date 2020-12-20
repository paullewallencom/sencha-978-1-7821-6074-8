Ext.application({
    name: 'TouchStart',
    launch: function() {
        var map = Ext.create('Ext.Container', {
        fullscreen: true,
        layout: 'fit',
        items: [
            {
                xtype: 'map',
                useCurrentLocation: true
            }
        ]
        });
        Ext.Viewport.add(map);
    }
});

