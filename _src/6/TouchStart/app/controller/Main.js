Ext.define('TouchStart.controller.Main', {
    extend:'Ext.app.Controller',
    config:{
        views:['TouchStart.view.Main', 'TouchStart.view.PersonList'],
        refs:{
            mainView:'main',
            addBtn:'button[action=addtab]',
            addItem:'button[action=additem]',
            editItem:'button[action=edititem]',
            deleteItem:'button[action=deleteitem]',
            personList:'personlist'
        },
        control:{
            addBtn:{
                tap:'addNewTab'
            },
            personList:{
                select:'enableItemButtons'
            },
            addItem:{
                tap: 'tempFunction'
            },
            editItem:{
                tap: 'tempFunction'
            },
            deleteItem:{
                tap: 'tempFunction'
            }
        }
    },

    addNewTab:function () {
        this.getMainView().add({
            title:'My New Tab',
            iconCls:'star',
            html:'Some words of wisdom...'
        });
    },
    tempFunction:function () {
        console.log(arguments);
    },
    enableItemButtons:function () {
        console.log('foo');
        var disabledItemButtons = Ext.ComponentQuery.query('button[enableOnSelection]');
        Ext.each(disabledItemButtons, function(obj) {obj.enable();});
    }
});