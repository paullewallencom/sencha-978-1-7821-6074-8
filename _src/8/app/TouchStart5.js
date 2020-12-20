Ext.setup({
    onReady: function() {
        var mystore = Ext.create('Ext.data.JsonStore', {
            fields: ['month', '2008', '2009', '2010'],
            data: [
              {'month': 'June', '2008': 500, '2009': 400, '2010': 570},
              {'month': 'July', '2008': 350, '2009': 430, '2010': 270},
              {'month': 'August', '2008': 200, '2009': 300, '2010': 320},
              {'month': 'September', '2008': 770, '2009': 390, '2010': 670},
              {'month': 'October', '2008': 170, '2009': 220, '2010': 360}
            ]
        });
        console.log(mystore);
        Ext.create("Ext.chart.CartesianChart", {
            fullscreen: true,
            background: 'white',
            flipXY: true,
            store: mystore,

            interactions: ['panzoom'],

            //set legend configuration
            legend: {
                position: 'right',
                width: 80,
                margin: 10
            },

            //define the x and y-axis configuration.
            axes: [
                {
                    type: 'numeric',
                    position: 'bottom',
                    grid: true,
                    minimum: 0
                },
                {
                    type: 'category',
                    position: 'left'
                }
            ],

            //define the actual bar series.
            series: [
                {
                    type: 'bar',
                    xField: 'month',
                    yField: ['2008', '2009', '2010'],
                    axis: 'bottom',
                    highlight: true,
                    showInLegend: true,
                    style: {
                        stroke: 'rgb(40,40,40)',
                        maxBarWidth: 30
                    },
                    subStyle: {
                        fill: ["#115fa6", "#94ae0a", "#a61120"]
                    }
                }
            ]
        });
    }
});
