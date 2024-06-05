const commonPath = '/backend/mysql/';

export default [
    {
        text: 'MySQL基础',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '01-数据库概述', link: `${commonPath}/basic01` },
            { text: '02-MySQL环境搭建', link: `${commonPath}/basic02` },
            { text: '03-基本的SELECT语句', link: `${commonPath}/basic03` },
            { text: '04-运算符', link: `${commonPath}/basic04` },
            { text: '05-排序与分页', link: `${commonPath}/basic05` },
            { text: '06-多表查询', link: `${commonPath}/basic06` },
            { text: '07-单行函数', link: `${commonPath}/basic07` },
            { text: '08-聚合函数', link: `${commonPath}/basic08` },
            { text: '09-子查询', link: `${commonPath}/basic09` },
            { text: '10-创建和管理表', link: `${commonPath}/basic10` },
            { text: '11-数据处理之增删改', link: `${commonPath}/basic11` },
            { text: '12-MySQL数据类型精讲', link: `${commonPath}/basic12` },
            { text: '13-约束', link: `${commonPath}/basic13` },
            { text: '14-视图', link: `${commonPath}/basic14` },
            { text: '15-存储过程与函数', link: `${commonPath}/basic15` },
            { text: '16-变量、流程控制与游标', link: `${commonPath}/basic16` },
            { text: '17-触发器', link: `${commonPath}/basic17` },
            { text: '18-MySQL8其它新特性', link: `${commonPath}/basic18` },
        ]
    },
    {
        text: 'MySQL高级',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '01-Linux下MySQL的安装与使用', link: `${commonPath}/advance01` },
            // { text: '02-MySQL的数据目录', link: `${commonPath}/advance02` },
            // { text: '03-用户与权限管理', link: `${commonPath}/advance03` },
            // { text: '04-逻辑架构', link: `${commonPath}/advance04` },
            // { text: '05-存储引擎', link: `${commonPath}/advance05` },
            // { text: '06-InnoDB数据页结构', link: `${commonPath}/advance06` },
            // { text: '07-索引', link: `${commonPath}/advance07` },
            // { text: '08-性能分析工具的使用', link: `${commonPath}/advance08` },
            // { text: '09-索引优化与SQL优化', link: `${commonPath}/advance09` },
            // { text: '10-数据库的设计规范', link: `${commonPath}/advance10` },
            // { text: '11-数据库其他调优策略', link: `${commonPath}/advance11` },
            // { text: '12-事务基础知识', link: `${commonPath}/advance12` },
            // { text: '13-MySQL事务日志', link: `${commonPath}/advance13` },
            // { text: '14-锁', link: `${commonPath}/advance14` },
            // { text: '15-多版本并发控制(MVCC)', link: `${commonPath}/advance15` },
            // { text: '16-其它数据库日志', link: `${commonPath}/advance16` },
            // { text: '17-主从复制', link: `${commonPath}/advance17` },
            // { text: '18-数据库备份与恢复', link: `${commonPath}/advance18` },
        ]
    }
]
