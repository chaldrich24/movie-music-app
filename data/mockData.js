const users = [
    {
        id: '1',
        username: 'phenom',
        email: 'phenom@site.com',
        movies: {
            top: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                }
            ],
            lists: [
                {
                    title: 'Love',
                    movies: [
                        {
                            id: '3'
                        }
                    ]
                }
            ]
        },
        music: {
            top: [
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: '3'
                },
                {
                    id: '4'
                },
                {
                    id: '5'
                }
            ],
            lists: [
                {
                    title: 'Love',
                    movies: [
                        {
                            id: '3'
                        }
                    ]
                }
            ]
        }
    }
];

const movies = [
    {
        id: '1',
        title: 'Shrek 2',
        imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg'
    },
    {
        id: '2',
        title: "Schindler's List",
        imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg'
    },
    {
        id: '3',
        title: 'Hancock',
        imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7DyuV2G0hLEqHeueDfOqhZ2DVut.jpg'
    },
    {
        id: '4',
        title: 'Mission: Impossible 3',
        imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/34FTDjzLX3rmPq5wpuLgQseD5Yz.jpg'
    },
    {
        id: '5',
        title: 'Leon the Professional',
        imageUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yI6X2cCM5YPJtxMhUd3dPGqDAhw.jpg'
    },
]

const music = [
    {
        id: '1',
        title: 'Revolver',
        artist: 'The Beatles',
        imageUrl: 'https://lastfm.freetls.fastly.net/i/u/770x0/deaec2d4735bea0d1c45fc75261624ae.jpg#deaec2d4735bea0d1c45fc75261624ae'
    },
    {
        id: '2',
        title: 'Starboy',
        artist: 'The Weeknd',
        imageUrl: 'https://lastfm.freetls.fastly.net/i/u/770x0/2eff583c50e9ebe32857ca8bedbd25bd.jpg#2eff583c50e9ebe32857ca8bedbd25bd'
    },
    {
        id: '3',
        title: "That's What They All Say",
        artist: 'Jack Harlow',
        imageUrl: 'https://lastfm.freetls.fastly.net/i/u/770x0/7ae2a7b346d1471d934dfd033e5fdf53.jpg#7ae2a7b346d1471d934dfd033e5fdf53'
    },
    {
        id: '4',
        title: 'Random Access Memories',
        artist: 'Daft Punk',
        imageUrl: 'https://lastfm.freetls.fastly.net/i/u/770x0/11dd7e48a1f042c688bf54985f01d088.jpg#11dd7e48a1f042c688bf54985f01d088'
    },
    {
        id: '5',
        title: 'Best of Beethoven',
        artist: 'Ludwig van Beethoven',
        imageUrl: 'https://lastfm.freetls.fastly.net/i/u/770x0/c3dfc58692a27569eede3783e2545c23.jpg#c3dfc58692a27569eede3783e2545c23'
    },
]

export default {music, movies, users};