Ext.application({
name: 'TouchStart',
launch: function() {

var main = Ext.create('Ext.Panel', {
    fullscreen: true,
    layout: 'fit',
    items: [{
    xtype: 'formpanel',
    padding: 10,
    id: 'contactForm',
    style: 'color: #FFFFFF',
    items: [
        {
            xtype: 'urlfield',
            name : 'url',
            label: 'URL Field'
        },
        {
            xtype: 'emailfield',
            name : 'email',
            label: 'Email Field'
        },
        {
            xtype: 'numberfield',
            name : 'number',
            label: 'Number Field'
        }
    ]
  }]
});

    Ext.Viewport.add(main);
}
});
