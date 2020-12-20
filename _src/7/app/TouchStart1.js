Ext.application({
  name: 'TouchStart',
  launch: function() {
  Ext.define('User', {
    extend: 'Ext.data.Model',
    config: {
    fields: [
      {name: 'firstname', type: 'string'},
      {name: 'lastname', type: 'string'},
      {name: 'username', type: 'string'},
      {name: 'age', type: 'int'},
      {name: 'email', type: 'string'},
      {name: 'active', type: 'boolean', defaultValue: true},
    ],
    validations: [
          {type: 'presence',  field: 'age'},
          {type: 'exclusion', field: 'username', list: ['Admin', 'Root']},
          {type: 'format',    field: 'username', matcher: /([a-z]+)[0-9]{2,3}/}
      ],
    proxy: {
        type: 'localstorage',
        id: 'userProxy',
        reader: {
            type: 'json'
        }
    }
    },
      deactivate: function() {
          if(this.get('active')) {
              this.set('active', false);
          }
      }
  });

/// change the username below to Admin or Root to see errors in the console
  var newUser = Ext.create('User', {
    firstname: 'Nigel',
    lastname: 'Tufnel',
    username: 'goes211',
    email: 'nigel@spinaltap.com'
  });

  var errors = newUser.validate();

  console.log(newUser);
  console.log(errors);

  if(!errors.isValid()) {
    alert("The field: "+errors.items[0].getField()+ " returned an error: "+errors.items[0].getMessage());
  }

  }
});

