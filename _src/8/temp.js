Ext.define('ContactStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Contact',
        proxy: {
            type: 'jsonp',
            url: 'http://mycontactserver.com/api',
            reader: {
                type: 'json'
            }
        },
        autoLoad: true,
        listeners: {
            load: function() {
                var offlineContacts = Ext.StoreMgr.get('OfflineContactStore');

                offlineContacts.each(function(record) {
                    offlineContacts.remove(record);
                });
                offlineContacts.sync();

                this.each(function(record) {
                    offlineContacts.add(record.data);
                });

                offlineContacts.sync();

            }
        }
    }
});

'timeout'