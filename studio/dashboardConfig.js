export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec928ea45228a853e7992fb',
                  title: 'Sanity Studio',
                  name: 'bruiloft-content-studio',
                  apiId: '7a3993ec-b429-48b6-8726-319a2d979546'
                },
                {
                  buildHookId: '5ec928eac94566501b5a1ba0',
                  title: 'Blog Website',
                  name: 'bruiloft-content',
                  apiId: '24418c48-ca4a-4a05-a83e-976293607992'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Pluzu/bruiloft-content',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bruiloft-content.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
