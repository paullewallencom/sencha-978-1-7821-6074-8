Ext.application({
    name: 'TouchStart',
    launch: function() {

    var mystore = Ext.create('Ext.data.JsonStore', {
      fields: ['month', 'sales'],
      data: [
        {'month': 'June', 'sales': 500},
        {'month': 'July', 'sales': 350},
        {'month': 'August', 'sales': 200},
        {'month': 'September', 'sales': 770},
        {'month': 'October', 'sales': 170}
      ]
    });

      Ext.create('Ext.chart.PolarChart', {
          title: 'My Cool Chart',
          background: 'white',
          store: mystore,
          fullscreen: true,
          innerPadding: 35,

          //bind the chart to a store with the following structure
          interactions: ['rotate'],

          colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e"],

          //configure the legend.
          legend: {
              position: 'right',
              width: 125,
              margin: 10
          },

          //describe the actual pie series.
          series: [
              {
                  type: 'pie',
                  xField: 'sales',
                  labelField: 'month',
                  donut: 25,
                  style: {
                      miterLimit: 10,
                      lineCap: 'miter',
                      lineWidth: 2
                  }
              }
          ]
      });


  }
});
