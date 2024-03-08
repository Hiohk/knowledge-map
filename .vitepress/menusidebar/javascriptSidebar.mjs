const commonPath = '/frontend/javascript/';

export default [
    {
        text: 'JavaScript基础',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '简介', link: `${commonPath}/index.md` },
            { text: '数据类型', link: `${commonPath}/basic01` },
            { text: '值', link: `${commonPath}/basic02` },
            { text: '原生函数', link: `${commonPath}/basic03` },
            { text: '强制类型转换', link: `${commonPath}/basic04` },
            { text: '语法', link: `${commonPath}/basic05` },
            { text: '异步', link: `${commonPath}/basic06` },
            { text: '回调', link: `${commonPath}/basic07` },
            { text: 'Promise', link: `${commonPath}/basic08` },
            { text: '生成器', link: `${commonPath}/basic09` },
            { text: '程序性能', link: `${commonPath}/basic10` },
            { text: '性能测试与调优', link: `${commonPath}/basic11` },
        ]
    },
    {
        text: 'JavaScript高级',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '高级', link: `${commonPath}/advance01` },
        ]
    }
]
