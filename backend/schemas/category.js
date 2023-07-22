export default {
  title: 'Categories',
  name: 'category',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (rule) => rule.required(),
    },

    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    },

    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },

    {
      title: 'Parent Categories',
      name: 'parents',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    },
  ],

  preview: {
    select: {title: 'title', media: 'image'},
  },
}
