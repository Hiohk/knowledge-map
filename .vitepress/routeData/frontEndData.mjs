export const frontEndData = {
    nodeData: {
        id: '1',
        topic: '前端技术栈',
        expanded: true,
        // tags: ['Supported By mind-elixir'],
        style: { background: '#107AFF' },
        root: true,
        children: [
            {
                topic: '1. HTML',
                direction: 1,
                children: [
                    {
                        topic: '1. HTML基础知识学习',
                    },
                    {
                        topic: '2. HTML 编写规则 和语义化写法',
                    },
                    {
                        topic: '3. 表单和验证',
                    },
                    {
                        topic: '4. 公约和最佳实践方法',
                    },
                    {
                        topic: '5. SEO 基础知识',
                    }
                ],
            },
            {
                topic: '2. CSS',
                direction: 1,
                children: [
                    {
                        topic: '1. CSS 基础知识学习',
                    },
                    {
                        topic: '2. 页面切图和布局实现',
                    },
                    {
                        topic: '3. 页面响应式布局设计',
                    }
                ],
            },
            {
                topic: '3. JavaScript',
                direction: 1,
                children: [
                    {
                        topic: '1. JavaScript 基础语法和知识',
                    },
                    {
                        topic: '2. 使用 JavaScript 操作 DOM元素',
                    },
                    {
                        topic: '3. Ajax 异步请求相关知识学习',
                    },
                    {
                        topic: '4. ES6 以上版本 的JavaScript',
                    }
                ],
            },
            {
                topic: '4. Web和移动页面的制作',
                direction: 1,
            },
            {
                topic: '5. Node.js',
                direction: 1,
            },
            {
                topic: '6. Vue.js',
                direction: 1,
            },
            {
                topic: '7. Webpack',
                direction: 1,
            },
            {
                topic: '8. Git和Github',
                direction: 1,
            },
            {
                topic: '9. 小程序开发',
                direction: 0,
            },
            {
                topic: '10. TypeScript',
                direction: 0,
            },
            {
                topic: '11. React',
                direction: 0,
            },
            {
                topic: '12. ReactNative',
                direction: 0,
            },
            {
                topic: '13. Flutter',
                direction: 0,
            },
            {
                topic: '14. Linux',
                direction: 0,
            },
            {
                topic: '15. 前端测试',
                direction: 0,
            }
        ],
    },
    // arrows: [
    //     {
    //         id: 'd451a9149a1e3a15',
    //         label: 'Custom Link',
    //         from: 'd451a77ca7348eae',
    //         to: 'd451a78e1ec7181c',
    //         delta1: {
    //             x: -230,
    //             y: -9,
    //         },
    //         delta2: {
    //             x: -236,
    //             y: 14,
    //         },
    //     },
    // ],
    summaries: [
        {
            id: 'd451a84c2e77cc2f',
            parent: 'd451a6f027c33b1f',
            start: 0,
            end: 0,
            text: 'summary',
        },
    ],
    direction: 2,
    theme: {
        name: "Latte",
        palette: ["#dd7878", "#ea76cb", "#8839ef", "#e64553", "#fe640b", "#df8e1d", "#40a02b", "#209fb5", "#1e66f5", "#7287fd"],
        cssVar: {
            "--main-color": "#444446",
            "--main-bgcolor": "#ffffff",
            "--color": "#777777",
            "--bgcolor": "#f6f6f6",
            "--panel-color": "#444446",
            "--panel-bgcolor": "#ffffff",
            "--panel-border-color": "#eaeaea"
        }
    },
};