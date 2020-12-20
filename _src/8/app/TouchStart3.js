Ext.application({
    name: 'TouchStart',
    launch: function() {

        Ext.define('Contact', {
            extend: 'Ext.data.Model',
            config: {
                fields: [
                    {name: 'first', type: 'string'},
                    {name: 'last', type: 'string'},
                    {name: 'address', type: 'string'},
                    {name: 'city', type: 'string'},
                    {name: 'state', type: 'string'},
                    {name: 'zip', type: 'int'},
                    {name: 'email', type: 'string'},
                    {name: 'birthday', type: 'date'}
                ]
            }
        });

        var contactStore = Ext.create('Ext.data.Store', {
            model: 'Contact',
            proxy: {
                type: 'ajax',
                url  : 'api/contacts.json',
                reader: {
                    type: 'json',
                    rootProperty: 'children'
                }
            },
            autoLoad: true
        });

var myTemplate2 = new Ext.XTemplate(
  '<div style="padding:10px;"><b>{first} {last}</b><br>',
  '<tpl if="this.hasData(address)">',
  '{address}<br>',
  '{city}, {state} {zip}<br>',
  '</tpl>',
  '<a href="mailto:{email}">{email}</a><br>',
  'Birthday: {birthday:date("n/j/Y")}</div>',
  {
    hasData: function(data){
      if(!Ext.isEmpty(data)) {
        return true;
      }
    }
  }
);

var myTemplate = new Ext.XTemplate(
  '<div style="padding:10px;"><b>{first} {last}</b><br>',
  '{address}<br>',
  '{city}, {state} {zip}<br>',
  '<a href="mailto:{email}">{email}</a><br>',
  'Birthday: {birthday:date("n/j/Y")}</div>'
);

var listTemplate = new Ext.XTemplate(
    '<div class="contact-wrap" id="{first}-{last}">',
    '<div class="thumb" style= "float: left;"><img src="http://placekitten.com/36/36" title="{first}"></div>',
    '<span class="x-editable">{first} {last}</span></div>'
);

        var detailsPanel = Ext.create('Ext.Panel', {
            xtype: 'detailsPanel',
            tpl: myTemplate, // this can be swapped out with myTemplate2
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'Back',
                    ui: 'back',
                    handler: function() {
                        main.setActiveItem(0);
                    }
                }]
            }]
        });

        var main = Ext.create('Ext.Panel', {
            xtype: 'mainPanel',
            fullscreen: true,
            layout: 'card',
            activeItem: 0,
            items: [
                {
                    xtype: 'list',
                    itemTpl: listTemplate,
                    store: contactStore,
                    listeners: {
                        itemtap: {
                            fn: function(list,index){
                                var rec = list.getStore().getAt(index);
                                detailsPanel.setRecord(rec);
                                main.setActiveItem(1);
                            }
                        }
                    }
                }, detailsPanel
            ]
        });

        Ext.Viewport.add(main);

}
});
