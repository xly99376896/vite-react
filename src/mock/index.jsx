import Mock from 'mockjs'
import { tools } from '@/utils'

const domain = '/mock/'

// 模拟login接口
Mock.mock(domain + 'login', () => {
    let result = {
        TOKEN: tools.generateUUID(),
        session: {
            userName: '兔子先生',
            userId: '001',
        }
    }
    return result
})

Mock.mock(domain + 'getUser', () => {
    let result = {
        session: {
            userName: '兔子先生',
            userId: '001',
        },
        menus: [
            {
                key: 'welcome',
                path: '/welcome',
                label: '首页',
                query: {
                    title: '首页',
                }
            },
            {
                key: 'drag',
                label: '拖拽功能',
                children: [
                    {
                        key: 'sortablejs',
                        path: '/sortablejs',
                        label: 'react-sortablejs',
                        query: {
                            title: 'react-sortablejs'
                        }
                    },
                    {
                        key: 'resizable',
                        path: '/resizable',
                        label: 'react-resizable',
                        query: {
                            title: 'react-resizable'
                        }
                    },
                    {
                        key: 'grid-layout',
                        path: '/grid-layout',
                        label: 'react-grid-layout',
                        query: {
                            title: 'react-grid-layout'
                        }
                    }
                ]
            },
            {
                key: 'edited',
                label: '编辑器组件',
                children: [
                    {
                        key: 'tinymce',
                        path: '/tinymce',
                        label: 'tinymce',
                        query: {
                            title: 'tinymce'
                        }
                    },
                    {
                        key: 'codeMirror',
                        path: '/codeMirror',
                        label: 'codeMirror',
                        query: {
                            title: 'codeMirror'
                        }
                    },
                    {
                        key: 'diffMatch',
                        path: '/diffMatch',
                        label: 'diffMatch',
                        query: {
                            title: 'diffMatch'
                        }
                    },
                    {
                        key: 'monacoeditor',
                        path: '/monacoeditor',
                        label: 'monacoeditor',
                        query: {
                            title: 'monacoeditor'
                        }
                    },
                    {
                        key: 'markdown',
                        path: '/markdown',
                        label: 'markdown',
                        query: {
                            title: 'markdown'
                        }
                    }
                ]
            },
            {
                key: 'animation',
                label: '动画演示',
                children: [
                    {
                        key: 'animate',
                        path: '/animate',
                        label: 'animate.css',
                        query: {
                            title: 'animate.css'
                        }
                    },
                    {
                        key: 'gsap',
                        path: '/gsap',
                        label: 'gsap',
                        query: {
                            title: 'gsap'
                        }
                    }
                ]
            },
            {
                key: 'note',
                label: '笔记',
                children: [
                    {
                        key: 'new-environment',
                        path: '/new-environment',
                        label: '新环境配置',
                        query: {
                            title: '新环境配置'
                        }
                    },
                    {
                        key: 'team-library',
                        path: '/team-library',
                        label: 'Team Library',
                        query: {
                            title: 'Team Library'
                        }
                    },
                ]
            }
        ]
    }
    return result
})
