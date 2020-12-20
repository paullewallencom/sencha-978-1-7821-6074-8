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
    ],
    proxy: {
        type: 'localstorage',
        id  : 'myContacts',
        reader: {
          type: 'json'
        }
    }
    }
});

var contactStore = Ext.create('Ext.data.Store', {
    model: 'Contact',
    proxy: {
        type: 'localstorage',
        id  : 'myContacts'
    },
    autoLoad: true
});

var updateContact = function() {
  var form = this.up('formpanel');
  var rec = form.getRecord();
  var values = form.getValues();
  rec.set(values);
  contactStore.sync();
  form.reset();
  this.up('sheet').hide();
};

var addContact = function() {
  var form = this.up('formpanel');
  var record = Ext.create('Contact', form.getValues());
  contactStore.add(record);
  contactStore.sync();
  form.reset();
  this.up('sheet').hide();
};
var addNewContact = Ext.create('Ext.Sheet', {
  height: 250,
  layout: 'fit',
  stretchX: true,
  enter: 'top',
  exit: 'top',
  items: [{
    xtype: 'formpanel',
    padding: 10,
    id: 'contactForm',
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
    id: 'saveButton',
    height: 20,
    text: 'Save',
    margin: 10,
    handler: updateContact
    }, {
    xtype: 'button',
    height: 20,
    margin: 10,
    text: 'Cancel',
    handler: function() {
        var form = this.up('formpanel');
        form.reset();
      this.up('sheet').hide();
    }}
    ]
  }]
});

Ext.Viewport.add({
    fullscreen: true,
    layout: 'fit',
    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            text: 'Add',
            handler: function() {
                var button = Ext.getCmp('saveButton');
                button.setHandler(addContact);
                button.setText('Add');
                Ext.Viewport.add(addNewContact);
                addNewContact.show();
            }
        }]
    },
    {
      xtype: 'list',
      itemTpl: '{name}: {email}',
      store: contactStore,
      listeners: {
        itemsingletap: {
          fn: function(list,index){
            console.log(Ext.getCmp('contactForm'));
            var rec = list.getStore().getAt(index);
            Ext.getCmp('contactForm').setRecord(rec);
            var button = Ext.getCmp('saveButton');
            button.setHandler(updateContact);
            button.setText('Update');
            Ext.Viewport.add(addNewContact);
            addNewContact.show();
          }
        }
      }

    }]
});

}
});
