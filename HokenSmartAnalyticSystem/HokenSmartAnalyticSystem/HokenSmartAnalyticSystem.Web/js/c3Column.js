
var chartColumn = c3.generate({
    bindto: '#divColumn',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
    }

});


setInterval(function () {
    chartColumn.load({
        columns: [
            ['data1', 230 * Math.random(), 190 * Math.random(), 300 * Math.random(), 500 * Math.random(), 300 * Math.random(), 400 * Math.random()]
        ]
    });
}, 1000);

setInterval(function () {
    chartColumn.load({
        columns: [
            ['data3', 130 * Math.random(), 150 * Math.random(), 200 * Math.random(), 300 * Math.random(), 200 * Math.random(), 100 * Math.random()]
        ]
    });
}, 1500);

setTimeout(function () {
    chartColumn.unload({
        ids: 'data1'
    });
}, 2000);
