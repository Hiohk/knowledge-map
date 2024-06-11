export const backEndData = {
    nodeData: {
        id: '1',
        topic: 'Java 学习路线',
        expanded: true,
        tags: ['2024-06-11'],
        style: { background: '#107AFF' },
        root: true,
        children: [
            {
                topic: '1. Java',
                direction: 1,
                children: [
                    {
                        topic: '1. 语言基础',
                    },
                    {
                        topic: '2. JVM',
                    },
                    {
                        topic: '3. 并发/多线程',
                    }
                ],
            },
            {
                topic: '2. Maven',
                direction: 1,
            },
            {
                topic: '4. MySQL',
                direction: 1,
            },
            {
                topic: '5. MyBatis',
                direction: 1,
            },
        ],
    },
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