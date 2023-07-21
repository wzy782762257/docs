module.exports = {
	base: '/ts-study/' /* 基础虚拟路径: */,
	dest: 'dist' /* 打包文件基础路径, 在命令所在目录下 */,
	title: 'TypeScript 入门', // 标题
	description: '学习使用 TypeScript', // 标题下的描述
	themeConfig: {
		// nav: [{text: '首页', link: 'http://www.baidu.com'}],
		sidebar: [
			{
				title: '一、TypeScript快速上手', // 标题
				children: [
					{
						title: '初识 TypeScript', // 标题
						collapsable: true, // 下级列表不可折叠
						children: [
							// 下级列表
							't1/01_ts',
							't1/02_安装TS',
							't1/03_HelloWorld',
						],
					},
					{
						title: 'TypeScript 常用语法',
						children: [
							't2/1_基础类型',
							't2/2_接口',
							't2/3_类',
							't2/4_函数',
							't2/5_泛型',
							't2/6_其他',
						],
						// initialOpenGroupIndex: -1, // 可选的, 默认值是 0
					},
				],
			},
		],
	},
}
