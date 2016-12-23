var chartCombination = c3.generate({
    //bindto: '#site_statistics_Combination',
    data: {
        columns: [
            ['data1', 30, 20, 50, 40, 60, 50],
            ['data2', 200, 130, 90, 240, 130, 220],
            ['data3', 300, 200, 160, 400, 250, 250],
            ['data4', 200, 130, 90, 240, 130, 220],
            ['data5', 130, 120, 150, 140, 160, 150],
            ['data6', 90, 70, 20, 50, 60, 120],
        ],
        type: 'bar',
        types: {
            data3: 'spline',
            data4: 'line',
            data6: 'area',
        },
        groups: [
            ['data1','data2']
        ]
    }
});
chartCombination.load();
setInterval(function () {
    chartCombination.load({
        columns: [
            ['data3', 130*Math.random(), 150*Math.random(), 200*Math.random(), 300*Math.random(), 200*Math.random(), 100*Math.random()]
        ]
    });
}, 1500);