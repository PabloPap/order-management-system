const orders = [
  {
    id: 1,
    title: 'Power tools',
    slug: 'power-tools',
    orderId: 249500,
    status: 1,
  },
  {
    id: 2,
    title: 'Fishing equipment',
    slug: 'fishing-equipment',
    orderId: 149348,
    status: 1,
  },
  {
    id: 3,
    title: 'Antique furniture',
    slug: 'antique-furniture',
    orderId: 495856,
    status: 3,
  },
  {
    id: 4,
    title: 'Smart watch',
    slug: 'smart-watch',
    orderId: 617985,
    status: 2,
  },
  {
    id: 5,
    title: 'Mountain bike',
    slug: 'Mountain-bike',
    orderId: 906854,
    status: 1,
  },
  {
    id: 6,
    title: 'Hiking backpacks',
    slug: 'hiking-backpacks',
    orderId: 857343,
    status: 3,
  },
  {
    id: 7,
    title: 'Folding wallets',
    slug: 'folding-wallets',
    orderId: 338495,
    status: 2,
  },
  {
    id: 8,
    title: 'Gaming chair',
    slug: 'gaming-chair',
    orderId: 485908,
    status: 2,
  },
  {
    id: 9,
    title: 'Smart tv',
    slug: 'smart-tv',
    orderId: 889586,
    status: 2,
  },
  {
    id: 10,
    title: 'Power supply adapter',
    slug: 'power-supply-adapter',
    orderId: 908489,
    status: 1,
  },
];

const statusAll = [
  { id: 1, name: 'Pending' },
  { id: 2, name: 'Completed' },
  { id: 3, name: 'Cancelled' },
];

const newOrder = {
  id: null,
  title: '',
  orderId: null,
  status: null,
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newOrder,
  statusAll,
  orders,
};