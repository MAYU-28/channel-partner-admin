export interface ProductItemTypes {
    id: number;
    product: string;
    cropname: string;
    size: string;
    image: string;
    category: string;
    added_date: string;
    rating: number;
    price: string;
    quantity: string;
    status: string;
}

export interface OrdersItemTypes {
    id: number;
    billing_name: string;
    order_id: string;
    order_date: string;
    order_time: string;
    payment_status: string;
    total: string;
    payment_method: string;
    order_status: string;
}

interface CustomersItemTypes {
    id: string;
    name: string;
    phone: string;
    balance: string;
    orders: number;
    last_order: string;
    avatar?: string;
    status: string;
}

export interface SellersItemTypes {
    id: number;
    name: string;
    store: string;
    products: number;
    balance: string;
    revenue: string;
    image?: string;
}

export interface CartItemTypes {
    id: number;
    image: string;
    name: string;
    size: string;
    color: string;
    price: number;
    qty: number;
    total: number;
}

const products: ProductItemTypes[] = [
    {
        id: 1,
        product: 'Balaji Fertilizer',
        cropname: 'Tomato',
        size: '2 Acre',
        image: 'http://project.testproject.in/public/assets/images/products/bag.jpeg',
        rating: 4.9,
        category: 'Fertilizer',
        added_date: '09 Mar, 2022',
        price: '300 ₹',
        quantity: '4000kg',
        status: 'Active',
    },
    {
        id: 2,
        product: 'Balaji Fertilizer',
        cropname: 'Tomato',
        size: '2 Acre',
        image: 'http://project.testproject.in/public/assets/images/products/bag.jpeg',
        rating: 4.9,
        category: 'Fertilizer',
        added_date: '09 Mar, 2022',
        price: '300 ₹',
        quantity: '4000kg',
        status: 'Active',
    },
    {
        id: 3,
        product: 'Balaji Fertilizer',
        cropname: 'Tomato',
        size: '2 Acre',
        image: 'http://project.testproject.in/public/assets/images/products/bag.jpeg',
        rating: 4.9,
        category: 'Fertilizer',
        added_date: '09 Mar, 2022',
        price: '300 ₹',
        quantity: '4000kg',
        status: 'Active',
    },
    {
        id: 1,
        product: 'Balaji Fertilizer',
        cropname: 'Tomato',
        size: '2 Acre',
        image: 'http://project.testproject.in/public/assets/images/products/bag.jpeg',
        rating: 4.9,
        category: 'Fertilizer',
        added_date: '09 Mar, 2022',
        price: '300 ₹',
        quantity: '4000kg',
        status: 'Active',
    },
    {
        id: 4,
        product: 'Balaji Fertilizer',
        cropname: 'Tomato',
        size: '2 Acre',
        image: 'http://project.testproject.in/public/assets/images/products/bag.jpeg',
        rating: 4.9,
        category: 'Fertilizer',
        added_date: '09 Mar, 2022',
        price: '300 ₹',
        quantity: '4000kg',
        status: 'Active',
    },
    {
        id: 1,
        product: 'Balaji Fertilizer',
        cropname: 'Tomato',
        size: '2 Acre',
        image: 'http://project.testproject.in/public/assets/images/products/bag.jpeg',
        rating: 4.9,
        category: 'Fertilizer',
        added_date: '09 Mar, 2022',
        price: '300 ₹',
        quantity: '4000kg',
        status: 'Active',
    },
    {
        id: 5,
        product: 'Balaji Fertilizer',
        cropname: 'Tomato',
        size: '2 Acre',
        image: 'http://project.testproject.in/public/assets/images/products/bag.jpeg',
        rating: 4.9,
        category: 'Fertilizer',
        added_date: '09 Mar, 2022',
        price: '300 ₹',
        quantity: '4000kg',
        status: 'Active',
    },
    {
        id: 6,
        product: 'Balaji Fertilizer',
        cropname: 'Tomato',
        size: '2 Acre',
        image: 'http://project.testproject.in/public/assets/images/products/bag.jpeg',
        rating: 4.9,
        category: 'Fertilizer',
        added_date: '09 Mar, 2022',
        price: '300 ₹',
        quantity: '4000kg',
        status: 'Active',
    },
    {
        id: 7,
        product: 'Balaji Fertilizer',
        cropname: 'Tomato',
        size: '2 Acre',
        image: 'http://project.testproject.in/public/assets/images/products/bag.jpeg',
        rating: 4.9,
        category: 'Fertilizer',
        added_date: '09 Mar, 2022',
        price: '300 ₹',
        quantity: '4000kg',
        status: 'Active',
    },
    {
        id: 8,
        product: 'Balaji Fertilizer',
        cropname: 'Tomato',
        size: '2 Acre',
        image: 'http://project.testproject.in/public/assets/images/products/bag.jpeg',
        rating: 4.9,
        category: 'Fertilizer',
        added_date: '09 Mar, 2022',
        price: '300 ₹',
        quantity: '4000kg',
        status: 'Active',
    },
    {
        id: 9,
        product: 'Balaji Fertilizer',
        cropname: 'Tomato',
        size: '2 Acre',
        image: 'http://project.testproject.in/public/assets/images/products/bag.jpeg',
        rating: 4.9,
        category: 'Fertilizer',
        added_date: '09 Mar, 2022',
        price: '300 ₹',
        quantity: '4000kg',
        status: 'Active',
    },
];

export { products};
