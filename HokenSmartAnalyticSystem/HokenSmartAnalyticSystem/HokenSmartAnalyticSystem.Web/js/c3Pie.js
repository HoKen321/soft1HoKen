var chartPie = c3.generate({
    bindto: '#divPie',
    data: {
        // iris data from R
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});
 
setInterval(function () {
chartPie.load({
        columns: [
            ["setosa", 0.2*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.4*Math.random(), 0.3*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.1*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.1*Math.random(), 0.1*Math.random(), 0.2*Math.random(), 0.4*Math.random(), 0.4*Math.random(), 0.3*Math.random(), 0.3*Math.random(), 0.3*Math.random(), 0.2*Math.random(), 0.4*Math.random(), 0.2*Math.random(), 0.5*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.4*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.4*Math.random(), 0.1*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.1*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.3*Math.random(), 0.3*Math.random(), 0.2*Math.random(), 0.6*Math.random(), 0.4*Math.random(), 0.3*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.2*Math.random(), 0.2],
            ["versicolor", 1.4*Math.random(), 1.5*Math.random(), 1.5*Math.random(), 1.3*Math.random(), 1.5*Math.random(), 1.3*Math.random(), 1.6*Math.random(), 1.0*Math.random(), 1.3*Math.random(), 1.4*Math.random(), 1.0*Math.random(), 1.5*Math.random(), 1.0*Math.random(), 1.4*Math.random(), 1.3*Math.random(), 1.4*Math.random(), 1.5*Math.random(), 1.0*Math.random(), 1.5*Math.random(), 1.1*Math.random(), 1.8*Math.random(), 1.3*Math.random(), 1.5*Math.random(), 1.2*Math.random(), 1.3*Math.random(), 1.4*Math.random(), 1.4*Math.random(), 1.7*Math.random(), 1.5*Math.random(), 1.0*Math.random(), 1.1*Math.random(), 1.0*Math.random(), 1.2*Math.random(), 1.6*Math.random(), 1.5*Math.random(), 1.6*Math.random(), 1.5*Math.random(), 1.3*Math.random(), 1.3*Math.random(), 1.3*Math.random(), 1.2*Math.random(), 1.4*Math.random(), 1.2*Math.random(), 1.0*Math.random(), 1.3*Math.random(), 1.2*Math.random(), 1.3*Math.random(), 1.3*Math.random(), 1.1*Math.random(), 1.3],
            ["virginica", 2.5*Math.random(), 1.9*Math.random(), 2.1*Math.random(), 1.8*Math.random(), 2.2*Math.random(), 2.1*Math.random(), 1.7*Math.random(), 1.8*Math.random(), 1.8*Math.random(), 2.5*Math.random(), 2.0*Math.random(), 1.9*Math.random(), 2.1*Math.random(), 2.0*Math.random(), 2.4*Math.random(), 2.3*Math.random(), 1.8*Math.random(), 2.2*Math.random(), 2.3*Math.random(), 1.5*Math.random(), 2.3*Math.random(), 2.0*Math.random(), 2.0*Math.random(), 1.8*Math.random(), 2.1*Math.random(), 1.8*Math.random(), 1.8*Math.random(), 1.8*Math.random(), 2.1*Math.random(), 1.6*Math.random(), 1.9*Math.random(), 2.0*Math.random(), 2.2*Math.random(), 1.5*Math.random(), 1.4*Math.random(), 2.3*Math.random(), 2.4*Math.random(), 1.8*Math.random(), 1.8*Math.random(), 2.1*Math.random(), 2.4*Math.random(), 2.3*Math.random(), 1.9*Math.random(), 2.3*Math.random(), 2.5*Math.random(), 2.3*Math.random(), 1.9*Math.random(), 2.0*Math.random(), 2.3*Math.random(), 1.8],
        ]
    });
}, 1500);
 
setTimeout(function () {
chartPie.unload({
        ids: 'data1'
    });
chartPie.unload({
        ids: 'data2'
    });
}, 2500);