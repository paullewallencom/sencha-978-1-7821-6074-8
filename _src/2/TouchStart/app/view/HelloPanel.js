Ext.define('TouchStart.view.HelloPanel', {
 extend: 'Ext.Container',
 xtype: 'hellopanel',
 config: {
  title: 'Panel 1',
  fullscreen: false,
  html: '<div id="hello">Hello World</div>',
  iconCls: 'info',
  items: [
   {
    docked: 'top',
    xtype: 'titlebar',
    title: 'About TouchStart'
   }
  ]
 }
});