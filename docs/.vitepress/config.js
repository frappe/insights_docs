import { defineConfig } from 'vitepress';
import sidebar from './sidebar';

const tagline = 'Free, Open Source, and Community-Driven Data Analysis and Visualization Tool.';

export default defineConfig({
  lang: 'en-US',
  title: 'Frappe Insights',
  description: tagline,
  titleTemplate: tagline,
  lastUpdated: true,
	outDir: "../dist",
	base: "/",

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/assets/insights_docs/docs/favicon.png' }],
    ['link', { rel: 'stylesheet', href:'/assets/insights_docs/docs/style.css' }]
  ],

  appearance: false,
  themeConfig: {
    logo: '/logo.png',
    siteTitle: false,
    nav: nav(),
    sidebar: sidebar(),
    editLink: {
      pattern: 'https://github.com/nextchamp-saqib/insights_docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/frappe/insights' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Frappe Technologies Pvt. Ltd.',
    },
  },
});

function nav() {
  return [
    {
      text: 'Home',
      link: 'https://frappeinsights.com/',
    },
    {
      text: 'Community',
      link: 'https://t.me/frappeinsights',
    }
  ];
}