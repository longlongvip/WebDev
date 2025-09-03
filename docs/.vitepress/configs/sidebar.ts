import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = [
    {
        documentRootPath: 'docs',
        scanStartPath: 'html/',
        resolvePath: '/html/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'css/',
        resolvePath: '/css/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'js/',
        resolvePath: '/js/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'react/',
        resolvePath: '/react/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'vue/',
        resolvePath: '/vue/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'preact/',
        resolvePath: '/preact/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'webgl/',
        resolvePath: '/webgl/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'webgpu/',
        resolvePath: '/webgpu/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'lib/',
        resolvePath: '/lib/',
        useTitleFromFileHeading: true,
    },

    {
        documentRootPath: 'docs',
        scanStartPath: 'tool/',
        resolvePath: '/tool/',
        useTitleFromFileHeading: true,
    },

];

export const sidebar = generateSidebar(vitepressSidebarOptions);
