export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Quote Text',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'e.g. The Republic, Apology',
    },
    {
      name: 'context',
      title: 'Context',
      type: 'string',
      description: 'e.g. On the nature of wisdom',
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'source',
    },
  },
}
