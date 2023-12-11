
    var movieData = [
        { "year": 1996, "movies": {"Action": 105, "Comedy": 156, "Drama": 335, "Western":222,"Drama":195,"Adventure":155,"Thriller":166,"Unkown":100,"Horror":451,"Romance":144,"Musical":747} },
        { "year": 1997, "movies": {"Action": 106, "Comedy": 166, "Drama": 214, "Western":232,"Drama":356,"Adventure":255,"Thriller":626,"Unkown":800,"Horror":630,"Romance":344,"Musical":847} },
        { "year": 1998, "movies": {"Action": 107, "Comedy": 964, "Drama": 256, "Western":292,"Drama":553,"Adventure":355,"Thriller":636,"Unkown":600,"Horror":515,"Romance":244,"Musical":547} },
        { "year": 1999, "movies": {"Action": 569, "Comedy": 604, "Drama": 264, "Western":922,"Drama":552,"Adventure":555,"Thriller":656,"Unkown":565,"Horror":55,"Romance":144,"Musical":647} },
        { "year": 2000, "movies": {"Action": 653, "Comedy": 455, "Drama": 985, "Western":822,"Drama":556,"Adventure":455,"Thriller":66,"Unkown":265,"Horror":55,"Romance":845,"Musical":547} },
        { "year": 2001, "movies": {"Action": 98, "Comedy": 156, "Drama": 532, "Western":622,"Drama":554,"Adventure":55,"Thriller":66,"Unkown":900,"Horror":553,"Romance":874,"Musical":147} },
        { "year": 2002, "movies": {"Action": 143, "Comedy": 156, "Drama": 252, "Western":122,"Drama":551,"Adventure":155,"Thriller":112,"Unkown":950,"Horror":155,"Romance":164,"Musical":747} },
        { "year": 2003, "movies": {"Action": 777, "Comedy": 156, "Drama": 254, "Western":22,"Drama":550,"Adventure":55,"Thriller":66,"Unkown":513,"Horror":155,"Romance":413,"Musical":747} },
        { "year": 2004, "movies": {"Action": 630, "Comedy": 456, "Drama": 652, "Western":222,"Drama":505,"Adventure":155,"Thriller":66,"Unkown":651,"Horror":155,"Romance":443,"Musical":747} },
        { "year": 2005, "movies": {"Action": 866, "Comedy": 356, "Drama": 256, "Western":234,"Drama":505,"Adventure":455,"Thriller":156,"Unkown":410,"Horror":124,"Romance":441,"Musical":747} },
        { "year": 2006, "movies": {"Action": 911, "Comedy":656, "Drama": 256, "Western":252,"Drama":515,"Adventure":645,"Thriller":67,"Unkown":200,"Horror":665,"Romance":443,"Musical":147} },
        { "year": 2007, "movies": {"Action": 475, "Comedy": 786, "Drama": 785, "Western":263,"Drama":525,"Adventure":155,"Thriller":666,"Unkown":200,"Horror":415,"Romance":561,"Musical":147} },
        { "year": 2008, "movies": {"Action": 981, "Comedy": 156, "Drama": 265, "Western":666,"Drama":535,"Adventure":155,"Thriller":666,"Unkown":300,"Horror":425,"Romance":651,"Musical":247} },
        { "year": 2009, "movies": {"Action": 692, "Comedy": 156, "Drama": 625, "Western":992,"Drama":545,"Adventure":555,"Thriller":655,"Unkown":300,"Horror":435,"Romance":412,"Musical":347} },
        { "year": 2010, "movies": {"Action": 478, "Comedy": 156, "Drama": 125, "Western":292,"Drama":555,"Adventure":355,"Thriller":666,"Unkown":400,"Horror":445,"Romance":315,"Musical":447} },
        { "year": 2012, "movies": {"Action": 875, "Comedy": 156, "Drama": 525, "Western":220,"Drama":565,"Adventure":455,"Thriller":656,"Unkown":410,"Horror":455,"Romance":365,"Musical":747} },
        { "year": 2013, "movies": {"Action": 744, "Comedy": 156, "Drama": 235, "Western":334,"Drama":585,"Adventure":255,"Thriller":662,"Unkown":450,"Horror":465,"Romance":321,"Musical":517} },
        { "year": 2014, "movies": {"Action": 595, "Comedy": 256, "Drama": 785, "Western":225,"Drama":585,"Adventure":355,"Thriller":116,"Unkown":300,"Horror":475,"Romance":413,"Musical":897} },
        { "year": 2015, "movies": {"Action": 983, "Comedy": 356, "Drama": 415, "Western":651,"Drama":575,"Adventure":155,"Thriller":36,"Unkown":450,"Horror":485,"Romance":513,"Musical":127} },
        { "year": 2016, "movies": {"Action": 559, "Comedy": 156, "Drama": 265, "Western":412,"Drama":595,"Adventure":55,"Thriller":456,"Unkown":871,"Horror":495,"Romance":451,"Musical":347} },
        { "year": 2017, "movies": {"Action": 945, "Comedy": 456, "Drama": 561, "Western":345,"Drama":505,"Adventure":155,"Thriller":66,"Unkown":962,"Horror":500,"Romance":412,"Musical":447} },
        { "year": 2018, "movies": {"Action": 885, "Comedy": 156, "Drama": 95, "Western":456,"Drama":535,"Adventure":55,"Thriller":66,"Unkown":500,"Horror":145,"Romance":621,"Musical":547} },


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
        Drama: 'rgba(255, 0, 0, 0.7)',
        Western:'rgb(113,176,19)',
        Adventure:'rgb(0,253,194)',
        Thriller:'rgb(205,139,175)',
        Unkown:'rgb(203,61,30)',
        Horror:'rgb(24,72,199)',
        Romance:'rgb(50,63,154)',
        Musical:'rgb(120,21,182)'


        // 添加其他电影类别及其颜色
    };
    // 初始化数据
    var option2 = {
        baseOption: {
            timeline: {
                axisType: 'category',
                autoPlay: true,
                playInterval: 1500,
                data: cumulativeData.map(function (item) {
                    return item.year;
                }),
            },
            title: {
                text: 'Cumulative Top 10 Movies by Year',
                subtext: 'Data Source: wiki_movie_plots_deduped.csv',
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