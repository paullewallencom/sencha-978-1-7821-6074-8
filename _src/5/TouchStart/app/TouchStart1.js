Ext.application({
    name: 'TouchStart',
    launch: function() {

        var hboxTest =  Ext.create('Ext.Container', {
          layout: {
              type: 'hbox',
              align: 'stretch'
          },
          items: [{
            xtype: 'container',
            flex: 1,
            html: 'My flex is 1',
            margin: 5,
            style: 'background-color: #7FADCF'
          }, {
            xtype: 'container',
            flex: 2,
            html: 'My flex is 2',
            margin: 5,
            style: 'background-color: #7FADCF'
          }, {
            xtype: 'container',
            width: 80,
            html: 'My width is 80',
            margin: 5,
            style: 'background-color: #7FADCF'
          }]
        });

        var hboxTest2 =  Ext.create('Ext.Container', {
          layout: {
              type: 'hbox',
              align: 'stretch'
          },
          flex: 2,
          style: 'background-color: #FFFFFF',
          items: [{
            xtype: 'container',
            flex: 1,
            html: 'My flex is 1',
            margin: 5,
            style: 'background-color: #7FADCF'
          }, {
            xtype: 'container',
            flex: 2,
            html: 'My flex is 2',
            margin: 5,
            style: 'background-color: #7FADCF'
          }, {
            xtype: 'container',
            width: 80,
            html: 'My width is 80',
            margin: 5,
            style: 'background-color: #7FADCF'
          }]
        });

        var vboxTest =  Ext.create('Ext.Container', {
          layout: {
              type: 'vbox',
              align: 'stretch'
          },
          items: [{
            xtype: 'container',
            flex: 1,
            html: 'My flex is 1',
            margin: 5,
            style: 'background-color: #7FADCF'
          }, {
            xtype: 'container',
            flex: 2,
            html: 'My flex is 2',
            margin: 5,
            style: 'background-color: #7FADCF'
          }, {
            xtype: 'container',
            height: 80,
            html: 'My height is 80',
            margin: 5,
            style: 'background-color: #7FADCF'
          }]
        });

        var complexTest =  Ext.create('Ext.Container', {
          layout: {
              type: 'vbox',
              align: 'stretch'
          },
          style: 'background-color: #FFFFFF',
          items: [{
            xtype: 'container',
            flex: 1,
            html: 'My flex is 1',
            margin: 5,
            style: 'background-color: #7FADCF'
          },
          hboxTest2, {
            xtype: 'container',
            height: 80,
            html: 'My height is 80',
            margin: 5,
            style: 'background-color: #7FADCF'
          }]
        });

        var fitTest =  Ext.create('Ext.Container', {
          layout: 'fit',
          items: [{
            xtype: 'button',
            ui: 'decline',
            text: 'Do Not Press'
          }]
        });
        
        var mainPanel = Ext.create('Ext.Container', {
            fullscreen: true,
            layout: 'card',
            activeItem: 0,
            items: [{
				xtype: 'toolbar',
				docked: 'top',
				defaults: {
                	xtype: 'button'
            	},
				items: [{
					text: 'hbox',
					handler: function() {
					  mainPanel.setActiveItem(0);
					}},{
					text: 'vbox',
					handler: function() {
					  mainPanel.setActiveItem(1);
					}
				},{
					text: 'fit',
					handler: function() {
					  mainPanel.setActiveItem(2);
					}
				},{
					text: 'complex',
					handler: function() {
					  mainPanel.setActiveItem(3);
					}
				}]
            },
				hboxTest, 
				vboxTest, 
				fitTest, 
				complexTest
			]
        });

        Ext.Viewport.add(mainPanel);
    }
});

