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
  rec.set(form.getValues());
  contactStore.sync();
  form.reset();
  this.up('sheet').hide();
};

var addContact = function() {
  var form = this.up('formpanel');
  var record = Ext.create('Contact', form.getValues());
  console.log(record);
  contactStore.add(record);
  contactStore.sync();
  form.reset();
  this.up('sheet').hide();
};
var addNewContact = new Ext.Sheet({
  height: 350,
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
    action: 'saveContact',
    margin: 10,
    handler: updateContact
    }, {
    xtype: 'button',
    height: 20,
    margin: 10,
    text: 'Cancel',
    handler: function() {
      this.up('formpanel').reset();
      this.up('sheet').hide();
    }}, {
    xtype: 'button',
    height: 20,
    margin: 10,
    text: 'Delete',
    ui: 'decline',
    handler: function() {
      var form = this.up('formpanel');
      contactStore.remove(form.getRecord());
      contactStore.sync();
      form.reset();
      this.up('sheet').hide();
    }}
    ]
  }]
});

var main = new Ext.Panel({
    fullscreen: true,
    layout: 'fit',
    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [{
            text: 'Add',
            handler: function() {
                var button = addNewContact.down('button[action=saveContact]');
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
          fn: function(list, index, target, record){
            addNewContact.down('formpanel').setRecord(record);
            var button = addNewContact.down('button[action=saveContact]');
            button.setHandler(updateContact);
            button.setText('Update');
            Ext.Viewport.add(addNewContact);
            addNewContact.show();
          }
        }
      }

    }]
});

    Ext.Viewport.add(main);

}
});
