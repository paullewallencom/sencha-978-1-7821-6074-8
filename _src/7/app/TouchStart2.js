Ext.application({
    name:'TouchStart',
    launch:function () {

        Ext.define('Contact', {
            extend:'Ext.data.Model',
            config:{
                idProperty:'id',
                fields:[
                    {name:'id', mapping:0, type:'int'},
                    {name:'name', mapping:1, type:'string'},
                    {name:'email', mapping:2, type:'string'}
                ],
                proxy:{
                    type:'memory',
                    reader:{
                        type:'array'
                    }
                }
            }
        });


        var myData = [
            [1, 'David', 'david@gmail.com'],
            [2, 'Nancy', 'nancy@skynet.com'],
            [3, 'Henry', 'henry8@yahoo.com']
        ];

        var myStore = Ext.create('Ext.data.ArrayStore', {
            idIndex:0,
            model:'Contact',
            data:myData
        });

        var contactList = Ext.create('Ext.Panel', {
            fullscreen:true,
            layout:'fit',
            items:[
                {
                    xtype:'list',
                    itemTpl:'{name}: {email}',
                    store:myStore
                }
            ]
        });

        console.log(contactList.down('list').getStore());

        Ext.Viewport.add(contactList);
    }
});
