export default {
  name: 'philosopher',
  title: 'Philosopher',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'greekName',
      title: 'Greek / Arabic Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'era',
      title: 'Era',
      type: 'string',
      options: {
        list: [
          {title: 'Ancient', value: 'ancient'},
          {title: 'Perennialist', value: 'perennialist'},
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'lifespan',
      title: 'Lifespan',
      type: 'string',
      description: 'e.g. c. 427 – 347 BCE',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'portraitBg',
      title: 'Portrait Gradient',
      type: 'string',
      description: 'Tailwind gradient classes, e.g. from-indigo-900 via-aegean to-blue-900',
    },
    {
      name: 'imageUrl',
      title: 'Portrait Image URL',
      type: 'url',
      description: 'URL to the philosopher portrait photo',
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          {title: 'Greek', value: 'greek'},
          {title: 'Egyptian', value: 'egyptian'},
        ],
      },
    },
    {
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      of: [{type: 'quote'}],
    },
  ],
}
