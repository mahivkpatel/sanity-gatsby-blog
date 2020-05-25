export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ecb80bb51f1bcb5a56114c5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5cxxgzbm',
                  apiId: '5468bb9e-9bf6-4484-b811-def8493a42cb'
                },
                {
                  buildHookId: '5ecb80bcc16d84d45f50e1dd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mzh3vm75',
                  apiId: 'cc24876b-ee5e-4132-b906-8b7bab1ab7c1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mahivkpatel/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mzh3vm75.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
