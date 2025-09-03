/* config/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: 'Home', link: '/' },
    {
        text: '基础',
        items: [
            { text: 'HTML', link: '/html/' },
            { text: 'CSS', link: '/css/' },
            { text: 'JavaScript', link: '/js/' },
        ],
    },

    {
        text: 'UI',
        items: [
            { text: 'React', link: '/react/' },
            { text: 'Vue', link: '/vue/' },
            { text: 'Peact', link: '/preact/' },
        ],
    },

    
    {
        text: '渲染',
        items: [
            { text: 'WebGL', link: '/webgl/' },
            { text: 'WebGPU', link: '/webgpu/' },
        ],
    },

    
    

    { text: 'Lib', link: '/js/' },

    {
        text: '工具',
        link: '/tool/',

    },

    { text: '面试', link: '/ms/' },
    
]
