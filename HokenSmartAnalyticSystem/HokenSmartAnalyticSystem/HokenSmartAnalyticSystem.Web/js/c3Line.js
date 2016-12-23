
var charLine = c3.generate({
    bindto: '#divLine',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ],
        type: 'spline'
    }
});


setInterval(function () {
    $.ajax({
        type: 'POST',
        url: "/Home/GetLineData",
        dataType: 'json',
        async: false,
        success: function (responseData) {
           var returnData=responseData.result;
            var data = ['data1'];
            for (i = 0; i < responseData.result['data1'].length; i++)
            {
                data.push(responseData.result['data1'][i]);
            }

            var data2 = ['data2'];
            for (i = 0; i < responseData.result['data2'].length; i++) {
                data2.push(responseData.result['data2'][i]);
            }

            charLine.load({
                columns: [data,data2]
            });
        },
        error: function (textStatus, errorThrown) {//请求失败处理函数  
            console.log("请求失败，无法获取分组数据");
        }
    })
}, 1000);

//setInterval(function () {
//    charLine.load({
//        columns: [
//            ['data3', 130 * Math.random(), 150 * Math.random(), 200 * Math.random(), 300 * Math.random(), 200 * Math.random(), 100 * Math.random()]
//        ]
//    });
//}, 1500);

//setTimeout(function () {
//    charLine.unload({
//        ids: 'data1'
//    });
//}, 2000);