var myChart4 = echarts.init(document.getElementById('chart4'));

var data = [{
    name: 'American',
    value: 17377,
    children: [{
        name: 'Drama',
        value: 3549,
    }, 
    {
        name: 'Comedy',
        value: 3059,
    }, 
    {
        name: 'Western',
        value: 855,
    }, 
    {
        name: 'Horror',
        value: 782,
    }, 
    {
        name: 'Action',
        value: 495,
    }, 
    {
        name: 'Thriller',
        value: 481,
    }, 
    {
        name: 'Adventure',
        value: 442,
    }, 
    {
        name: 'Crime Drama',
        value: 414,
    }, 
    {
        name: 'Unknown',
        value: 398,
    }, 
    {
        name: 'Musical',
        value: 386,
    }, 
    {
        name: 'Science Fiction',
        value: 355,
    }, 
    {
        name: 'Film Noir',
        value: 343,
    }, 
    {
        name: 'Romantic Comedy',
        value: 322,
    }, 
    {
        name: 'Crime',
        value: 274,
    }, 
    {
        name: 'Mystery',
        value: 238,
    }, 
    {
        name: 'Animation',
        value: 232,
    }, 
    {
        name: 'Romance',
        value: 200,
    }, 
    {
        name: 'War',
        value: 229,
    }, 
    {
        name: 'Sci-Fi',
        value: 182,
    }, 
    {
        name: 'Animated',
        value: 180,
    }, 
    {
        name: 'Comedy, Drama',
        value: 175,
    }, 
    {
        name: 'Family',
        value: 163,
    }, 
    {
        name: 'Musical Comedy',
        value: 146,
    }, 
    {
        name: 'Fantasy',
        value: 144,
    }, 
    {
        name: 'Biography',
        value: 130,
    }, 
    {
        name: 'others',
        value: 3203,
    }]
},{
    name: 'British',
    value: 3670,
    children: [{
        name: 'drama',
        value: 735,
    },{
        name: 'comedy',
        value: 669,
    },{
        name: 'unknown',
        value: 603,
    }, {
        name: 'crime',
        value: 224,
    }, {
        name: 'thriller',
        value: 192,
    }, {
        name: 'horror',
        value: 153,
    },{
        name: 'others',
        value: 1094,
    }]   
},{
    name: 'Bollywood',
    value: 2931,
    children: [{
        name: 'unknown',
        value: 594,
    }, 
    {
        name: 'drama',
        value: 336,
    }, 
    {
        name: 'romance',
        value: 187,
    }, 
    {
        name: 'action',
        value: 155,
    }, 
    {
        name: 'comedy',
        value: 154,
    }, 
    {
        name: 'others',
        value: 1505,
    }]   
},{
    name: 'Tamil',
    value: 2599,
    children: [{
        name: 'unknown',
        value: 1822,
    }, 
    {
        name: 'action',
        value: 108,
    }, 
    {
        name: 'drama',
        value: 96,
    }, 
    {
        name: 'romance',
        value: 96,
    }, 
    {
        name: 'others',
        value: 477,
    }]   
},{
    name: 'Telugu',
    value: 1311,
    children: [{
        name: 'unknown',
        value: 381,
    }, 
    {
        name: 'drama',
        value: 195,
    }, 
    {
        name: 'romance',
        value: 146,
    }, 
    {
        name: 'action',
        value: 142,
    }, 
    {
        name: 'others',
        value: 447,
    }]   
},{
    name: 'Malayalam',
    value: 1095,
    children: [{
        name: 'unknown',
        value: 549,
    }, 
    {
        name: 'drama',
        value: 112,
    }, 
    {
        name: 'comedy',
        value: 100,
    }, 
    {
        name: 'others',
        value: 334,
    }]   
},{
    name: 'Hong Kong CHINA',
    value: 791,
    children: [{
        name: 'comedy',
        value: 315,
    }, 
    {
        name: 'unknown',
        value: 47,
    }, 
    {
        name: 'action',
        value: 150,
    }, 
    {
        name: 'others',
        value: 279,
    }]   
},{
    name: 'Canadian',
    value: 723,
    children: [{
        name: 'drama',
        value: 342,
    }, 
    {
        name: 'comedy',
        value: 147,
    }, 
    {
        name: 'others',
        value: 234,
    }]   
},{
    name: 'Australian',
    value: 576,
    children: [{
        name: 'drama',
        value: 289,
    }, 
    {
        name: 'others',
        value: 287,
    }]   
},{
    name: 'South_Korean',
    value: 522,
    children: [{
        name: 'drama',
        value: 378,
    }, 
    {
        name: 'others',
        value: 144,
    }]   
},{
    name: 'Chinese',
    value: 463,
    children: [{
        name: 'drama',
        value: 179,
    }, 
    {
        name: 'others',
        value: 284,
    }]   
},{
    name: 'Kannada',
    value: 444,
    children: [{
        name: 'Romance',
        value: 235,
    }, 
    {
        name: 'others',
        value: 209,
    }]   
},{
    name: 'Bengali',
    value: 306,
    children: [{
        name: 'Romance',
        value: 166,
    }, 
    {
        name: 'others',
        value: 140,
    }]   
},{
    name: 'Russian',
    value: 232,
    children: [{
        name: 'drama',
        value: 80,
    }, 
    {
        name: 'others',
        value: 209,
    }]   
},{
    name: 'Marathi',
    value: 141,
    children: [{
        name: 'drama',
        value: 80,
    }, 
    {
        name: 'others',
        value: 61,
    }]   
},{
    name: 'Filipino',
    value: 128,
    children: [{
        name: 'others',
        value: 128,
    }]   
},{
    name: 'Bangladeshi',
    value: 87,
    children: [{
        name: 'others',
        value: 87,
    }] 
},{
    name: 'Punjabi',
    value: 84,
    children: [{
        name: 'others',
        value: 84,
    }]   
},{
    name: 'Malaysian',
    value: 70,
    children: [{
        name: 'others',
        value: 70,
    }]  
},{
    name: 'Turkish',
    value: 70,
    children: [{
        name: 'others',
        value: 70,
    }] 
},{
    name: 'Egyptian',
    value: 67,
    children: [{
        name: 'others',
        value: 67,
    }]  
}
,{
    name: 'Assamese',
    value: 9,
    children: [{
        name: 'others',
        value: 9,
    }]  
}
,{
    name: 'Maldivian',
    value: 2,
    children: [{
        name: 'others',
        value: 2,
    }]  
}
];

option4 = {
    series: {
        type: 'sunburst',
        // highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '90%'],
        label: {
            rotate: 'radial'
        }
    }
};

myChart4.setOption(option4);