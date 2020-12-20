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
				title: 'Hello',
				iconCls: 'home',
				xtype: 'panel',
				html: 'Hello World',
				items: [
					{
						xtype: 'titlebar',
						docked: 'top',
						title: 'About TouchStart',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Left',
                                align: 'left'
                            },
                            {
                                xtype: 'button',
                                text: 'Right',
                                align: 'right'
                            }
                        ]
					},
                    {
                        docked: 'top',
                        xtype: 'toolbar',
                        //ui: 'subnav',
                        items: [
                            {
                                text: 'Back',
                                ui: 'back'
                            }, {
                                text: 'Round',
                                ui: 'round'
                            }, {
                                text: 'Small',
                                ui: 'small'
                            }, {
                                text: 'Normal',
                                ui: 'normal'
                            }, {
                                text: 'Action',
                                ui: 'action'
                            }, { xtype: 'spacer'}, {
                                text: 'Forward',
                                ui: 'forward'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Confirm',
                        ui: 'confirm',
                        width: 100,
                        margin: 5
                    }, {
                        xtype: 'button',
                        text: 'Decline',
                        ui: 'decline',
                        width: 100,
                        margin: 5
                    }
				]
            },
            {
				title: 'Fit',
				iconCls: 'expand',
				xtype: 'panel',
				layout: 'fit',
				items: [
					{
					xtype: 'button',
					text: 'Very Fit'
					}
				]
            },
            {
				title: 'VBox',
				iconCls: 'info',
				xtype: 'panel',
				layout: 'vbox',
				items: [
				  {
					  xtype: 'container',
					  flex: 2,
					  html: '<div id="hello">Hello World Top</div>',
					  style: 'background:red',
					  border: 1
				  }, {
					  xtype: 'container',
					  flex: 1,
					  html: '<div id="hello">Hello World Bottom</div>',
					  style: 'background:yellow',
					  border: 1
				  }, {
					  xtype: 'container',
					  height: 50,
					  html: '<div id="footer">Footer</div>',
					  style: 'background:green'
				  }

				]
            },
            {
				title: 'HBox',
				iconCls: 'camera',
				xtype: 'panel',
				layout: 'hbox',
				items: [
				  {
					  xtype: 'container',
					  flex: 2,
					  html: '<div id="hello">Hello World Left</div>',
					  style: 'background:red',
					  border: 1
				  }, {
					  xtype: 'container',
					  flex: 1,
					  html: '<div id="hello">Hello World Middle</div>',
					  style: 'background:yellow',
					  border: 1
				  }, {
					  xtype: 'container',
					  width: 50,
					  html: '<div id="footer">Right</div>',
					  style: 'background:green'
				  }

				]
            }
        ]
    }
});
