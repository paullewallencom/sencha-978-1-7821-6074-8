Ext.application({
    name: 'TouchStart',
    launch: function() {
        var mailLayout =  Ext.create('Ext.Container', {
          layout: {
              type: 'hbox',
              align: 'stretch'
          },
          style: 'border: 1px solid red;',
          margin: 5,
          items: [{
            xtype: 'container',
            width: 220,
            margin: 5,
            layout: {
              type: 'vbox',
              align: 'stretch'
            },
            style: 'border: 1px solid green;',
            items: [{
              xtype: 'container',
              flex: 1,
              html: 'Mailbox List',
              margin: 5,
              style: 'border: 1px solid blue;'
            },{
              xtype: 'container',
              height: 120,
              html: 'Activity Panel',
              margin: 5,
              style: 'border: 1px solid blue;'
            }]
          },{
            xtype: 'container',
            flex: 1,
            margin: 5,
            layout: {
              type: 'vbox',
              align: 'stretch'
            },
            style: 'border: 1px solid green;',
            items: [{
              xtype: 'container',
              flex: 1,
              html: 'Mail List',
              margin: 5,
              style: 'border: 1px solid blue;'
            },{
              xtype: 'container',
              flex: 1,
              html: 'Mail Details',
              margin: 5,
              style: 'border: 1px solid blue;'
            }]
          }]
        });

        var mainPanel = new Ext.Panel({
            fullscreen: true,
            layout: 'fit',
			items: [
				{
					xtype: 'toolbar',
					docked: 'top',
					title: 'I am the toolbar'
				}, 
				mailLayout
            ]
        });
		
		Ext.Viewport.add(mainPanel);
    }
});

