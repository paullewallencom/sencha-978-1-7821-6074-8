Ext.define('TouchStart.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2',
                    items: [
                    	{ 
                    		text: 'Add Tab',
                    		action: 'addtab'
                    	}
                    ]
                }],

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Advanced',
                iconCls: 'action',
                layout: 'fit',
                items: [{
                    docked: 'top',
                    xtype: 'toolbar',
                    items: [
                        {
                            text: 'Add',
                            action: 'additem'
                        },
                        {
                            text: 'Edit',
                            action: 'edititem',
                            enableOnSelection: true,
                            disabled: true
                        },
                        {
                            text: 'Delete',
                            action: 'deleteitem',
                            enableOnSelection: true,
                            disabled: true
                        }
                    ]
                    }, { xtype: 'personlist'}
                ]
            }
        ]
    }
});
