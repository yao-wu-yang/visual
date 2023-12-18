	// 假设你有一个包含电影类别和对应电影名的数据
	var categoryData = [
		{ category: 'Action', movies: ['Cody Longo', 'Jeffrey Tambor', 'Jonathan Lipnicki'], count: 3094/100 },
		{ category: 'Comedy', movies: ['Charlie Tahan', 'Atticus Shaffer', 'Winona Ryder'], count: 4375/100 },
		{ category: 'Drama', movies: ['Robert Capron', 'Ana Gasteyer', 'Holmes Osborne'], count: 5969/100 },
		{ category: 'Romance', movies: ['Mike Goldberg', 'Greg Germann', 'Jason Miller'], count: 6089/100 },
		{ category: 'Horror', movies: ['Gary Oldman', 'Mia Wasikowska', 'Jessica Chastain'], count: 3167/100 },

	];
	// 创建力引导布局的 ECharts 图表
	var chart3 = echarts.init(document.getElementById('chart3'));

	// 计算画布的大小
	var canvasWidth = 8000; // 画布宽度
	var canvasHeight = 3000; // 画布高度

	// 计算每个类别节点的大小比例因子
	var maxCount = Math.max.apply(null, categoryData.map(function(item) {
		return item.count;
	}));
	var sizeScaleFactor = canvasWidth / (maxCount * 5); // 调整这个系数以满足你的需求

	// 将电影类别和电影名数据转换为力引导布局的节点数据
	var nodes = categoryData.map(function(item) {
		return {
			name: item.category,
			value: item.count, // 使用给定的数量作为节点的 value
			symbolSize: item.count * 1, // 调整节点的大小与电影数量成比例
			category: item.category, // 添加类别信息，用于区分节点
			draggable: true, // 允许节点拖拽
		};
	});

	// 将每个电影名作为一个小的子节点
	var childNodes = [];
	categoryData.forEach(function(item) {
		item.movies.forEach(function(movie, index) {
			// 计算子节点的位置
			var angle = (2 * Math.PI / item.movies.length) * index;
			var radius = 50; // 子节点围绕类别节点的半径

			childNodes.push({
				name: movie,
				value: 1, // 每个电影名节点数量设置为1
				symbolSize: 10, // 子节点的大小
				category: item.category, // 添加类别信息，用于区分节点
				x: radius * Math.cos(angle),
				y: radius * Math.sin(angle),
				itemStyle: {
					color: 'lightblue', // 子节点的颜色
				},
			});
		});
	});

	// 通过 links 属性定义链接关系
	var links = childNodes.map(function(childNode) {
		return {
			source: childNode.name,
			target: childNode.category,
		};
	});

	// 设置力引导布局的配置项
	var option3 = {
		title: {
			text: 'Force-Directed Graph with MVP_Cast',
			subtext: 'Data Source: wiki_movie_plots_deduped.csv',
			left: 'center',
		},
		tooltip: {
			formatter: function(params) {
				return 'Category: ' + params.data.category + '<br>' +
						'Movies: ' + params.data.value;
			},
		},
		animationDurationUpdate: 1500,
		animationEasingUpdate: 'quinticInOut',
		series: [
			{
				type: 'graph',
				layout: 'force',
				force: {
					repulsion: 200, // 调整 repulsion 的值以增加节点之间的排斥效果
					gravity: 0.1,
					edgeLength: 100,
				},
				roam: true,
				label: {
					show: true,
				},
				edgeSymbol: ['circle', 'arrow'],
				edgeSymbolSize: [4, 10],
				data: nodes.concat(childNodes),
				links: links,  // 添加 links 属性
				categories: categoryData.map(function(item) {
					return { name: item.category };
				}),
			},
		],
	};

	// 设置图表的配置项
	chart3.setOption(option3);