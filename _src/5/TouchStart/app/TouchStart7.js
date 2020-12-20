Ext.application({
    name: 'TouchStart',
    launch: function() {

        var main = Ext.create('Ext.Container', {
            fullscreen: true,
            items: [{
            docked : 'top',
            xtype: 'toolbar',
            ui   : 'light',
            items: [
                {
                    text: 'Panic',
                    handler: function() {
                      Ext.Msg.alert('Don\'t Panic!', 'Keep Calm. Carry On.');
                    }
                },
                {
                    text: 'Greetings',
                    handler: function() {
                      Ext.Msg.prompt('Greetings!', 'What is your name?', function(btn, text) {
                          Ext.Msg.alert('Howdy', 'Pleased to meet you '+text);
                      });
                    }
                },
                {
                    text: 'Decide',
                    handler: function() {
                      Ext.Msg.confirm('It\'s Your Choice...', 'Would you like to proceed?', function(btn) {
                          Ext.Msg.alert('So be it!', 'You chose '+btn);
                      });
                    }
                },
                {
                  text: 'Sheet',
                  handler: function() {
                    var mySheet = Ext.create('Ext.Sheet', {
                      height: 250,
                      layout: 'vbox',
                      stretchX: true,
                      enter: 'top',
                      exit: 'top',
                      items: [{
                        xtype: 'container',
                        layout: 'fit',
                        flex: 1,
                        padding: 10,
                        style: 'color: #FFFFFF',
                        html: 'A sheet is also a panel. It can do anything the panel does.'
                      }, {
                        xtype: 'button',
                        height: 20,
                        text: 'Close Me',
                        handler: function() {
                          this.up('sheet').hide();
                        }
                      }],
                      listeners: {
                        hide: {
                          fn: function(){ this.destroy(); }
                        }
                      }
                    });
        			Ext.Viewport.add(mySheet);
                    mySheet.show();
                  }
                },
                {
                  text: 'ActionSheet',
                  handler: function() {
                    var actionSheet = Ext.create('Ext.ActionSheet', {
                      items: [
                          {
                              text: 'Delete',
                              ui  : 'decline'
                          },
                          {
                              text: 'Save',
                              ui  : 'confirm'
                          },
                          {
                              text: 'Cancel',
                              handler: function() {
                                this.up('actionsheet').hide();
                              }
                          }
                      ],
                      listeners: {
                        hide: {
                          fn: function(){ this.destroy(); }
                        }
                      }
                  });
        		Ext.Viewport.add(actionSheet);
                  actionSheet.show();
                  }
              }
            ]
          }]
        });
        
        Ext.Viewport.add(main);
    }
});

