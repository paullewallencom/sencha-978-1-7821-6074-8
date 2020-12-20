Ext.application({
    name: 'TouchStart',
    launch: function() {

        var myTabPanel = Ext.create('Ext.tab.Panel', {
            fullscreen: true,
    		tabBarPosition: 'bottom',
            items: [{
              xtype: 'container',
              title: 'Item 1',
              fullscreen: false,
              html: 'TouchStart container 1',
              iconCls: 'info'
            }, {
              xtype: 'container',
              html: 'TouchStart container 2',
              iconCls: 'home',
              title: 'Item 2'
            }, {
              xtype: 'container',
              html: 'TouchStart container 3',
              iconCls: 'favorites',
              title: 'Item 3'
            }]
        });
        Ext.Viewport.add(myTabPanel);
    }
    
});
