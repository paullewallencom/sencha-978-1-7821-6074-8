Ext.application({
    name: 'TouchStart',
    launch: function() {
        var myCarousel = Ext.create('Ext.carousel.Carousel', {
            fullscreen: true,
            direction: 'horizontal',
            items: [{
              html: 'TouchStart container 1'
            }, {
              html: 'TouchStart container 2'
            }, {
              html: 'TouchStart container 3'
            }]
        });
        Ext.Viewport.add(myCarousel);
    }
});
