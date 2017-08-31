$(function() {
    var data = [
        {name : 'IE8',value :13.68,color:'#3A68D3'},
        {name : 'IE6',value : 19.1,color:'#3895BF'},
        {name : 'Chrome',value : 40.59,color:'#2A962A'},
        {name : 'IE9',value : 10.91,color:'#4267BE'},
        {name : '搜狗高速',value : 6.19,color:'#9F2626'},
        {name : 'IE7',value : 1.48,color:'#4F7DE7'},
        {name : '奇虎360',value : 1.35,color:'#7A3C9C'},
        {name : 'Maxthon',value : 1.27,color:'#B97944'},
        {name : 'Firefox',value : 1.18,color:'#782A56'},
        {name : '其他',value : 4.26,color:'#484848'}
    ];


    var chart = new iChart.Column3D({
        render : 'pieChart',
        data: data,
        title : {
            text : '2017年2月国内浏览器市场份额',
            color : '#3e576f'
        },
        width : 800,
        height : 400,
        padding: 20,
        shadow: true,
        shadow_color:'#080808',
        background_color:'#eceeef',
        sub_option:{
            label : {
                color : '#2c2e2a',
                padding : 10
            }
        },
        coordinate:{
            left_board:false,
            scale:[{
                position:'left',
                start_scale:0,
                end_scale:50,
                scale_space:5,
                listeners:{
                    parseText:function(t,x,y){
                        return {text:t+"%  "}
                    }
                }
            }],
        },
        legend: {
            background_color:iChart.toRgba('#213e49',0.6),
            border:{radius:5},
            enable: true,
            align: 'right',
            valign: 'top',
            row: 'max',
            color:'#fefefe',
            column: 1,
            line_height: 15
        },
        tip : {
            enable : true
        }
    });
    chart.draw();
});