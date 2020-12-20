Ext.application({
 name: 'TouchStart',
 launch: function() {
  var btn = Ext.create('Ext.Button', {
   xtype: 'button',
   centered: true,
   text: 'Click me'
  });

  var Mainpanel = Ext.create('Ext.Panel', {
   html: 'Panel HTML'
  });

  btn.on({
   tap: {
    scope: Mainpanel,
    fn: function() {
     console.log('This should show our main panel %o', this)
    }
   },
   painted: {
    fn: function() {
     console.log('This should show our button %o', this)
    }
   }
  });

  Ext.Viewport.add(btn);
  Ext.Viewport.add(Mainpanel);
 }
});

