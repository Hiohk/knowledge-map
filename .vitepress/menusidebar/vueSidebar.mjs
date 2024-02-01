const commonPath = '/frontend/vue/';

export default [
    {
        text: '开始',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '简介', link: `${commonPath}/index.md` },
        ]
    },
    {
        text: 'vue基础',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '模板语法', link: `${commonPath}/vue01` },
            { text: '响应式基础', link: `${commonPath}/vue02` },
            { text: '计算属性', link: `${commonPath}/vue03` },
            { text: '类与样式绑定', link: `${commonPath}/index` },
            { text: '列表渲染', link: `${commonPath}/index` },
            { text: '事件处理', link: `${commonPath}/index` },
            { text: '表单输入绑定', link: `${commonPath}/index` },
            { text: '声明周期', link: `${commonPath}/index` },
            { text: '侦听器', link: `${commonPath}/index` },
            { text: '模板引用', link: `${commonPath}/index` },
            { text: '组件基础', link: `${commonPath}/index` },
        ]
    },
    {
        text: 'vue高级',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '组合式函数', link: `${commonPath}/vue-03.md` },
            { text: '自定义指令', link: `${commonPath}/vue-03.md` },
            { text: '插件', link: `${commonPath}/vue-03.md` },
            { text: 'Transition', link: `${commonPath}/vue-03.md` },
            { text: 'TransitionGroup', link: `${commonPath}/vue-03.md` },
            { text: 'KeepAlive', link: `${commonPath}/vue-03.md` },
            { text: 'Teleport', link: `${commonPath}/vue-03.md` },
            { text: 'Suspense', link: `${commonPath}/vue-03.md` },
            { text: '状态管理', link: `${commonPath}/vue-03.md` },
            { text: 'vue-router', link: `${commonPath}/vue-03.md` },
        ]
    }
]
