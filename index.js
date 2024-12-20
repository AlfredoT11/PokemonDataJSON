const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());

const JSONString = `[
    {
        "abilities": [
            "Overgrow"
        ],
        "detailPageURL": "/us/pokedex/bulbasaur",
        "weight": 15.2,
        "weakness": [
            "Fire",
            "Psychic",
            "Flying",
            "Ice"
        ],
        "number": "001",
        "height": 28,
        "collectibles_slug": "bulbasaur",
        "featured": "true",
        "slug": "bulbasaur",
        "name": "Bulbasaur",
        "ThumbnailAltText": "Bulbasaur",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        "id": 1,
        "type": [
            "grass",
            "poison"
        ]
    },
    {
        "abilities": [
            "Overgrow"
        ],
        "detailPageURL": "/us/pokedex/ivysaur",
        "weight": 28.7,
        "weakness": [
            "Fire",
            "Psychic",
            "Flying",
            "Ice"
        ],
        "number": "002",
        "height": 39,
        "collectibles_slug": "ivysaur",
        "featured": "true",
        "slug": "ivysaur",
        "name": "Ivysaur",
        "ThumbnailAltText": "Ivysaur",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
        "id": 2,
        "type": [
            "grass",
            "poison"
        ]
    },
    {
        "abilities": [
            "Overgrow"
        ],
        "detailPageURL": "/us/pokedex/venusaur",
        "weight": 9999,
        "weakness": [
            "Fire",
            "Psychic",
            "Flying",
            "Ice"
        ],
        "number": "003",
        "height": 945,
        "collectibles_slug": "venusaur",
        "featured": "true",
        "slug": "venusaur",
        "name": "Venusaur",
        "ThumbnailAltText": "Venusaur",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
        "id": 3,
        "type": [
            "grass",
            "poison"
        ]
    },
    {
        "abilities": [
            "Thick Fat"
        ],
        "detailPageURL": "/us/pokedex/venusaur",
        "weight": 342.8,
        "weakness": [
            "Fire",
            "Psychic",
            "Flying",
            "Ice"
        ],
        "number": "003",
        "height": 94,
        "collectibles_slug": "venusaur",
        "featured": "true",
        "slug": "venusaur",
        "name": "Venusaur",
        "ThumbnailAltText": "Venusaur",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
        "id": 3,
        "type": [
            "grass",
            "poison"
        ]
    },
    {
        "abilities": [
            "Overgrow"
        ],
        "detailPageURL": "/us/pokedex/venusaur",
        "weight": 220.5,
        "weakness": [
            "Fire",
            "Psychic",
            "Flying",
            "Ice"
        ],
        "number": "003",
        "height": 79,
        "collectibles_slug": "venusaur",
        "featured": "true",
        "slug": "venusaur",
        "name": "Venusaur",
        "ThumbnailAltText": "Venusaur",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
        "id": 3,
        "type": [
            "grass",
            "poison"
        ]
    },
    {
        "abilities": [
            "Blaze"
        ],
        "detailPageURL": "/us/pokedex/charmander",
        "weight": 18.7,
        "weakness": [
            "Water",
            "Ground",
            "Rock"
        ],
        "number": "004",
        "height": 24,
        "collectibles_slug": "charmander",
        "featured": "true",
        "slug": "charmander",
        "name": "Charmander",
        "ThumbnailAltText": "Charmander",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        "id": 4,
        "type": [
            "fire"
        ]
    },
    {
        "abilities": [
            "Blaze"
        ],
        "detailPageURL": "/us/pokedex/charmeleon",
        "weight": 41.9,
        "weakness": [
            "Water",
            "Ground",
            "Rock"
        ],
        "number": "005",
        "height": 43,
        "collectibles_slug": "charmeleon",
        "featured": "true",
        "slug": "charmeleon",
        "name": "Charmeleon",
        "ThumbnailAltText": "Charmeleon",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
        "id": 5,
        "type": [
            "fire"
        ]
    },
    {
        "abilities": [
            "Blaze"
        ],
        "detailPageURL": "/us/pokedex/charizard",
        "weight": 9999,
        "weakness": [
            "Water",
            "Electric",
            "Rock"
        ],
        "number": "006",
        "height": 1102,
        "collectibles_slug": "charizard",
        "featured": "true",
        "slug": "charizard",
        "name": "Charizard",
        "ThumbnailAltText": "Charizard",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
        "id": 6,
        "type": [
            "fire",
            "flying"
        ]
    },
    {
        "abilities": [
            "Drought"
        ],
        "detailPageURL": "/us/pokedex/charizard",
        "weight": 221.6,
        "weakness": [
            "Water",
            "Electric",
            "Rock"
        ],
        "number": "006",
        "height": 67,
        "collectibles_slug": "charizard",
        "featured": "true",
        "slug": "charizard",
        "name": "Charizard",
        "ThumbnailAltText": "Charizard",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
        "id": 6,
        "type": [
            "fire",
            "flying"
        ]
    },
    {
        "abilities": [
            "Tough Claws"
        ],
        "detailPageURL": "/us/pokedex/charizard",
        "weight": 243.6,
        "weakness": [
            "Ground",
            "Rock",
            "Dragon"
        ],
        "number": "006",
        "height": 67,
        "collectibles_slug": "charizard",
        "featured": "true",
        "slug": "charizard",
        "name": "Charizard",
        "ThumbnailAltText": "Charizard",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
        "id": 6,
        "type": [
            "fire",
            "dragon"
        ]
    },
    {
        "abilities": [
            "Blaze"
        ],
        "detailPageURL": "/us/pokedex/charizard",
        "weight": 199.5,
        "weakness": [
            "Water",
            "Electric",
            "Rock"
        ],
        "number": "006",
        "height": 67,
        "collectibles_slug": "charizard",
        "featured": "true",
        "slug": "charizard",
        "name": "Charizard",
        "ThumbnailAltText": "Charizard",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
        "id": 6,
        "type": [
            "fire",
            "flying"
        ]
    },
    {
        "abilities": [
            "Torrent"
        ],
        "detailPageURL": "/us/pokedex/squirtle",
        "weight": 19.8,
        "weakness": [
            "Grass",
            "Electric"
        ],
        "number": "007",
        "height": 20,
        "collectibles_slug": "squirtle",
        "featured": "true",
        "slug": "squirtle",
        "name": "Squirtle",
        "ThumbnailAltText": "Squirtle",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        "id": 7,
        "type": [
            "water"
        ]
    },
    {
        "abilities": [
            "Torrent"
        ],
        "detailPageURL": "/us/pokedex/wartortle",
        "weight": 49.6,
        "weakness": [
            "Grass",
            "Electric"
        ],
        "number": "008",
        "height": 39,
        "collectibles_slug": "wartortle",
        "featured": "true",
        "slug": "wartortle",
        "name": "Wartortle",
        "ThumbnailAltText": "Wartortle",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
        "id": 8,
        "type": [
            "water"
        ]
    },
    {
        "abilities": [
            "Torrent"
        ],
        "detailPageURL": "/us/pokedex/blastoise",
        "weight": 9999,
        "weakness": [
            "Grass",
            "Electric"
        ],
        "number": "009",
        "height": 984,
        "collectibles_slug": "blastoise",
        "featured": "true",
        "slug": "blastoise",
        "name": "Blastoise",
        "ThumbnailAltText": "Blastoise",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
        "id": 9,
        "type": [
            "water"
        ]
    },
    {
        "abilities": [
            "Mega Launcher"
        ],
        "detailPageURL": "/us/pokedex/blastoise",
        "weight": 222.9,
        "weakness": [
            "Grass",
            "Electric"
        ],
        "number": "009",
        "height": 63,
        "collectibles_slug": "blastoise",
        "featured": "true",
        "slug": "blastoise",
        "name": "Blastoise",
        "ThumbnailAltText": "Blastoise",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
        "id": 9,
        "type": [
            "water"
        ]
    },
    {
        "abilities": [
            "Torrent"
        ],
        "detailPageURL": "/us/pokedex/blastoise",
        "weight": 188.5,
        "weakness": [
            "Grass",
            "Electric"
        ],
        "number": "009",
        "height": 63,
        "collectibles_slug": "blastoise",
        "featured": "true",
        "slug": "blastoise",
        "name": "Blastoise",
        "ThumbnailAltText": "Blastoise",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
        "id": 9,
        "type": [
            "water"
        ]
    },
    {
        "abilities": [
            "Shield Dust"
        ],
        "detailPageURL": "/us/pokedex/caterpie",
        "weight": 6.4,
        "weakness": [
            "Fire",
            "Flying",
            "Rock"
        ],
        "number": "010",
        "height": 12,
        "collectibles_slug": "caterpie",
        "featured": "true",
        "slug": "caterpie",
        "name": "Caterpie",
        "ThumbnailAltText": "Caterpie",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
        "id": 10,
        "type": [
            "bug"
        ]
    },
    {
        "abilities": [
            "Shed Skin"
        ],
        "detailPageURL": "/us/pokedex/metapod",
        "weight": 21.8,
        "weakness": [
            "Fire",
            "Flying",
            "Rock"
        ],
        "number": "011",
        "height": 28,
        "collectibles_slug": "metapod",
        "featured": "true",
        "slug": "metapod",
        "name": "Metapod",
        "ThumbnailAltText": "Metapod",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png",
        "id": 11,
        "type": [
            "bug"
        ]
    },
    {
        "abilities": [
            "Compound Eyes"
        ],
        "detailPageURL": "/us/pokedex/butterfree",
        "weight": 9999,
        "weakness": [
            "Fire",
            "Flying",
            "Electric",
            "Ice",
            "Rock"
        ],
        "number": "012",
        "height": 669,
        "collectibles_slug": "butterfree",
        "featured": "true",
        "slug": "butterfree",
        "name": "Butterfree",
        "ThumbnailAltText": "Butterfree",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
        "id": 12,
        "type": [
            "bug",
            "flying"
        ]
    },
    {
        "abilities": [
            "Compound Eyes"
        ],
        "detailPageURL": "/us/pokedex/butterfree",
        "weight": 70.5,
        "weakness": [
            "Fire",
            "Flying",
            "Electric",
            "Ice",
            "Rock"
        ],
        "number": "012",
        "height": 43,
        "collectibles_slug": "butterfree",
        "featured": "true",
        "slug": "butterfree",
        "name": "Butterfree",
        "ThumbnailAltText": "Butterfree",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
        "id": 12,
        "type": [
            "bug",
            "flying"
        ]
    },
    {
        "abilities": [
            "Shield Dust"
        ],
        "detailPageURL": "/us/pokedex/weedle",
        "weight": 7.1,
        "weakness": [
            "Fire",
            "Psychic",
            "Flying",
            "Rock"
        ],
        "number": "013",
        "height": 12,
        "collectibles_slug": "weedle",
        "featured": "true",
        "slug": "weedle",
        "name": "Weedle",
        "ThumbnailAltText": "Weedle",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
        "id": 13,
        "type": [
            "bug",
            "poison"
        ]
    },
    {
        "abilities": [
            "Shed Skin"
        ],
        "detailPageURL": "/us/pokedex/kakuna",
        "weight": 22,
        "weakness": [
            "Fire",
            "Psychic",
            "Flying",
            "Rock"
        ],
        "number": "014",
        "height": 24,
        "collectibles_slug": "kakuna",
        "featured": "true",
        "slug": "kakuna",
        "name": "Kakuna",
        "ThumbnailAltText": "Kakuna",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png",
        "id": 14,
        "type": [
            "bug",
            "poison"
        ]
    },
    {
        "abilities": [
            "Adaptability"
        ],
        "detailPageURL": "/us/pokedex/beedrill",
        "weight": 89.3,
        "weakness": [
            "Fire",
            "Psychic",
            "Flying",
            "Rock"
        ],
        "number": "015",
        "height": 55,
        "collectibles_slug": "beedrill",
        "featured": "true",
        "slug": "beedrill",
        "name": "Beedrill",
        "ThumbnailAltText": "Beedrill",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png",
        "id": 15,
        "type": [
            "bug",
            "poison"
        ]
    },
    {
        "abilities": [
            "Swarm"
        ],
        "detailPageURL": "/us/pokedex/beedrill",
        "weight": 65,
        "weakness": [
            "Fire",
            "Psychic",
            "Flying",
            "Rock"
        ],
        "number": "015",
        "height": 39,
        "collectibles_slug": "beedrill",
        "featured": "true",
        "slug": "beedrill",
        "name": "Beedrill",
        "ThumbnailAltText": "Beedrill",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png",
        "id": 15,
        "type": [
            "bug",
            "poison"
        ]
    },
    {
        "abilities": [
            "Keen Eye",
            "Tangled Feet"
        ],
        "detailPageURL": "/us/pokedex/pidgey",
        "weight": 4,
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "number": "016",
        "height": 12,
        "collectibles_slug": "pidgey",
        "featured": "true",
        "slug": "pidgey",
        "name": "Pidgey",
        "ThumbnailAltText": "Pidgey",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
        "id": 16,
        "type": [
            "normal",
            "flying"
        ]
    },
    {
        "abilities": [
            "Keen Eye",
            "Tangled Feet"
        ],
        "detailPageURL": "/us/pokedex/pidgeotto",
        "weight": 66.1,
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "number": "017",
        "height": 43,
        "collectibles_slug": "pidgeotto",
        "featured": "true",
        "slug": "pidgeotto",
        "name": "Pidgeotto",
        "ThumbnailAltText": "Pidgeotto",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png",
        "id": 17,
        "type": [
            "normal",
            "flying"
        ]
    },
    {
        "abilities": [
            "No Guard"
        ],
        "detailPageURL": "/us/pokedex/pidgeot",
        "weight": 111.3,
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "number": "018",
        "height": 87,
        "collectibles_slug": "pidgeot",
        "featured": "true",
        "slug": "pidgeot",
        "name": "Pidgeot",
        "ThumbnailAltText": "Pidgeot",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png",
        "id": 18,
        "type": [
            "normal",
            "flying"
        ]
    },
    {
        "abilities": [
            "Keen Eye",
            "Tangled Feet"
        ],
        "detailPageURL": "/us/pokedex/pidgeot",
        "weight": 87.1,
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "number": "018",
        "height": 59,
        "collectibles_slug": "pidgeot",
        "featured": "true",
        "slug": "pidgeot",
        "name": "Pidgeot",
        "ThumbnailAltText": "Pidgeot",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png",
        "id": 18,
        "type": [
            "normal",
            "flying"
        ]
    },
    {
        "abilities": [
            "Gluttony",
            "Hustle"
        ],
        "detailPageURL": "/us/pokedex/rattata",
        "weight": 8.4,
        "weakness": [
            "Fairy",
            "Bug",
            "Fighting"
        ],
        "number": "019",
        "height": 12,
        "collectibles_slug": "rattata",
        "featured": "true",
        "slug": "rattata",
        "name": "Rattata",
        "ThumbnailAltText": "Rattata",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
        "id": 19,
        "type": [
            "dark",
            "normal"
        ]
    },
    {
        "abilities": [
            "Guts",
            "Run Away"
        ],
        "detailPageURL": "/us/pokedex/rattata",
        "weight": 7.7,
        "weakness": [
            "Fighting"
        ],
        "number": "019",
        "height": 12,
        "collectibles_slug": "rattata",
        "featured": "true",
        "slug": "rattata",
        "name": "Rattata",
        "ThumbnailAltText": "Rattata",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
        "id": 19,
        "type": [
            "normal"
        ]
    },
    {
        "abilities": [
            "Gluttony",
            "Hustle"
        ],
        "detailPageURL": "/us/pokedex/raticate",
        "weight": 56.2,
        "weakness": [
            "Fairy",
            "Bug",
            "Fighting"
        ],
        "number": "020",
        "height": 28,
        "collectibles_slug": "raticate",
        "featured": "true",
        "slug": "raticate",
        "name": "Raticate",
        "ThumbnailAltText": "Raticate",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png",
        "id": 20,
        "type": [
            "dark",
            "normal"
        ]
    },
    {
        "abilities": [
            "Guts",
            "Run Away"
        ],
        "detailPageURL": "/us/pokedex/raticate",
        "weight": 40.8,
        "weakness": [
            "Fighting"
        ],
        "number": "020",
        "height": 28,
        "collectibles_slug": "raticate",
        "featured": "true",
        "slug": "raticate",
        "name": "Raticate",
        "ThumbnailAltText": "Raticate",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png",
        "id": 20,
        "type": [
            "normal"
        ]
    },
    {
        "abilities": [
            "Keen Eye"
        ],
        "detailPageURL": "/us/pokedex/spearow",
        "weight": 4.4,
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "number": "021",
        "height": 12,
        "collectibles_slug": "spearow",
        "featured": "true",
        "slug": "spearow",
        "name": "Spearow",
        "ThumbnailAltText": "Spearow",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
        "id": 21,
        "type": [
            "normal",
            "flying"
        ]
    },
    {
        "abilities": [
            "Keen Eye"
        ],
        "detailPageURL": "/us/pokedex/fearow",
        "weight": 83.8,
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "number": "022",
        "height": 47,
        "collectibles_slug": "fearow",
        "featured": "true",
        "slug": "fearow",
        "name": "Fearow",
        "ThumbnailAltText": "Fearow",
        "ThumbnailImage": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png",
        "id": 22,
        "type": [
            "normal",
            "flying"
        ]
    }
]`;

// Endpoint para devolver un JSON
app.get('/api/data', (req, res) => {
    res.append('Content-type', 'application/json');
    res.status(200);
    res.json({
        status: 200,
        data: JSON.parse(JSONString)
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});