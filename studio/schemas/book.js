export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'philosopher'}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Metaphysical Description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'complexity',
      title: 'Complexity Level',
      type: 'string',
      options: {
        list: [
          {title: 'Introductory', value: 'introductory'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'},
          {title: 'Esoteric', value: 'esoteric'},
        ],
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
      name: 'coverUrl',
      title: 'Cover Image URL',
      type: 'url',
      description: 'URL to the ancient-themed cover image',
    },
    {
      name: 'pdfUrl',
      title: 'PDF / Read URL',
      type: 'url',
      description: 'Link to the full text (Gutenberg, Archive.org, or PDF)',
    },
    {
      name: 'pages',
      title: 'Pages',
      type: 'number',
    },
  ],
}
