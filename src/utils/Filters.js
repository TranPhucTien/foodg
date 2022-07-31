import { AllFood, Bbq, BestFood, Bread, Burger, Pizza, Sandwich, Chicken, Pork, Sausage } from '~/utils/shopSvgs';

const typeOptions = [
    {
        img: BestFood,
        name: 'Best food',
        type: 'best-foods',
    },
    {
        img: Burger,
        name: 'Burgers',
        type: 'burgers',
    },
    {
        img: Bread,
        name: 'Breads',
        type: 'breads',
    },
    {
        img: Sandwich,
        name: 'Sandwiches',
        type: 'sandwiches',
    },
    {
        img: Pizza,
        name: 'Pizzas',
        type: 'pizzas',
    },
    {
        img: Bbq,
        name: 'BBQ',
        type: 'bbqs',
    },
    {
        img: Chicken,
        name: 'Fried Chicken',
        type: 'fried-chicken',
    },
    {
        img: Pork,
        name: 'Porks',
        type: 'porks',
    },
    {
        img: Sausage,
        name: 'Sausage',
        type: 'sausages',
    },
    {
        img: AllFood,
        name: 'Others food',
        type: 'our-foods',
    },
];

const sortOptions = [
    { id: 3, value: 'Price: High to Low', sort: 'price', order: 'desc' },
    {
        id: 4,
        value: 'Price: Low to High',
        sort: 'price',
        order: 'asc',
    },
    { id: 1, value: 'Rate: High to Low', sort: 'rate', order: 'desc' },
    { id: 2, value: 'Rate: Low to High', sort: 'rate', order: 'asc' },
];

const priceOptions = [
    { content: 'Every price', range: {} },
    { content: 'Under $100', range: { price_lte: 100 } },
    { content: '$50 to $100', range: { price_gte: 50, price_lte: 100 } },
    { content: 'Under $50', range: { price_lte: 50 } },
    { content: 'Above $100', range: { price_gte: 100 } },
];

export { typeOptions, sortOptions, priceOptions };
