
    var movieData = [
        { "year": 1996, "movies": {"Action": 105, "Comedy": 156,  "Western":222,"Warfilm":195,"Musical":155,"Thriller":166,"Adventure":100,"Horror":451,"Romance":144,"Drama":747} },
        { "year": 1997, "movies": {"Action": 106, "Comedy": 166,  "Western":232,"Warfilm":356,"Musical":255,"Thriller":626,"Adventure":800,"Horror":630,"Romance":344,"Drama":847} },
        { "year": 1998, "movies": {"Action": 107, "Comedy": 964, "Western":292,"Warfilm":553,"Musical":355,"Thriller":636,"Adventure":600,"Horror":515,"Romance":244,"Drama":547} },
        { "year": 1999, "movies": {"Action": 569, "Comedy": 604,  "Western":922,"Warfilm":552,"Musical":555,"Thriller":656,"Adventure":565,"Horror":55,"Romance":144,"Drama":647} },
        { "year": 2000, "movies": {"Action": 653, "Comedy": 455,  "Western":822,"Warfilm":556,"Musical":455,"Thriller":66,"Adventure":265,"Horror":55,"Romance":845,"Drama":547} },
        { "year": 2001, "movies": {"Action": 98, "Comedy": 156, "Western":622,"Warfilm":554,"Musical":55,"Thriller":66,"Adventure":900,"Horror":553,"Romance":874,"Drama":147} },
        { "year": 2002, "movies": {"Action": 143, "Comedy": 156,  "Western":122,"Warfilm":551,"Musical":155,"Thriller":112,"Adventure":950,"Horror":155,"Romance":164,"Drama":747} },
        { "year": 2003, "movies": {"Action": 777, "Comedy": 156,  "Western":22,"Warfilm":550,"Musical":55,"Thriller":66,"Adventure":513,"Horror":155,"Romance":413,"Drama":747} },
        { "year": 2004, "movies": {"Action": 630, "Comedy": 456,  "Western":222,"Warfilm":505,"Musical":155,"Thriller":66,"Adventure":651,"Horror":155,"Romance":443,"Drama":747} },
        { "year": 2005, "movies": {"Action": 866, "Comedy": 356,  "Western":234,"Warfilm":505,"Musical":455,"Thriller":156,"Adventure":410,"Horror":124,"Romance":441,"Drama":747} },
        { "year": 2006, "movies": {"Action": 911, "Comedy":656, "Western":252,"Warfilm":515,"Musical":645,"Thriller":67,"Adventure":200,"Horror":665,"Romance":443,"Drama":147} },
        { "year": 2007, "movies": {"Action": 475, "Comedy": 786, "Western":263,"Warfilm":525,"Musical":155,"Thriller":666,"Adventure":200,"Horror":415,"Romance":561,"Drama":147} },
        { "year": 2008, "movies": {"Action": 981, "Comedy": 156,  "Western":666,"Warfilm":535,"Musical":155,"Thriller":666,"Adventure":300,"Horror":425,"Romance":651,"Drama":247} },
        { "year": 2009, "movies": {"Action": 692, "Comedy": 156,  "Western":992,"Warfilm":545,"Musical":555,"Thriller":655,"Adventure":300,"Horror":435,"Romance":412,"Drama":347} },
        { "year": 2010, "movies": {"Action": 478, "Comedy": 156, "Western":292,"Warfilm":555,"Musical":355,"Thriller":666,"Adventure":400,"Horror":445,"Romance":315,"Drama":447} },
        { "year": 2012, "movies": {"Action": 875, "Comedy": 156, "Western":220,"Warfilm":565,"Musical":455,"Thriller":656,"Adventure":410,"Horror":455,"Romance":365,"Drama":747} },
        { "year": 2013, "movies": {"Action": 744, "Comedy": 156,  "Western":334,"Warfilm":585,"Musical":255,"Thriller":662,"Adventure":450,"Horror":465,"Romance":321,"Drama":517} },
        { "year": 2014, "movies": {"Action": 595, "Comedy": 256, "Western":225,"Warfilm":585,"Musical":355,"Thriller":116,"Adventure":300,"Horror":475,"Romance":413,"Drama":897} },
        { "year": 2015, "movies": {"Action": 983, "Comedy": 356, "Western":651,"Warfilm":575,"Musical":155,"Thriller":36,"Adventure":450,"Horror":485,"Romance":513,"Drama":127} },
        { "year": 2016, "movies": {"Action": 559, "Comedy": 156,"Western":412,"Warfilm":595,"Musical":55,"Thriller":456,"Adventure":871,"Horror":495,"Romance":451,"Drama":347} },
        { "year": 2017, "movies": {"Action": 945, "Comedy": 456,"Western":345,"Warfilm":505,"Musical":155,"Thriller":66,"Adventure":962,"Horror":500,"Romance":412,"Drama":447} },
        { "year": 2018, "movies": {"Action": 885, "Comedy": 156, "Western":456,"Warfilm":535,"Musical":55,"Thriller":66,"Adventure":500,"Horror":145,"Romance":621,"Drama":547} },


    ];

    // 获取所有电影类别
    var categories = Object.keys(movieData[0].movies);

    // 初始化 ECharts 实例
    var chart2 = echarts.init(document.getElementById('chart2'));

    // 处理数据，计算每个电影类别的累计发行量
    var cumulativeData = [];
    var cumulativeTotal = {};
    movieData.forEach(function (item) {
        var yearData = { year: item.year, movies: {} };
        categories.forEach(function (category) {
            cumulativeTotal[category] = (cumulativeTotal[category] || 0) + (item.movies[category] || 0);
            yearData.movies[category] = cumulativeTotal[category];
        });
        cumulativeData.push(yearData);
    });

    var categoryColors = {
        Action: 'rgba(0, 128, 255, 0.7)',
        Comedy: 'rgba(255, 165, 0, 0.7)',
        Warfilm: 'rgba(255, 0, 0, 0.7)',
        Western:'rgb(113,176,19)',
        Musical:'rgb(0,253,194)',
        Thriller:'rgb(205,139,175)',
        Adventure:'rgb(203,61,30)',
        Horror:'rgb(24,72,199)',
        Romance:'rgb(50,63,154)',
        Drama:'rgb(120,21,182)'


        // 添加其他电影类别及其颜色
    };
    // 初始化数据
    var option2 = {
        baseOption: {
            timeline: {
                axisType: 'category',
                autoPlay: true,
                playInterval: 1000,
                data: cumulativeData.map(function (item) {
                    return item.year;
                }),
            },
            title: {
                text: 'Cumulative Top 10 Movies by Year',
                left: 'center',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}',
                axisPointer: {
                    type: 'shadow',
                },
            },
            xAxis: {
                type: 'value',
                axisLabel: {
                    show: false,
                },
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    show:false,
                },
                data: categories,
            },
            series: [],
        },
        options: cumulativeData.map(function (item) {
            return {
                title: {
                    text: 'Cumulative Top 10 Movies as of ' + item.year,
                },
                series: [{
                    type: 'bar',
                    data: Object.keys(item.movies).map(function (category) {
                        return {
                            name: category,
                            value: item.movies[category],
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: '{b} - {c}', // 显示电影类别和数量
                            },
                            itemStyle: {
                                color: categoryColors[category] || 'rgba(0, 0, 0, 0.7)',  // 设置柱子颜色
                            },
                        };
                    }).sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 10),
                }],
            };
        }),
    };

    // 渲染图表
    chart2.setOption(option2);