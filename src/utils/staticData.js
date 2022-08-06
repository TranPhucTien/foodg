import slider2 from '../assets/images/Home/banner-nd.jpg';
import slider3 from '../assets/images/Home/banner-rd.jpg';
import slider1 from '../assets/images/Home/banner-st.jpg';
import {
    ArrowOne,
    ArrowSecond,
    ArrowThree,
    ProductFour,
    ProductOne,
    ProductThree,
    ProductTwo,
    ReviewOne,
    ReviewThree,
    ReviewTwo,
    StepFour,
    StepOne,
    StepThree,
    StepTwo,
} from './homeImages';

import { Beef, Burger, Chicken, Coffee, Dinner, Juice, Lunch, Pork, Tea } from './homeSvgs';

// home
const sliderInfo = [
    {
        img: slider1,
        subTitle: 'ENJOY YOUR ME',
        title: 'Good food is wise',
        titlePrimary: 'medicine',
    },

    {
        img: slider2,
        subTitle: 'HAPPY YOUR SPECIAL',
        title: 'Love at first',
        titlePrimary: 'bite',
    },

    {
        img: slider3,
        subTitle: 'GOOD FOOD IS GOOD MOOD',
        title: 'The belly rules the',
        titlePrimary: 'mind',
    },
];

const homeWorkData = [
    {
        img: StepOne,
        step: '1',
        content: 'Choose Your Favorite',
        arrow: ArrowOne,
    },
    {
        img: StepTwo,
        step: '2',
        content: 'We Deliver Your Meals',
        arrow: ArrowSecond,
    },
    {
        img: StepThree,
        step: '3',
        content: 'Cash on Delivery',
        arrow: ArrowThree,
    },
    {
        img: StepFour,
        step: '4',
        content: 'Eat And Enjoy',
    },
];

const homeIngredientsData = {
    leftData: [
        {
            title: 'Mild Butter',
            content: "Patak's Butter Chicken Mild is a creamy tomato and butter flavour curry sauce",
            order: '01',
        },
        {
            title: 'Slices Beef',
            content: 'Get quality Beef Slices at Tesco. Shop in store or online',
            order: '02',
        },
        {
            title: 'Sleek Onion',
            content: 'Green onions have a sleek linear shape with white or pale-green bulbs and long green tops',
            order: '03',
        },
    ],
    rightData: [
        {
            title: 'Fresh Bread',
            content: 'Homemade bread is more nutritious than your store-bought variety',
            order: '04',
        },
        {
            title: 'Lettuce Leaf',
            content: 'It is most often grown as a leaf vegetable, but sometimes for its stem and seeds',
            order: '05',
        },
        {
            title: 'Glow Cheese',
            content: 'Glowfood. Cheese. Is. Unreal! As a cheese fanatic',
            order: '06',
        },
    ],
};

const homeCategoryData = [
    {
        img: Burger,
        name: 'breakfast',
    },
    {
        img: Coffee,
        name: 'coffee',
    },
    {
        img: Pork,
        name: 'pork ham',
    },
    {
        img: Dinner,
        name: 'dinner',
    },
    {
        img: Tea,
        name: 'tea',
    },
    {
        img: Lunch,
        name: 'lunch',
    },
    {
        img: Juice,
        name: 'juice',
    },
    {
        img: Chicken,
        name: 'grilled chicken',
    },
    {
        img: Beef,
        name: 'roast beef',
    },
];

const homeProductsData = [
    {
        img: ProductOne,
        name: 'Crazy Burger',
        description: 'Buarning do amet contur dicivt suia non nuameius velit',
        price: '20',
    },
    {
        img: ProductTwo,
        name: 'Beefcakes Burgers',
        description: 'Buarning do amet contur dicivt suia non nuameius velit',
        price: '34',
    },
    {
        img: ProductThree,
        name: 'The Crispy Bun',
        description: 'Buarning do amet contur dicivt suia non nuameius velit',
        price: '15',
    },
    {
        img: ProductFour,
        name: 'Bugout Burgers',
        description: 'Buarning do amet contur dicivt suia non nuameius velit',
        price: '60',
    },
    {
        img: ProductOne,
        name: 'Crazy Burger',
        description: 'Buarning do amet contur dicivt suia non nuameius velit',
        price: '20',
    },
    {
        img: ProductTwo,
        name: 'Beefcakes Burgers',
        description: 'Buarning do amet contur dicivt suia non nuameius velit',
        price: '34',
    },
    {
        img: ProductThree,
        name: 'The Crispy Bun',
        description: 'Buarning do amet contur dicivt suia non nuameius velit',
        price: '15',
    },
    {
        img: ProductFour,
        name: 'Bugout Burgers',
        description: 'Buarning do amet contur dicivt suia non nuameius velit',
        price: '60',
    },
];

const homeReviewsData = [
    {
        img: ReviewOne,
        name: 'mark zuckerberg',
        role: 'Co-founding Facebook, Inc',
        comment:
            'I chose food G because of their value And incredible superior customer Service they really awesome Food with quality service Ha of their value And incredible sup with quality',
    },
    {
        img: ReviewTwo,
        name: 'Rose',
        role: 'Main vocalist of Backpink group',
        comment:
            'Had dinner with girl friends. Menu is perfect, something for everyone. Service was awesome and Jason was very accommodating. Will be back definitely!',
    },
    {
        img: ReviewThree,
        name: 'Tim Cook',
        role: 'CEO of Apple',
        comment:
            'I had lunch with some of my colleagues at Echo on Day 1. I had the wedge salad - it was delicious. On Night 2, I enjoyed a drink at the bar. I had a Margarita. The service was excellent',
    },
];

const homeAnalysisData = [
    {
        suffix: '+',
        description: 'Cups of Coffee',
        countEnd: 350,
    },
    {
        suffix: '+',
        description: 'Orders Everyday',
        countEnd: 2678,
    },
    {
        description: 'Skilled Professionals',
        countEnd: 60,
    },
    {
        description: 'Sandwichs at Hour',
        countEnd: 30,
    },
];

// detail
const detailOptions = [
    {
        content: 'Buy S size get 15 percent off',
        percentOff: 15,
        size: 'S',
    },
    {
        content: 'Buy M size get 25 percent off',
        percentOff: 25,
        size: 'M',
    },
    {
        content: 'Buy L size get 50 percent off',
        percentOff: 50,
        size: 'L',
    },
];

const detailTableData = [
    {
        title: null,
        description: 'Information',
        ingredients: 'Ingredients',
    },
    {
        title: '24',
        description: '28 cm size',
        ingredients: 'Egg',
    },
    {
        title: '728',
        description: 'Energy',
        ingredients: 'Milk Protein',
    },
    {
        title: '1054',
        description: 'Calo',
        ingredients: 'Sesame',
    },
    {
        title: '68',
        description: 'Fat',
        ingredients: 'Lactose',
    },
    {
        title: '25',
        description: 'Gluxit',
        ingredients: 'Gluten',
    },
    {
        title: '548',
        description: 'Protein',
        ingredients: 'Mustard',
    },
];

export {
    sliderInfo,
    homeWorkData,
    homeCategoryData,
    homeIngredientsData,
    homeReviewsData,
    homeProductsData,
    homeAnalysisData,
    detailTableData,
    detailOptions,
};
