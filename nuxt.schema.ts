import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    Language: group({
      title: 'Parent title',
      icon: 'i-icon-to-display',
      fields: {
        homePage: group({
          title: 'Home Page',
          icon: 'i-icon-to-display',
          fields: {
            paragraphOne: group({
              title: 'Paragraph One',
              icon: 'i-icon-to-display',
              fields: {
                en: field({
                  type: 'string',
                  title: 'en',
                  default: 'Default value',
                  icon: 'i-icon-to-display',
                }),
                ar: field({
                  type: 'string',
                  title: 'ar',
                  default: 'Default value',
                  icon: 'i-icon-to-display',
                })
              }
            }),
            paragraphTwo: group({
              title: 'Paragraph Two',
              icon: 'i-icon-to-display',
              fields: {
                en: field({
                  type: 'string',
                  title: 'en',
                  default: 'Default value',
                  icon: 'i-icon-to-display',
                }),
                ar: field({
                  type: 'string',
                  title: 'ar',
                  default: 'Default value',
                  icon: 'i-icon-to-display',
                })
              }
            })
          }
        })
      }

      // fields: {
      //   homePage: field({
      //     type: 'object',
      //     title: 'Home Page',
      //     icon: 'i-icon-to-display',
      //     fields: {
      //       paragraphOne: field({
      //         type: 'object',
      //         title: 'Field title',
      //         icon: 'i-icon-to-display',
      //         fields: {
      //           en: field({
      //             type: 'object',
      //             title: 'Field title',
      //             description: 'Field description',
      //             default: 'Default value',
      //             icon: 'i-icon-to-display',
      //           }),
      //           ar: field({
      //             type: 'object',
      //             title: 'Field title',
      //             description: 'Field description',
      //             default: 'Default value',
      //             icon: 'i-icon-to-display',
      //           })
      //         }
      //       }),
      //       paragraphTwo: field({
      //         type: 'object',
      //         title: 'Field title',
      //         icon: 'i-icon-to-display',
      //         fields: {
      //           en: field({
      //             type: 'object',
      //             title: 'Field title',
      //             description: 'Field description',
      //             default: 'Default value',
      //             icon: 'i-icon-to-display',
      //           }),
      //           ar: field({
      //             type: 'object',
      //             title: 'Field title',
      //             description: 'Field description',
      //             default: 'Default value',
      //             icon: 'i-icon-to-display',
      //           })
      //         }
      //       })
      //     }
      //   })
      // }
    })
  }
})
