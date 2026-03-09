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
  
  // ✅ 修复1：明确关闭有问题的功能
  ENABLE_SEARCH: false,
  ENABLE_ARCHIVE: false,
  
  // ✅ 修复2：添加所有可能缺失的配置（设默认值避免undefined）
  CUSTOM_MENU: false,
  CAN_COPY: true,
  LAYOUT_SIDEBAR_REVERSE: false,
  GREETING_WORDS: '欢迎来到 Maxkore 的极客空间',
  
  // ✅ 修复3：邮箱加密相关（解决"解密邮箱失败"错误）
  CONTACT_EMAIL: '',  // 设为空，不显示邮箱
  CONTACT_GITHUB: 'Maxkore-Geek',  // 您的GitHub用户名
  
  // ✅ 修复4：搜索相关配置
  ALGOLIA_APP_ID: '',
  ALGOLIA_SEARCH_ONLY_API_KEY: '',
  ALGOLIA_INDEX: '',
  
  // ✅ 修复5：评论插件配置（设为空避免错误）
  COMMENT_VERCEL_BOT: false,
  COMMENT_GISCUS_REPO: '',
  COMMENT_GISCUS_REPO_ID: '',
  COMMENT_GISCUS_CATEGORY: '',
  COMMENT_GISCUS_CATEGORY_ID: '',
  
  // ✅ 修复6：统计相关配置
  ANALYTICS_VERCEL: false,
  ANALYTICS_BAIDU_ID: '',
  ANALYTICS_GOOGLE_ID: '',
  
  // 其他配置
  CATEGORY_OPTIONS: [],
  FONT_SANS: [],
  FONT_SERIF: [],
  APPEARANCE: 'auto',
}

module.exports = BLOG