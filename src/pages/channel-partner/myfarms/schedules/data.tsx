interface Records {
    id: number;
    img_url: string;
    name: string;
    date: string;
    acre: string;
    status: string;

}

const records: Records[] = [
    {
        id: 1,
        img_url: 'http://project.testproject.in/public/assets/images/farm/tomato.png',
        name: 'Tomato',
        date: '11 jan 2021',
        acre: '45',
        status: 'Inprogress',
    },
    {
        id: 2,
        img_url: 'http://project.testproject.in/public/assets/images/farm/cabbage.png',
        name: 'Cabbage',
        date: '15 jan 2021',
        acre: '20',
        status: 'Start',
    },
    {
        id: 3,
        img_url: 'http://project.testproject.in/public/assets/images/farm/potato.png',
        name: 'Potato',
        date: '25 jan 2021',
        acre: '23',
        status: 'Upcoming',
    },
    {
        id: 4,
        img_url: 'http://project.testproject.in/public/assets/images/farm/bell-pepper.png',
        name: 'Bell Paper',
        date: '15 Feb 2021',
        acre: '10',
        status: 'Upcoming',
    },
    {
        id: 5,
        img_url: 'http://project.testproject.in/public/assets/images/farm/carrot.png',
        name: 'Carrot',
        date: '20 Feb 2021',
        acre: '30',
        status: 'Upcoming',
    },
    {
        id: 6,
        img_url: 'http://project.testproject.in/public/assets/images/farm/pumpkin.png',
        name: 'Pumpkin',
        date: '25 Feb 2021',
        acre: '40',
        status: 'Upcoming',
    },
    {
        id: 6,
        img_url: 'http://project.testproject.in/public/assets/images/farm/pumpkin.png',
        name: 'Pumpkin',
        date: '28 Feb 2021',
        acre: '90',
        status: 'Cancelled',
    },
];

export { records };
