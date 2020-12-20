Ext.application({
    name:'TouchStart',
    launch:function () {

        Ext.define('Contact', {
            extend:'Ext.data.Model',
            config:{
                fields:[
                    {name:'first', type:'string'},
                    {name:'last', type:'string'},
                    {name:'address', type:'string'},
                    {name:'city', type:'string'},
                    {name:'state', type:'string'},
                    {name:'zip', type:'int'},
                    {name:'email', type:'string'},
                    {name:'birthday', type:'date'}
                ],
                proxy:{
                    type:'ajax',
                    url:'api/contacts.json',
                    reader:{
                        type:'json',
                        rootProperty:'children'
                    }
                }
            }
        });

        var contactStore = Ext.create('Ext.data.Store', {
            model:'Contact',
            autoLoad:true
        });

        var detailsPanel = Ext.create('Ext.Panel', {
            tpl:'{first} {last}<br>{address}<br>{city}, {state} {zip}<br>{email}<br>{birthday}',
            items:[
                {
                    xtype:'toolbar',
                    docked:'top',
                    items:[
                        {
                            text:'Back',
                            ui:'back',
                            handler:function () {
                                console.log(this.up('viewport').down('panel'));
                                console.log(main);
                                main.setActiveItem(0);
                            }
                        }
                    ]
                }
            ]
        });

        var main = Ext.create('Ext.Panel', {
            fullscreen:true,
            layout:'card',
            activeItem:0,
            items:[
                {
                    xtype:'list',
                    itemTpl:'{last}, {first}',
                    store:contactStore,
                    listeners:{
                        itemtap:{
                            fn: function (list, index, target, record) {
                                detailsPanel.setRecord(record);
                                main.setActiveItem(1);
                            }
                        }
                    }
                },
                detailsPanel
            ]
        });

        Ext.Viewport.add(main);

    }
});
