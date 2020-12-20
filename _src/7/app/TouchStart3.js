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

var newContact1 = Ext.create('Contact', {
    name: 'David',
    email: 'david@msn.com'
  });

  var newContact2 = Ext.create('Contact', {
    name: 'Bill',
    email: 'bill@yahoo.com'
  });

var addedUsers = contactStore.add(newContact1, newContact2);
contactStore.sync();
console.log(addedUsers);
console.log(addedUsers[0].data.name+': '+addedUsers[0].data.id);
console.log(addedUsers[1].data.name+': '+addedUsers[1].data.id);

var contactList = Ext.create('Ext.Panel', {
    fullscreen: true,
    layout: 'fit',
    items: [
    {
      xtype: 'list',
      itemTpl: '{name}: {email}',
      store: contactStore
    }]
});

    Ext.Viewport.add(contactList);
}
});
