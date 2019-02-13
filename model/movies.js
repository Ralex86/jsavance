const movies = [
    {
        id: 1,
        title: "Fantastic Beasts: The Crimes of Grindelwald",
        year: 2018,
        language: 'Anglais',
        director: {
            name: "David Yates",
            nationality: "Britannique",
            birthdate: "1963-11-30"
        },
        poster: null,
        genre: 'Fantastique',
        ratings: [4, 3, 3]
    },
    {
        id: 2,
        title: "Titanic",
        year: 1997,
        language: 'Anglais',
        director: {
            name: "James Cameron",
            nationality: "Canadien",
            birthdate: "1954-08-16"
        },
        poster: null,
        genre: 'Historique',
        ratings: [5, 4]
    },
    {
        id: 3,
        title: "Interstellar",
        year: 2014,
        language: 'Anglais',
        director: {
            name: "Christopher Nolan",
            nationality: "Britannique",
            birthdate: "1970-07-30"
        },
        poster: null,
        genre: 'Science-fiction',
        ratings: [5, 5, 5, 5]
    }
];

module.exports.movies = movies
