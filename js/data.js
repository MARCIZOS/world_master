/**
 * Geography Explorer Game Data
 * Contains country data, capitals, and fun facts for the game
 */

// Country data with coordinates, difficulty levels, and fun facts
const countryData = {
    // Easy level countries (large/obvious)
    easy: [
        {
            name: "United States",
            code: "US",
            bounds: [
                [24.396308, -125.000000], // Southwest corner
                [49.384358, -66.934570]   // Northeast corner
            ],
            capital: "Washington D.C.",
            funFact: "The United States has 50 states and is the world's largest economy."
        },
        {
            name: "Russia",
            code: "RU",
            bounds: [
                [41.151416, 19.638968],
                [81.856903, 179.999999]
            ],
            capital: "Moscow",
            funFact: "Russia is the largest country in the world, covering more than one-eighth of Earth's inhabited land area."
        },
        {
            name: "Brazil",
            code: "BR",
            bounds: [
                [-33.750706, -73.985535],
                [5.271841, -34.793212]
            ],
            capital: "Brasília",
            funFact: "The Amazon rainforest covers about 60% of Brazil's land area."
        },
        {
            name: "Australia",
            code: "AU",
            bounds: [
                [-43.658569, 112.911057],
                [-10.668185, 153.639252]
            ],
            capital: "Canberra",
            funFact: "Australia is the only country that is also a continent."
        },
        {
            name: "China",
            code: "CN",
            bounds: [
                [18.197700, 73.557693],
                [53.560983, 134.773911]
            ],
            capital: "Beijing",
            funFact: "The Great Wall of China is the longest wall in the world, stretching over 13,000 miles."
        },
        {
            name: "India",
            code: "IN",
            bounds: [
                [6.747139, 68.162386],
                [35.674520, 97.395555]
            ],
            capital: "New Delhi",
            funFact: "India is the world's largest democracy with over 1.3 billion people."
        },
        {
            name: "Canada",
            code: "CA",
            bounds: [
                [41.676556, -141.001875],
                [83.110626, -52.636291]
            ],
            capital: "Ottawa",
            funFact: "Canada has the longest coastline of any country in the world."
        },
        {
            name: "South Africa",
            code: "ZA",
            bounds: [
                [-34.839828, 16.458021],
                [-22.126612, 32.895660]
            ],
            capital: "Pretoria",
            funFact: "South Africa has three capital cities: Pretoria (administrative), Cape Town (legislative), and Bloemfontein (judicial)."
        },
        {
            name: "Mexico",
            code: "MX",
            bounds: [
                [14.532866, -118.365119],
                [32.718654, -86.703392]
            ],
            capital: "Mexico City",
            funFact: "Mexico is home to the world's largest pyramid by volume - the Great Pyramid of Cholula."
        },
        {
            name: "Egypt",
            code: "EG",
            bounds: [
                [22.000000, 24.700000],
                [31.670000, 36.900000]
            ],
            capital: "Cairo",
            funFact: "The Great Pyramid of Giza is the only one of the Seven Wonders of the Ancient World still standing."
        }
    ],
    
    // Medium level countries (all countries)
    medium: [
        // Including all easy countries plus more
        {
            name: "France",
            code: "FR",
            bounds: [
                [41.371582, -5.142311],
                [51.089166, 9.561556]
            ],
            capital: "Paris",
            funFact: "France is the most visited country in the world, with over 89 million tourists annually."
        },
        {
            name: "Japan",
            code: "JP",
            bounds: [
                [24.249472, 122.934570],
                [45.522755, 145.820892]
            ],
            capital: "Tokyo",
            funFact: "Japan consists of 6,852 islands."
        },
        {
            name: "Germany",
            code: "DE",
            bounds: [
                [47.270111, 5.866342],
                [55.099161, 15.041932]
            ],
            capital: "Berlin",
            funFact: "Germany has over 1,500 different types of beer and 1,000 different types of sausages."
        },
        {
            name: "United Kingdom",
            code: "GB",
            bounds: [
                [49.674, -8.648],
                [58.743, 1.762]
            ],
            capital: "London",
            funFact: "The London Underground is the oldest underground railway network in the world."
        },
        {
            name: "Italy",
            code: "IT",
            bounds: [
                [36.619987, 6.614889],
                [47.092, 18.513029]
            ],
            capital: "Rome",
            funFact: "Italy has the most UNESCO World Heritage Sites of any country in the world."
        },
        {
            name: "Spain",
            code: "ES",
            bounds: [
                [36.000000, -9.300000],
                [43.790000, 3.300000]
            ],
            capital: "Madrid",
            funFact: "Spain is the world's largest producer of olive oil."
        },
        {
            name: "Argentina",
            code: "AR",
            bounds: [
                [-55.057583, -73.560547],
                [-21.781920, -53.637695]
            ],
            capital: "Buenos Aires",
            funFact: "Argentina is home to both the highest and lowest points in South America."
        },
        {
            name: "Thailand",
            code: "TH",
            bounds: [
                [5.612851, 97.345703],
                [20.463145, 105.639648]
            ],
            capital: "Bangkok",
            funFact: "Thailand is the only Southeast Asian country that was never colonized by a European power."
        },
        {
            name: "Turkey",
            code: "TR",
            bounds: [
                [35.817813, 25.668945],
                [42.098222, 44.824219]
            ],
            capital: "Ankara",
            funFact: "Turkey is the only country that straddles two continents: Europe and Asia."
        },
        {
            name: "Nigeria",
            code: "NG",
            bounds: [
                [4.277144, 2.668457],
                [13.892007, 14.678955]
            ],
            capital: "Abuja",
            funFact: "Nigeria is Africa's most populous country with over 200 million people."
        },
        {
            name: "Kenya",
            code: "KE",
            bounds: [
                [-4.678547, 33.908691],
                [5.019483, 41.899414]
            ],
            capital: "Nairobi",
            funFact: "Kenya is home to the world's largest permanent desert lake, Lake Turkana."
        },
        {
            name: "Sweden",
            code: "SE",
            bounds: [
                [55.337231, 11.106934],
                [69.060066, 24.169922]
            ],
            capital: "Stockholm",
            funFact: "Sweden has the most islands of any country in the world, with over 267,570 islands."
        },
        {
            name: "Chile",
            code: "CL",
            bounds: [
                [-55.979795, -109.434433],
                [-17.619100, -66.159668]
            ],
            capital: "Santiago",
            funFact: "Chile is the longest north-south country in the world, stretching over 2,600 miles."
        },
        {
            name: "Vietnam",
            code: "VN",
            bounds: [
                [8.565932, 102.148438],
                [23.402765, 109.358521]
            ],
            capital: "Hanoi",
            funFact: "Vietnam is the world's largest exporter of cashew nuts and black pepper."
        },
        {
            name: "New Zealand",
            code: "NZ",
            bounds: [
                [-47.279229, 166.464844],
                [-34.016242, 178.154297]
            ],
            capital: "Wellington",
            funFact: "New Zealand was the first country to give women the right to vote in 1893."
        }
    ],
    
    // Hard level - challenging countries
    hard: [
        {
            name: "Bhutan",
            code: "BT",
            bounds: [
                [26.702016, 88.746414],
                [28.246987, 92.125191]
            ],
            capital: "Thimphu",
            funFact: "Bhutan is the only country in the world that measures prosperity by Gross National Happiness rather than GDP."
        },
        {
            name: "Kyrgyzstan",
            code: "KG",
            bounds: [
                [39.172832, 69.276611],
                [43.238224, 80.283165]
            ],
            capital: "Bishkek",
            funFact: "Kyrgyzstan is home to the second-largest alpine lake in the world, Issyk-Kul, which never freezes despite being surrounded by snow-capped mountains."
        },
        {
            name: "Eswatini",
            code: "SZ",
            bounds: [
                [-27.317380, 30.794107],
                [-25.719648, 32.134665]
            ],
            capital: "Mbabane",
            funFact: "Eswatini (formerly known as Swaziland) is one of the last absolute monarchies in the world."
        },
        {
            name: "Suriname",
            code: "SR",
            bounds: [
                [1.831145, -58.086563],
                [6.004546, -53.977493]
            ],
            capital: "Paramaribo",
            funFact: "Suriname is the smallest independent country in South America and has the highest percentage of rainforest cover of any country in the world."
        },
        {
            name: "Montenegro",
            code: "ME",
            bounds: [
                [41.850166, 18.433792],
                [43.570137, 20.355887]
            ],
            capital: "Podgorica",
            funFact: "Montenegro is one of the youngest countries in the world, gaining independence in 2006."
        },
        {
            name: "Malawi",
            code: "MW",
            bounds: [
                [-17.135768, 32.673420],
                [-9.367541, 35.916821]
            ],
            capital: "Lilongwe",
            funFact: "Lake Malawi contains more species of fish than any other lake in the world, including at least 700 species of cichlids."
        },
        {
            name: "Tajikistan",
            code: "TJ",
            bounds: [
                [36.671051, 67.342476],
                [41.050702, 75.137222]
            ],
            capital: "Dushanbe",
            funFact: "Over 90% of Tajikistan is mountainous, with the Pamir Mountains (known as 'the roof of the world') covering most of the country."
        },
        {
            name: "Lesotho",
            code: "LS",
            bounds: [
                [-30.668964, 27.011231],
                [-28.570615, 29.465761]
            ],
            capital: "Maseru",
            funFact: "Lesotho is the only independent state in the world that lies entirely above 1,000 meters in elevation."
        },
        {
            name: "Benin",
            code: "BJ",
            bounds: [
                [6.225748, 0.774575],
                [12.418347, 3.851701]
            ],
            capital: "Porto-Novo",
            funFact: "Benin is considered the birthplace of Vodun (or Voodoo), which is still practiced by about 17% of the population."
        },
        {
            name: "Moldova",
            code: "MD",
            bounds: [
                [45.468887, 26.618590],
                [48.490166, 30.135445]
            ],
            capital: "Chișinău",
            funFact: "Moldova has the world's largest wine cellar by number of bottles, with over 1.5 million bottles in the Mileștii Mici winery."
        },
        {
            name: "North Macedonia",
            code: "MK",
            bounds: [
                [40.860195, 20.464695],
                [42.373646, 23.034051]
            ],
            capital: "Skopje",
            funFact: "North Macedonia has more than 50 lakes and 1,100 species of plants, some of which are not found anywhere else in the world."
        },
        {
            name: "Timor-Leste",
            code: "TL",
            bounds: [
                [-9.504195, 124.044380],
                [-8.135830, 127.341644]
            ],
            capital: "Dili",
            funFact: "Timor-Leste is one of the world's youngest countries, gaining independence in 2002."
        }
    ]
};

// Add all easy countries to medium level
countryData.medium = [...countryData.easy, ...countryData.medium];

// Add all medium countries to hard level
countryData.hard = [...countryData.medium, ...countryData.hard];

// Capital cities data for Capitals Mode
const capitalCitiesData = [
    {
        name: "Washington D.C.",
        country: "United States",
        coordinates: [38.889931, -77.009003],
        funFact: "Washington D.C. is not part of any U.S. state and is governed as a federal district."
    },
    {
        name: "Moscow",
        country: "Russia",
        coordinates: [55.751244, 37.618423],
        funFact: "Moscow's Red Square is a UNESCO World Heritage site."
    },
    {
        name: "Brasília",
        country: "Brazil",
        coordinates: [-15.794229, -47.882166],
        funFact: "Brasília was built in just 41 months, from 1956 to 1960, and has a unique airplane-shaped design."
    },
    {
        name: "Canberra",
        country: "Australia",
        coordinates: [-35.282001, 149.128998],
        funFact: "Canberra was created specifically to be Australia's capital city as a compromise between Sydney and Melbourne."
    },
    {
        name: "Beijing",
        country: "China",
        coordinates: [39.916668, 116.383331],
        funFact: "Beijing has served as the capital of China for over 800 years."
    },
    {
        name: "New Delhi",
        country: "India",
        coordinates: [28.613939, 77.209021],
        funFact: "New Delhi was designed by British architects Sir Edwin Lutyens and Sir Herbert Baker."
    },
    {
        name: "Ottawa",
        country: "Canada",
        coordinates: [45.421532, -75.697189],
        funFact: "Ottawa was chosen as Canada's capital by Queen Victoria in 1857."
    },
    {
        name: "Pretoria",
        country: "South Africa",
        coordinates: [-25.747868, 28.229271],
        funFact: "Pretoria is known as the 'Jacaranda City' due to its thousands of jacaranda trees."
    },
    {
        name: "Mexico City",
        country: "Mexico",
        coordinates: [19.432608, -99.133209],
        funFact: "Mexico City is built on the ruins of the ancient Aztec city of Tenochtitlan."
    },
    {
        name: "Cairo",
        country: "Egypt",
        coordinates: [30.033333, 31.233334],
        funFact: "Cairo is the largest city in Africa and the Middle East."
    },
    {
        name: "Paris",
        country: "France",
        coordinates: [48.856613, 2.352222],
        funFact: "There are 38 bridges in Paris crossing the Seine River."
    },
    {
        name: "Tokyo",
        country: "Japan",
        coordinates: [35.689487, 139.691711],
        funFact: "Tokyo was originally known as Edo until 1868."
    },
    {
        name: "Berlin",
        country: "Germany",
        coordinates: [52.520008, 13.404954],
        funFact: "Berlin has more bridges than Venice with around 1,700 bridges."
    },
    {
        name: "London",
        country: "United Kingdom",
        coordinates: [51.507351, -0.127758],
        funFact: "London has been a major settlement for two millennia, founded by the Romans as Londinium."
    },
    {
        name: "Rome",
        country: "Italy",
        coordinates: [41.902782, 12.496366],
        funFact: "People have thrown approximately €1.5 million into Rome's Trevi Fountain each year."
    },
    {
        name: "Madrid",
        country: "Spain",
        coordinates: [40.416775, -3.703790],
        funFact: "Madrid is the highest capital city in Europe at 650 meters above sea level."
    },
    {
        name: "Buenos Aires",
        country: "Argentina",
        coordinates: [-34.603683, -58.381557],
        funFact: "Buenos Aires has the widest avenue in the world, 9 de Julio Avenue, with 16 lanes."
    },
    {
        name: "Bangkok",
        country: "Thailand",
        coordinates: [13.756331, 100.501762],
        funFact: "Bangkok's full ceremonial name is the longest city name in the world with 169 characters."
    },
    {
        name: "Ankara",
        country: "Turkey",
        coordinates: [39.933365, 32.859741],
        funFact: "Ankara became the capital of Turkey in 1923, replacing Istanbul."
    },
    {
        name: "Abuja",
        country: "Nigeria",
        coordinates: [9.076479, 7.398574],
        funFact: "Abuja replaced Lagos as Nigeria's capital in 1991."
    },
    {
        name: "Nairobi",
        country: "Kenya",
        coordinates: [-1.292066, 36.821946],
        funFact: "Nairobi is the only capital city with a national park within its boundaries."
    },
    {
        name: "Stockholm",
        country: "Sweden",
        coordinates: [59.329323, 18.068581],
        funFact: "Stockholm is built on 14 islands connected by 57 bridges."
    },
    {
        name: "Santiago",
        country: "Chile",
        coordinates: [-33.447487, -70.673676],
        funFact: "Santiago is one of the few capital cities in the world that has easy access to both ski slopes and beaches."
    },
    {
        name: "Hanoi",
        country: "Vietnam",
        coordinates: [21.027763, 105.834160],
        funFact: "Hanoi celebrated its 1,000th anniversary in 2010."
    },
    {
        name: "Wellington",
        country: "New Zealand",
        coordinates: [-41.286461, 174.776230],
        funFact: "Wellington is the southernmost capital city in the world."
    }
];

// Landmark data for future implementation
const landmarkData = [
    {
        name: "Eiffel Tower",
        country: "France",
        city: "Paris",
        coordinates: [48.858372, 2.294481],
        funFact: "The Eiffel Tower was originally built as a temporary structure for the 1889 World's Fair."
    },
    {
        name: "Great Wall of China",
        country: "China",
        city: "Beijing",
        coordinates: [40.431908, 116.570374],
        funFact: "Contrary to popular belief, the Great Wall of China cannot be seen from the moon with the naked eye."
    },
    {
        name: "Taj Mahal",
        country: "India",
        city: "Agra",
        coordinates: [27.175015, 78.042155],
        funFact: "The Taj Mahal was built by Emperor Shah Jahan as a tomb for his favorite wife, Mumtaz Mahal."
    },
    {
        name: "Statue of Liberty",
        country: "United States",
        city: "New York City",
        coordinates: [40.689247, -74.044502],
        funFact: "The Statue of Liberty was a gift from France to the United States in 1886."
    },
    {
        name: "Machu Picchu",
        country: "Peru",
        city: "Cusco Region",
        coordinates: [-13.163141, -72.544963],
        funFact: "Machu Picchu was built in the 15th century and later abandoned, remaining unknown to the outside world until 1911."
    },
    {
        name: "Colosseum",
        country: "Italy",
        city: "Rome",
        coordinates: [41.890251, 12.492373],
        funFact: "The Colosseum could hold up to 80,000 spectators and had 80 entrances."
    },
    {
        name: "Christ the Redeemer",
        country: "Brazil",
        city: "Rio de Janeiro",
        coordinates: [-22.951916, -43.210487],
        funFact: "Christ the Redeemer statue is 30 meters tall, not including its 8-meter pedestal."
    },
    {
        name: "Pyramids of Giza",
        country: "Egypt",
        city: "Giza",
        coordinates: [29.979235, 31.134202],
        funFact: "The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years."
    },
    {
        name: "Sydney Opera House",
        country: "Australia",
        city: "Sydney",
        coordinates: [-33.856159, 151.215256],
        funFact: "The Sydney Opera House has over one million roof tiles covering its iconic sails."
    },
    {
        name: "Angkor Wat",
        country: "Cambodia",
        city: "Siem Reap",
        coordinates: [13.412469, 103.866986],
        funFact: "Angkor Wat is the largest religious monument in the world, covering an area of 162.6 hectares."
    }
];

// Country names for autocomplete
const allCountryNames = [
    ...new Set([
        ...countryData.easy.map(country => country.name),
        ...countryData.medium.map(country => country.name),
        ...countryData.hard.map(country => country.name)
    ])
];

// Capital names for autocomplete
const allCapitalNames = capitalCitiesData.map(capital => capital.name);