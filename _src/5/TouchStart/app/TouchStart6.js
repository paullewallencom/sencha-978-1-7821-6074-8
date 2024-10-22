Ext.application({
    name: 'TouchStart',
    launch: function() {
        var form = Ext.create('Ext.form.FormPanel', {
          scroll: 'vertical',
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
              },
              {
                  xtype: 'datepickerfield',
                  name : 'date',
                  label: 'Date'
              },{
                  xtype   : 'sliderfield',
                  label   : 'Volume',
                  value   : 5,
                  minValue: 0,
                  maxValue: 10
              },
              {
                  xtype: 'togglefield',
                  name : 'turbo',
                  label: 'Turbo'
              },
              {
                xtype: 'spinnerfield',
                minValue: 0,
                maxValue: 100,
                incrementValue: 2,
                cycle: true
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
