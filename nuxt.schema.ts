import { field, group } from "@nuxthq/studio/theme";

export default defineNuxtSchema({
  appConfig: {
    Language: group({
      title: "Parent title",
      icon: "i-icon-to-display",
      fields: {
        navigation: group({
          title: "Home Page",
          icon: "i-icon-to-display",
          fields: {
            home: group({
              title: "Home",
              icon: "i-icon-to-display",
              fields: {
                en: field({
                  type: "string",
                  title: "en",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
                ar: field({
                  type: "string",
                  title: "ar",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
              },
            }),
            offerings: group({
              title: "Offerings",
              icon: "i-icon-to-display",
              fields: {
                en: field({
                  type: "string",
                  title: "en",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
                ar: field({
                  type: "string",
                  title: "ar",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
              },
            }),
            about: group({
              title: "About",
              icon: "i-icon-to-display",
              fields: {
                en: field({
                  type: "string",
                  title: "en",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
                ar: field({
                  type: "string",
                  title: "ar",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
              },
            }),
            gallery: group({
              title: "Gallery",
              icon: "i-icon-to-display",
              fields: {
                en: field({
                  type: "string",
                  title: "en",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
                ar: field({
                  type: "string",
                  title: "ar",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
              },
            }),
            contact: group({
              title: "Contact",
              icon: "i-icon-to-display",
              fields: {
                en: field({
                  type: "string",
                  title: "en",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
                ar: field({
                  type: "string",
                  title: "ar",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
              },
            }),
          },
        }),
        homePage: group({
          title: "Home Page",
          icon: "i-icon-to-display",
          fields: {
            paragraphOne: group({
              title: "Paragraph One",
              icon: "i-icon-to-display",
              fields: {
                en: field({
                  type: "string",
                  title: "en",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
                ar: field({
                  type: "string",
                  title: "ar",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
              },
            }),
            paragraphTwo: group({
              title: "Paragraph Two",
              icon: "i-icon-to-display",
              fields: {
                en: field({
                  type: "string",
                  title: "en",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
                ar: field({
                  type: "string",
                  title: "ar",
                  default: "Default value",
                  icon: "i-icon-to-display",
                }),
              },
            }),
          },
        }),
      },
    }),
  },
});
