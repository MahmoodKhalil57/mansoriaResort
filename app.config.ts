export default defineAppConfig({
  // Configure Content Wind here
  cover: "/cover.jpg",

  socials: {
    twitter: "Atinux",
    github: "Atinux/content-wind",
    mastodon: "@atinux@webtoo.ls",
  },

  nuxtIcon: {
    aliases: {
      "icon-menu": "i-material-symbols-menu-rounded",
      "icon-lang": "i-material-symbols-language-chinese-dayi-rounded",
    },
  },

  Language: {
    navigation: {
      home: {
        en: "Home",
        ar: "رئيسي",
      },

      offerings: {
        en: "Offerings",
        ar: "العروض",
      },

      about: {
        en: "About",
        ar: "من نحن",
      },

      gallery: {
        en: "Gallery",
        ar: "الصور",
      },

      contact: {
        en: "Contact",
        ar: "اتصل بنا",
      },
    },
  },
});