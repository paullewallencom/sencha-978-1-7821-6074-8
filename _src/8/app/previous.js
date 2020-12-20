Ext.application({
    name:'TouchStart',
    launch:function () {
        Ext.define('Contact', {
            extend:'Ext.data.Model',
            config:{
                fields:[
                    {name:'id'},
                    {name:'first', type:'string'},
                    {name:'last', type:'string'},
                    {name:'email', type:'string'}
                ],
                proxy:{
                    type:'localstorage',
                    id:'myContacts',
                    reader:{
                        type:'json'
                    }
                }
            }
        });

        var main = Ext.create('Ext.Panel', {
            fullscreen:true,
            layout:'fit',
            items:[
                {
                    xtype:'list',
                    itemTpl:'{last}, {first}',
                    store:Ext.create('Ext.data.Store', {
                        model:'Contact',
                        storeId:'contactStore',
                        autoLoad:true
                    })
                }
            ]
        });
        var dude = Ext.create('Contact', {
            first:'Bob',
            last:'McTest',
            email:'bob@test.com'
        });
        dude.save();
        main.down('list').getStore().load();

        Ext.Viewport.add(main);

    }
});
