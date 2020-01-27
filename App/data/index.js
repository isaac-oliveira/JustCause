export const employee = {
    token: 'token',
    user: {
        name: 'Fran Moura',
        rule: 'garcom',
    },
};

export const tables = [
    {
        id: '1',
        tableNumber: 1,
        statusTable: true,
    },
    {
        id: '2',
        tableNumber: 2,
        statusTable: false,
    },
    {
        id: '3',
        tableNumber: 3,
        statusTable: false,
    },
    {
        id: '4',
        tableNumber: 4,
        statusTable: true,
    },
];

export const requests = [
    {
        id: '1',
        number: 1,
        request: 'Pizza Grande, Coca Cola...',
        value: 54.9,
    },
];

export const requestsItem = [
    {
        id: '1',
        number: 1,
        request: 'Pizza Grande: camarão...',
        value: 54.9,
    },
];

export const categories = [
    {
        id: '1',
        url: '../assets/pizza.jpg',
        title: 'Pizza',
    },
];

export const groups = [
    {
        id: '1',
        title: 'Tamanho',
        data: [
            {
                id: '1',
                title: 'Família',
                active: true,
            },
            {
                id: '2',
                title: 'Grande',
                active: false,
            },
            {
                id: '3',
                title: 'Média',
                active: false,
            },
            {
                id: '4',
                title: 'Pequena',
                active: false,
            },
        ],
    },
    {
        id: '2',
        title: 'Borda',
        data: [
            {
                id: '1',
                title: 'Catupiry',
                active: false,
            },
            {
                id: '2',
                title: 'Cheddar',
                active: true,
            },
            {
                id: '3',
                title: 'Toscana',
                active: false,
            },
        ],
    },
];
