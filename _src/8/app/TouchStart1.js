Ext.application({
name: 'TouchStart',
launch: function() {

Ext.define('Contact', {
    extend: 'Ext.data.Model',
    config: {
		fields: [
			{name: 'id', type:'int'},
			{name: 'first', type: 'string'},
			{name: 'last', type: 'string'},
			{name: 'email',  type: 'string'},
			{name: 'dob',  type: 'date'}
		],
		proxy: {
			type: 'localstorage',
			id  : 'myContacts'
		}
    }
});

var contactStore = Ext.create('Ext.data.Store', {
    model: 'Contact',
    storeId: 'contactStore',
    proxy: {
        type: 'localstorage',
        id  : 'chapter8'
    },
    autoLoad: true
});

var updateContact = function(btn) {
  var form = btn.up('formpanel');
  var rec = contactStore.getById(form.getRecord().getId());
  form.updateRecord(rec);
  contactStore.sync();
  form.reset();
  this.up('sheet').hide();
};

var addContact = function(btn) {
console.log(this, btn)
  var form = btn.up('formpanel');
  var record = Ext.create('Contact', form.getValues());
  contactStore.add(record);
  contactStore.sync();
  form.reset();
  this.up('sheet').hide();
};


var addNewContact = Ext.create('Ext.ActionSheet', {
  height: 350,
  layout: 'fit',
  stretchX: true,
  enter: 'top',
  exit: 'top',
  items: [{
    xtype: 'formpanel',
    padding: 10,
    items: [
        {
            xtype: 'textfield',
            name : 'first',
            label: 'First Name'
        },
        {
            xtype: 'textfield',
            name : 'last',
            label: 'Last Name'
        },
        {
            xtype: 'emailfield',
            name : 'email',
            label: 'Email'
        },
        {
            xtype: 'datepickerfield',
            name : 'dob',
            label: 'Birthday'
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
      this.up('sheet').hide();
    }}, {
    xtype: 'button',
    height: 20,
    margin: 10,
    text: 'Delete',
    ui: 'decline',
    handler: function() {
      var form = this.up('form');
      contactStore.remove(form.record);
      this.up('sheet').hide();
    }}
    ]
  }]
});


var tpl = [
  '{first} {last}<br>',
  '{email}<br>',
  '{[values.dob.format("n/j/Y")]}',
  {
    formatDate: function(date){
      return Ext.util.Date(date, "n/j/Y g:i:s a");
    }
  }
];

var main = Ext.create('Ext.Panel', {
    fullscreen: true,
    layout: 'fit',
    items: [
    {
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
      itemTpl: tpl,
      store: contactStore,
      listeners: {
        itemtap: {
          fn: function(list,index){
            var rec = list.getStore().getAt(index);
            addNewContact.down('formpanel').setRecord(rec);
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

Ext.Viewport.add(main);

}
});
