Ext.application({
name: 'TouchStart',
launch: function() {

Ext.define('Contact', {
    extend: "Ext.data.Model",
    config: {
    fields: [
        {name: 'id', type:'int'},
        {name: 'name', type: 'string'},
        {name: 'email',  type: 'string'}
    ]
    }
});

var contactStore = Ext.create('Ext.data.Store', {
    model: 'Contact',
    proxy: {
        type: 'localstorage',
        id  : 'myContacts'
    },
    sorters: [
      {
        property : 'name',
        direction: 'ASC'
      }
    ],
    autoLoad: true
});

var addNewContact = Ext.create('Ext.Sheet', {
  height: 250,
  layout: 'fit',
  stretchX: true,
  enter: 'top',
  exit: 'top',
  items: [{
    xtype: 'formpanel',
    padding: 10,
    style: 'color: #FFFFFF',
    items: [
        {
            xtype: 'textfield',
            name : 'name',
            label: 'Name'
        },
        {
            xtype: 'emailfield',
            name : 'email',
            label: 'Email'
        }, {
    xtype: 'button',
    height: 20,
    text: 'Save',
    margin: 10,
    handler: function() {
      var form = this.up('formpanel');
      console.log(form.getValues());
      var record = Ext.create('Contact', form.getValues());
      contactStore.add(record);
      contactStore.sync();
      form.reset();
      this.up('sheet').hide();
    }
    }, {
    xtype: 'button',
    height: 20,
    margin: 10,
    text: 'Cancel',
    handler: function() {
      this.up('sheet').hide();
    }}
    ]
  }]
});

    // this time, rather than create the panel separately and then adding it to the viewport (as in TouchStart3.js)
    // we add it directly to the viewport as a configuration object with the appropriate xtype
    // it accomplishes the same thing either way
    Ext.Viewport.add({
    xtype: 'panel',
    fullscreen: true,
    layout: 'fit',
    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            text: 'Add',
            handler: function() {
                Ext.Viewport.add(addNewContact);
                addNewContact.show();
            }
        }]
    },
    {
      xtype: 'list',
      itemTpl: '{name}: {email}',
      store: contactStore
    }]
});

}
});
