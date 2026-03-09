const BLOG = {
  // Notion 配置
  NOTION_PAGE_ID: '31eadfbe49c680a4aad3e49519e6a724',
  
  // 核心：HEO 主题
  THEME: 'heo',
  
  // 基础信息
  LANG: 'zh-CN',
  SINCE: 2026,
  
  // 作者信息
  AUTHOR: 'Maxkore',
  BIO: '创造君',
  
  // 🌐 网站信息
  LINK: 'https://maxkore.dpdns.org',
  BLOG_TITLE: 'Maxkore 的极客空间',
  BLOG_SUBTITLE: '代码 / 创意 / 无限可能',
  
  // HEO 主题特有配置
  HEO_HOME_BANNER_ENABLE: true,
  HEO_SITE_CREATE_TIME: '2026-03-09',
  
  // 首页分类模块
  HEO_HERO_CATEGORY_1: { 
    title: '技术干货', 
    url: '/category/技术' 
  },
  HEO_HERO_CATEGORY_2: { 
    title: '极客项目', 
    url: '/category/项目' 
  },
  HEO_HERO_CATEGORY_3: { 
    title: '创造笔记', 
    url: '/category/创造' 
  },
  
  // 移除水印
  BEI_AN: '',
  BEI_AN_GONGAN: '',
  POWERED_BY: '',
  COPYRIGHT: '',
  FOOTER_CONTENT: false,
  CUSTOM_FOOTER: '© 2026 Maxkore · 极客空间',
  
  // UUID 重定向配置
  UUID_REDIRECT: false,
  
  // ✅ 新增：关闭有问题的功能（放在对象内部）
  ENABLE_SEARCH: false,  // 关闭搜索
  ENABLE_ARCHIVE: false, // 关闭归档
  
  // 其他配置
  CATEGORY_OPTIONS: [],
  FONT_SANS: [],
  FONT_SERIF: [],
  APPEARANCE: 'auto',
}

module.exports = BLOG