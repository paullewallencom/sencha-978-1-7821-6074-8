Ext.define('TouchStart.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
    	'Ext.TitleBar',
        'TouchStart.view.HelloPanel',
        'TouchStart.view.ListPanel',
        'TouchStart.view.ImagePanel'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            { xtype: 'hellopanel' },
            { xtype: 'listpanel' },
            { xtype: 'imagepanel' }
        ]
    }
});
