Ext.application({
    name: 'TouchStart',
    launch: function() {
        var eventPanel = Ext.create('Ext.Panel', {
            fullscreen: true,
            layout: 'auto',
            items: [{
                xtype: 'container',
                width: 40,
                height: 40,
                id: 'tapTarget',
                style: 'background-color: #800000;'
            }],
            listeners: {
                singletap: {
                    element: 'element',
                    fn: function(event, div, listener) {
                        console.log(event);
                        var cmp = Ext.getCmp('tapTarget');
                        cmp.setWidth(event.pageX);
                        cmp.setHeight(event.pageY);
                        console.log(event.pageX, event.pageY);

                    }
                }
            }
        });

        Ext.Viewport.add(eventPanel);
    }
});
