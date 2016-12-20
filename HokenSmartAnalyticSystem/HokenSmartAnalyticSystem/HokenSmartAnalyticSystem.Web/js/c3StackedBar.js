var chartStackedBar = c3.generate({
    bindto: '#divStackedBar',
    data: {
        columns: [
            ['data1', -30, 200, 200, 400, -150, 250],
            ['data2', 130, 100, -100, 200, -150, 50],
            ['data3', -230, 200, 200, -300, 250, 250]
        ],
        type: 'bar',
        groups: [
            ['data1', 'data2']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});

setTimeout(function () {
    chartStackedBar.groups([['data1', 'data2', 'data3']])
}, 1000);

setInterval(function () {
    chartStackedBar.load({
        columns: [['data4', 100*Math.random(), -50*Math.random(), 150*Math.random(), 200*Math.random(), -300*Math.random(), -100*Math.random()]]
    });
}, 1500);

setTimeout(function () {
    chartStackedBar.groups([['data1', 'data2', 'data3', 'data4']])
}, 2000);