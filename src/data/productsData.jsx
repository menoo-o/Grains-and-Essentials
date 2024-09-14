import slugify from 'slugify';

const products = [
  {
    id: 1,
    title: 'Brown Rice',
    price: '$10',
    description: 'Healthy brown rice.',
    ingredients: ['Rice'],
    imgSrc: '/shop/rice/brown rice.webp',
    slug: slugify('Brown Rice', { lower: true }) // This generates 'brown-rice'
  },
  // More products...
];


export default products