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
						title: 'About TouchStart'
					},
					{
						xtype: 'toolbar',
						docked: 'top',
						items: [
							{
								xtype: 'button',
								text: 'My Button'
							}
						]
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
					  style: 'background:green',
				  }

				]
            },
            {
				title: 'HBox',
				iconCls: 'info',
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
					  style: 'background:green',
				  }

				]
            }
        ]
    }
});
