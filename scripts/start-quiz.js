const countryData = [
    {
        "country": "Afghanistan",
        "city": "Kabul"
    },
    {
        "country": "Albania",
        "city": "Tirana"
    },
    {
        "country": "Algeria",
        "city": "Alger"
    },
    {
        "country": "Andorra",
        "city": "Andorra la Vella"
    },
    {
        "country": "Angola",
        "city": "Luanda"
    },
    {
        "country": "Antigua and Barbuda",
        "city": "Saint John's"
    },
    {
        "country": "Argentina",
        "city": "Buenos Aires"
    },
    {
        "country": "Armenia",
        "city": "Yerevan"
    },
    {
        "country": "Australia",
        "city": "Canberra"
    },
    {
        "country": "Austria",
        "city": "Vienna"
    },
    {
        "country": "Azerbaijan",
        "city": "Baku"
    },
    {
        "country": "Bahamas",
        "city": "Nassau"
    },
    {
        "country": "Bahrain",
        "city": "al-Manama"
    },
    {
        "country": "Bangladesh",
        "city": "Dhaka"
    },
    {
        "country": "Barbados",
        "city": "Bridgetown"
    },
    {
        "country": "Belarus",
        "city": "Minsk"
    },
    {
        "country": "Belgium",
        "city": "Brussells"
    },
    {
        "country": "Belize",
        "city": "Belmopan"
    },
    {
        "country": "Benin",
        "city": "Porto-Novo"
    },
    {
        "country": "Bhutan",
        "city": "Thimphu"
    },
    {
        "country": "Bolivia",
        "city": "La Paz"
    },
    {
        "country": "Bosnia and Herzegovina",
        "city": "Sarajevo"
    },
    {
        "country": "Botswana",
        "city": "Gaborone"
    },
    {
        "country": "Brazil",
        "city": "Brasilia"
    },
    {
        "country": "Brunei",
        "city": "Bandar Seri Begawan"
    },
    {
        "country": "Bulgaria",
        "city": "Sofia"
    },
    {
        "country": "Burkina Faso",
        "city": "Ouagadougou"
    },
    {
        "country": "Burundi",
        "city": "Bujumbura"
    },
    {
        "country": "Cambodia",
        "city": "Phnom Penh"
    },
    {
        "country": "Cameroon",
        "city": "Yaound"
    },
    {
        "country": "Canada",
        "city": "Ottawa"
    },
    {
        "country": "Cape Verde",
        "city": "Praia"
    },
    {
        "country": "Cayman Islands",
        "city": "George Town"
    },
    {
        "country": "Central African Republic",
        "city": "Bangui"
    },
    {
        "country": "Chad",
        "city": "N'Djam"
    },
    {
        "country": "Chile",
        "city": "Santiago"
    },
    {
        "country": "China",
        "city": "Beijing"
    },
    {
        "country": "Colombia",
        "city": "Bogota"
    },
    {
        "country": "Comoros",
        "city": "Moroni"
    },
    {
        "country": "Republic of the Congo",
        "city": "Brazzaville"
    },
    {
        "country": "Costa Rica",
        "city": "San Jose"
    },
    {
        "country": "Croatia",
        "city": "Zagreb"
    },
    {
        "country": "Cuba",
        "city": "La Habana"
    },
    {
        "country": "Cyprus",
        "city": "Nicosia"
    },
    {
        "country": "Czech Republic",
        "city": "Prague"
    },
    {
        "country": "Denmark",
        "city": "Copenhagen"
    },
    {
        "country": "Djibouti",
        "city": "Djibouti"
    },
    {
        "country": "Dominica",
        "city": "Roseau"
    },
    {
        "country": "Dominican Republic",
        "city": "Santo Domingo de Guzm"
    },
    {
        "country": "East Timor",
        "city": "Dili"
    },
    {
        "country": "Ecuador",
        "city": "Quito"
    },
    {
        "country": "Egypt",
        "city": "Cairo"
    },
    {
        "country": "El Salvador",
        "city": "San Salvador"
    },
    {
        "country": "England",
        "city": "London"
    },
    {
        "country": "Equatorial Guinea",
        "city": "Malabo"
    },
    {
        "country": "Eritrea",
        "city": "Asmara"
    },
    {
        "country": "Estonia",
        "city": "Tallinn"
    },
    {
        "country": "Ethiopia",
        "city": "Addis Abeba"
    },
    {
        "country": "Fiji Islands",
        "city": "Suva"
    },
    {
        "country": "Finland",
        "city": "Helsinki"
    },
    {
        "country": "France",
        "city": "Paris"
    },
    {
        "country": "Gabon",
        "city": "Libreville"
    },
    {
        "country": "Gambia",
        "city": "Banjul"
    },
    {
        "country": "Georgia",
        "city": "Tbilisi"
    },
    {
        "country": "Germany",
        "city": "Berlin"
    },
    {
        "country": "Ghana",
        "city": "Accra"
    },
    {
        "country": "Greece",
        "city": "Athens"
    },
    {
        "country": "Grenada",
        "city": "Saint George's"
    },
    {
        "country": "Guatemala",
        "city": "Ciudad de Guatemala"
    },
    {
        "country": "Guinea",
        "city": "Conakry"
    },
    {
        "country": "Guinea-Bissau",
        "city": "Bissau"
    },
    {
        "country": "Guyana",
        "city": "Georgetown"
    },
    {
        "country": "Haiti",
        "city": "Port-au-Prince"
    },
    {
        "country": "Holy See",
        "city": "Vatican City"
    },
    {
        "country": "Honduras",
        "city": "Tegucigalpa"
    },
    {
        "country": "Hungary",
        "city": "Budapest"
    },
    {
        "country": "Iceland",
        "city": "Reykjavik"
    },
    {
        "country": "India",
        "city": "New Delhi"
    },
    {
        "country": "Indonesia",
        "city": "Jakarta"
    },
    {
        "country": "Iran",
        "city": "Tehran"
    },
    {
        "country": "Iraq",
        "city": "Baghdad"
    },
    {
        "country": "Ireland",
        "city": "Dublin"
    },
    {
        "country": "Israel",
        "city": "Jerusalem"
    },
    {
        "country": "Italy",
        "city": "Rome"
    },
    {
        "country": "Ivory Coast",
        "city": "Yamoussoukro"
    },
    {
        "country": "Jamaica",
        "city": "Kingston"
    },
    {
        "country": "Japan",
        "city": "Tokyo"
    },
    {
        "country": "Jordan",
        "city": "Amman"
    },
    {
        "country": "Kazakhstan",
        "city": "Astana"
    },
    {
        "country": "Kenya",
        "city": "Nairobi"
    },
    {
        "country": "Kiribati",
        "city": "Bairiki"
    },
    {
        "country": "Kuwait",
        "city": "Kuwait"
    },
    {
        "country": "Kyrgyzstan",
        "city": "Bishkek"
    },
    {
        "country": "Laos",
        "city": "Vientiane"
    },
    {
        "country": "Latvia",
        "city": "Riga"
    },
    {
        "country": "Lebanon",
        "city": "Beirut"
    },
    {
        "country": "Lesotho",
        "city": "Maseru"
    },
    {
        "country": "Liberia",
        "city": "Monrovia"
    },
    {
        "country": "Libya",
        "city": "Tripoli"
    },
    {
        "country": "Liechtenstein",
        "city": "Vaduz"
    },
    {
        "country": "Lithuania",
        "city": "Vilnius"
    },
    {
        "country": "Luxembourg",
        "city": "Luxembourg"
    },
    {
        "country": "North Macedonia",
        "city": "Skopje"
    },
    {
        "country": "Madagascar",
        "city": "Antananarivo"
    },
    {
        "country": "Malawi",
        "city": "Lilongwe"
    },
    {
        "country": "Malaysia",
        "city": "Kuala Lumpur"
    },
    {
        "country": "Maldives",
        "city": "Male"
    },
    {
        "country": "Mali",
        "city": "Bamako"
    },
    {
        "country": "Malta",
        "city": "Valletta"
    },
    {
        "country": "Marshall Islands",
        "city": "Dalap-Uliga-Darrit"
    },
    {
        "country": "Mauritania",
        "city": "Nouakchott"
    },
    {
        "country": "Mauritius",
        "city": "Port-Louis"
    },
    {
        "country": "Mexico",
        "city": "Mexico City"
    },
    {
        "country": "Micronesia",
        "city": "Palikir"
    },
    {
        "country": "Moldova",
        "city": "Chisinau"
    },
    {
        "country": "Monaco",
        "city": "Monaco"
    },
    {
        "country": "Mongolia",
        "city": "Ulan Bator"
    },
    {
        "country": "Montenegro",
        "city": "Podgorica"
    },
    {
        "country": "Morocco",
        "city": "Rabat"
    },
    {
        "country": "Mozambique",
        "city": "Maputo"
    },
    {
        "country": "Myanmar",
        "city": "Rangoon"
    },
    {
        "country": "Namibia",
        "city": "Windhoek"
    },
    {
        "country": "Nauru",
        "city": "Yaren"
    },
    {
        "country": "Nepal",
        "city": "Kathmandu"
    },
    {
        "country": "Netherlands",
        "city": "Amsterdam"
    },
    {
        "country": "New Zealand",
        "city": "Wellington"
    },
    {
        "country": "Nicaragua",
        "city": "Managua"
    },
    {
        "country": "Niger",
        "city": "Niamey"
    },
    {
        "country": "Nigeria",
        "city": "Abuja"
    },
    {
        "country": "Niue",
        "city": "Alofi"
    },
    {
        "country": "North Korea",
        "city": "Pyongyang"
    },
    {
        "country": "Northern Ireland",
        "city": "Belfast"
    },
    {
        "country": "Norway",
        "city": "Oslo"
    },
    {
        "country": "Oman",
        "city": "Masqat"
    },
    {
        "country": "Pakistan",
        "city": "Islamabad"
    },
    {
        "country": "Palau",
        "city": "Koror"
    },
    {
        "country": "Palestine",
        "city": "Gaza"
    },
    {
        "country": "Panama",
        "city": "Ciudad de Panam"
    },
    {
        "country": "Papua New Guinea",
        "city": "Port Moresby"
    },
    {
        "country": "Paraguay",
        "city": "Asuncion"
    },
    {
        "country": "Peru",
        "city": "Lima"
    },
    {
        "country": "Philippines",
        "city": "Manila"
    },
    {
        "country": "Poland",
        "city": "Warsaw"
    },
    {
        "country": "Portugal",
        "city": "Lisbon"
    },
    {
        "country": "Qatar",
        "city": "Doha"
    },
    {
        "country": "Romania",
        "city": "Bucuresti"
    },
    {
        "country": "Russian",
        "city": "Moscow"
    },
    {
        "country": "Rwanda",
        "city": "Kigali"
    },
    {
        "country": "Saint Kitts and Nevis",
        "city": "Basseterre"
    },
    {
        "country": "Saint Lucia",
        "city": "Castries"
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "city": "Kingstown"
    },
    {
        "country": "Samoa",
        "city": "Apia"
    },
    {
        "country": "San Marino",
        "city": "San Marino"
    },
    {
        "country": "Sao Tome and Principe",
        "city": "Sao Tome"
    },
    {
        "country": "Saudi Arabia",
        "city": "Riyadh"
    },
    {
        "country": "Scotland",
        "city": "Edinburgh"
    },
    {
        "country": "Senegal",
        "city": "Dakar"
    },
    {
        "country": "Serbia",
        "city": "Belgrade"
    },
    {
        "country": "Seychelles",
        "city": "Victoria"
    },
    {
        "country": "Sierra Leone",
        "city": "Freetown"
    },
    {
        "country": "Singapore",
        "city": "Singapore"
    },
    {
        "country": "Slovakia",
        "city": "Bratislava"
    },
    {
        "country": "Slovenia",
        "city": "Ljubljana"
    },
    {
        "country": "Solomon Islands",
        "city": "Honiara"
    },
    {
        "country": "Somalia",
        "city": "Mogadishu"
    },
    {
        "country": "South Africa",
        "city": "Pretoria"
    },
    {
        "country": "South Korea",
        "city": "Seoul"
    },
    {
        "country": "South Sudan",
        "city": "Juba"
    },
    {
        "country": "Spain",
        "city": "Madrid"
    },
    {
        "country": "SriLanka",
        "city": "Colombo"
    },
    {
        "country": "Sudan",
        "city": "Khartum"
    },
    {
        "country": "Suriname",
        "city": "Paramaribo"
    },
    {
        "country": "Eswatini",
        "city": "Mbabane"
    },
    {
        "country": "Sweden",
        "city": "Stockholm"
    },
    {
        "country": "Switzerland",
        "city": "Bern"
    },
    {
        "country": "Syria",
        "city": "Damascus"
    },
    {
        "country": "Tajikistan",
        "city": "Dushanbe"
    },
    {
        "country": "Tanzania",
        "city": "Dodoma"
    },
    {
        "country": "Thailand",
        "city": "Bangkok"
    },
    {
        "country": "The Democratic Republic of Congo",
        "city": "Kinshasa"
    },
    {
        "country": "Togo",
        "city": "Lom"
    },
    {
        "country": "Tonga",
        "city": "Nuku'alofa"
    },
    {
        "country": "Trinidad and Tobago",
        "city": "Port-of-Spain"
    },
    {
        "country": "Tunisia",
        "city": "Tunis"
    },
    {
        "country": "Turkey",
        "city": "Ankara"
    },
    {
        "country": "Turkmenistan",
        "city": "Ashgabat"
    },
    {
        "country": "Tuvalu",
        "city": "Funafuti"
    },
    {
        "country": "Uganda",
        "city": "Kampala"
    },
    {
        "country": "Ukraine",
        "city": "Kyiv"
    },
    {
        "country": "United Arab Emirates",
        "city": "Abu Dhabi"
    },
    {
        "country": "United States",
        "city": "Washington DC"
    },
    {
        "country": "Uruguay",
        "city": "Montevideo"
    },
    {
        "country": "Uzbekistan",
        "city": "Toskent"
    },
    {
        "country": "Vanuatu",
        "city": "Port-Vila"
    },
    {
        "country": "Venezuela",
        "city": "Caracas"
    },
    {
        "country": "Vietnam",
        "city": "Hanoi"
    },
    {
        "country": "Wales",
        "city": "Cardiff"
    },
    {
        "country": "Yemen",
        "city": "Sanaa"
    },
    {
        "country": "Zambia",
        "city": "Lusaka"
    },
    {
        "country": "Zimbabwe",
        "city": "Harare"
    }
];

/*----------------------------------------------*/
const trebekismsCorrect = ["Correct.", "Yes. Pick again.", "You got it.", "Very good. Go again.", "You pronounced it wrong, but we'll accept it."]
const trebekismsIncorrect = ["No.", "Ha ha. No.", "Incorrect.", "Wrong.", "Not even close."];
const correctColor = "rgb(0, 204, 0)";
const incorrectColor = "rgb(255, 153, 0)";

function clearButtonText() {
    document.getElementById("guess1").innerHTML = ' ';
    document.getElementById("guess1").style.backgroundColor = 'whitesmoke';
    document.getElementById("guess2").innerHTML = ' ';
    document.getElementById("guess2").style.backgroundColor = 'whitesmoke';
    document.getElementById("guess3").innerHTML = ' ';
    document.getElementById("guess3").style.backgroundColor = 'whitesmoke';
    document.getElementById("guess4").innerHTML = ' ';
    document.getElementById("guess4").style.backgroundColor = 'whitesmoke';
    document.getElementById("guess5").innerHTML = ' ';
    document.getElementById("guess5").style.backgroundColor = 'whitesmoke';
    document.getElementById("guess6").innerHTML = ' ';
    document.getElementById("guess6").style.backgroundColor = 'whitesmoke';
}

function getRandomCountry() {
    let rndmIdx = Math.floor(Math.random() * countryData.length);
    return countryData[rndmIdx];
};

function getGameArray() {
    let gameArray = [];
    for (i=0; i < 6; i++) {
        let o = getRandomCountry();
        if (!gameArray.includes(o)) {
            gameArray.push(o);
        };
    };
    return gameArray
};

/* Chooses one of the objects in game array to set the quiz on*/
function getQuizInfo(aGameArray) {
    return aGameArray[Math.floor(Math.random() * aGameArray.length)]
};

function startQuiz() {
    clearButtonText()
    let game = getGameArray();
    let quizObj = getQuizInfo(game);
    let cntry = quizObj.country;
    document.getElementById("message").innerHTML = '';
    document.getElementById("start-button").innerHTML = `${cntry}`;
    document.getElementById("guess1").innerHTML = `${game[0].city}`;
    document.getElementById("guess2").innerHTML = `${game[1].city}`;
    document.getElementById("guess3").innerHTML = `${game[2].city}`;
    document.getElementById("guess4").innerHTML = `${game[3].city}`;
    document.getElementById("guess5").innerHTML = `${game[4].city}`;
    document.getElementById("guess6").innerHTML = `${game[5].city}`;
}

// Below are funcitons for evaluating the response.
function checkAnswer(userChoice, quizCountry) {
    let isCorrect
    for (i=0; i < countryData.length; i++) {
        if (countryData[i].country === quizCountry) {
            let correctCapital = countryData[i].city;
            if (correctCapital === userChoice) {
                isCorrect = true;
                return [isCorrect, correctCapital]
            }
            else {
                isCorrect = false;
                return [isCorrect, correctCapital]
            }
        
        }
    }
};

function getRandomMessage(myArray){
    return myArray[Math.floor(Math.random() * myArray.length)]
}

// Takes a bool of whether the user was right/wrong and updates elements accordingly.
function updateElements (quizPassed, userChoice, correctChoice) {
    document.getElementById("start-button").innerHTML = "I'll take World Capitals for $0, JavaScript.";
    if (quizPassed) {
        if (document.getElementById("guess1").innerHTML === userChoice){
            document.getElementById("guess1").style.backgroundColor = correctColor;
        }
        else if (document.getElementById("guess2").innerHTML === userChoice) {
            document.getElementById("guess2").style.backgroundColor = correctColor;
        }
        else if (document.getElementById("guess3").innerHTML === userChoice) {
            document.getElementById("guess3").style.backgroundColor = correctColor;
        }
        else if (document.getElementById("guess4").innerHTML === userChoice) {
            document.getElementById("guess4").style.backgroundColor = correctColor;
        }
        else if (document.getElementById("guess5").innerHTML === userChoice) {
            document.getElementById("guess5").style.backgroundColor = correctColor;
        }
        else if (document.getElementById("guess6").innerHTML === userChoice) {
            document.getElementById("guess6").style.backgroundColor = correctColor;
        }

        // Update message with trebekism
        document.getElementById("message").innerHTML = getRandomMessage(trebekismsCorrect);
    }
    else {
        // Go through and find users answer and turn it red.
        if (document.getElementById("guess1").innerHTML === userChoice){
            document.getElementById("guess1").style.backgroundColor = incorrectColor;
        }
        else if (document.getElementById("guess2").innerHTML === userChoice) {
            document.getElementById("guess2").style.backgroundColor = incorrectColor;
        }
        else if (document.getElementById("guess3").innerHTML === userChoice) {
            document.getElementById("guess3").style.backgroundColor = incorrectColor;
        }
        else if (document.getElementById("guess4").innerHTML === userChoice) {
            document.getElementById("guess4").style.backgroundColor = incorrectColor;
        }
        else if (document.getElementById("guess5").innerHTML === userChoice) {
            document.getElementById("guess5").style.backgroundColor = incorrectColor;
        }
        else if (document.getElementById("guess6").innerHTML === userChoice) {
            document.getElementById("guess6").style.backgroundColor = incorrectColor;
        }

        // Go through and find the correct button to turn green
        if (document.getElementById("guess1").innerHTML === correctChoice){
            document.getElementById("guess1").style.backgroundColor = correctColor;
        }
        else if (document.getElementById("guess2").innerHTML === correctChoice) {
            document.getElementById("guess2").style.backgroundColor = correctColor;
        }
        else if (document.getElementById("guess3").innerHTML === correctChoice) {
            document.getElementById("guess3").style.backgroundColor = correctColor;
        }
        else if (document.getElementById("guess4").innerHTML === correctChoice) {
            document.getElementById("guess4").style.backgroundColor = correctColor;
        }
        else if (document.getElementById("guess5").innerHTML === correctChoice) {
            document.getElementById("guess5").style.backgroundColor = correctColor;
        }
        else if (document.getElementById("guess6").innerHTML === correctChoice) {
            document.getElementById("guess6").style.backgroundColor = correctColor;
        }
        
        // Update message with trebekism
        document.getElementById("message").innerHTML = getRandomMessage(trebekismsIncorrect);
    }
    
}

function submitAnswer(userChoice, country) {
    let outArray = checkAnswer(userChoice, country);
    let passed = outArray[0];
    let corrCapital = outArray[1];
    updateElements(passed, userChoice, corrCapital)
}