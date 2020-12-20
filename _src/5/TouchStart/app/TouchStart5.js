Ext.application({
    name: 'TouchStart',
    launch: function() {
        var form = Ext.create('Ext.form.FormPanel', {
          items: [
              {
                  xtype: 'textfield',
                  name : 'first',
                  label: 'First name'
              },
              {
                  xtype: 'textfield',
                  name : 'last',
                  label: 'Last name'
              },
              {
                  xtype: 'emailfield',
                  name : 'email',
                  label: 'Email'
              }
          ]
          });

        var myCarousel = Ext.create('Ext.carousel.Carousel', {
            fullscreen: true,
            direction: 'horizontal',
            items: [form, {
              layout: 'fit',
              html: 'TouchStart container 2'
            }, {
              layout: 'fit',
              html: 'TouchStart container 3'
            }]
        });
        
        Ext.Viewport.add(myCarousel);
    }
});
