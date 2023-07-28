<script lang="ts">

    import { onMount } from 'svelte';
    import {createSmartappDebugger, createAssistant} from '@sberdevices/assistant-client';
    //import {createSmartappDebugger, createAssistant} from '@salutejs/client';
    import { setTheme } from './themes';
    import { logger } from "./utils";
    import {text,background,gradient} from '@salutejs/plasma-tokens'
    import Help from './Help.svelte';
    
    const dictionary = [
          "Apple",
          "Banana",
          "Cake",
          "Cheese",
          "Chocolate",
          "Cookie",
          "Egg",
          "Fish",
          "Meat",
          "Pasta",
          "Pizza",
          "Salad",
          "Sandwich",
          "Soup",
          "Tea",
          "Coffee",
          "Water",
          "Juice",
          "Wine",
          "Beer",
          "Bread",
          "Butter",
          "Honey",
          "Ice cream",
          "Milk",
          "Soda",
          "Spice",
          "Sugar",
          "Salt",
          "Pepper",
          "Onion",
          "Garlic",
          "Tomato",
          "Potato",
          "Carrot",
          "Cucumber",
          "Lettuce",
          "Mushroom",
          "Corn",
          "Peas",
          "Beans",
          "Broccoli",
          "Cabbage",
          "Pumpkin",
          "Radish",
          "Spinach",
          "Yogurt",
          "Mango",
          "Pineapple",
          "Orange",
          "Grape",
          "Kiwi",
          "Pear",
          "Strawberry",
          "Blueberry",
          "Raspberry",
          "Cherry",
          "Blackberry",
          "Lemon",
          "Lime",
          "Ginger",
          "Cinnamon",
          "Vanilla",
          "Coconut",
          "Almond",
          "Peanut",
          "Walnut",
          "Cashew",
          "Hazelnut",
          "Chocolate chip",
          "Popcorn",
          "Sushi",
          "Curry",
          "Sausage",
          "Burger",
          "Fries",
          "Ketchup",
          "Mustard",
          "Mayonnaise",
          "Hamburger",
          "Cheeseburger",
          "Taco",
          "Burrito",
          "Nachos",
          "Salsa",
          "Guacamole",
          "Quesadilla",
          "Enchiladas",
          "Churros",
          "Cannoli",
          "Macarons",
          "Croissant",
          "Bagel",
          "Waffle",
          "Pancake",
          "Donut",
          "Croquette",
          "Risotto",
          "Lasagna",
          "Spaghetti",
          "Ravioli",
          "Sushi roll",
          "Soup dumpling",
          "Dim sum",
          "Pad Thai",
          "Phone",
          "Spring roll",
          "Gyoza",
          "Biriyani",
          "Naan",
          "Roti",
          "Tandoori",
          "Falafel",
          "Hummus",
          "Gyro",
          "Shawarma",
          "Tabbouleh",
          "Spanakopita",
          "Moussaka",
          "Baklava",
          "Kebab",
          "Pierogi",
          "Borscht",
          "Vareniki",
          "Kasha",
          "Pelmeni",
          "Egg roll",
          "General Tso's chicken",
          "Sweet and sour pork",
          "Egg foo young",
          "Pizza slice",
          "Scone",
          "Cupcake",
          "Brownie",
          "Macaroni and cheese",
          "Pop tart",
          "French toast",
          "Grilled cheese",
          "Biscuit",
          "Cinnamon roll",
          "Omelette",
          "Bacon",
          "Sausage roll",
          "Jelly doughnut",
          "Sticky bun",
          "Pumpernickel",
          "Cornbread",
          "Baguette",
          "Ciabatta",
          "Focaccia",
          "Rye bread",
          "Sourdough",
          "English muffin",
          "Matzo",
          "Fork",
          "Pita",
          "Bagel with cream cheese",
          "University",
          "Beignet",
          "Clam chowder",
          "Crab cake",
          "Chicken noodle soup",
          "Gazpacho",
          "Miso soup",
          "Lobster bisque",
          "Tomato soup",
          "Minestrone",
          "Goulash",
          "Potato soup",
          "Vegetable soup",
          "Fish and chips",
          "Chicken alfredo",
          "Ham and cheese sandwich",
          "Beef stroganoff",
          "Jambalaya",
          "Chicken cordon bleu",
          "Ratatouille",
          "Beef Wellington",
          "Fish taco",
          "Chili con carne",
          "Dormitory",
          "Pho bo",
          "Biryani",
          "Korma",
          "Saag paneer",
          "Chana masala",
          "Butter chicken",
          "Tikka masala",
          "Samosa",
          "Nan bread",
          "Tandoori chicken",
          "Dosa",
          "Idli",
          "Olivier",
          "Mouse",
          "Bun",
          "Bread",
          "Milk",
          "Sour cream",
          "Kefir",
          "Ice cream",
          "Meat",
          "Shish kebab",
          "Cake",
          "Marshmallow",
          "Tomato",
          "Cucumber",
          "Onion",
          "Banana",
          "Watermelon",
          "Zucchini",
          "Eggplant",
          "Caviar",
          "Coffee",
          "Tea",
          "Champagne",
          "Sugar",
          "Cookies",
          "Dill",
          "Parsley",
          "Sprats",
          "Croissant",
          "Cracker",
          "Chocolate",
          "Candy",
          "Apple",
          "Melon",
          "Salt",
          "Pepper",
          "Garlic",
          "Fried potatoes",
          "Pickles",
          "Solyanka",
          "Jelly",
          "Honey",
          "Jam",
          "Nuts",
          "Chips",
          "Beer",
          "Dried fish",
          "Sunflower seeds",
          "Corn",
          "Corn sticks",
          "Chewing gum",
          "Butter",
          "Pelmeni",
          "Vareniki",
          "Waffles",
          "Pasta",
          "Rice",
          "Buckwheat",
          "Mayonnaise",
          "Ketchup",
          "Sauce",
          "Popcorn",
          "Halva",
          "Pistachios",
          "Walnuts",
          "Almonds",
          "Beans",
          "Roll",
          "Plum",
          "Prunes",
          "Apricot",
          "Dried apricot",
          "Fig",
          "Peach",
          "Mango",
          "Kiwi",
          "Blueberry",
          "Strawberry",
          "Blackberry",
          "Raspberry",
          "Gooseberry",
          "Lemon",
          "Orange",
          "Currant",
          "Tangerines",
          "Cornelian cherry",
          "Pepper",
          "Cottage cheese",
          "Tiramisu",
          "Vinegar",
          "Baking soda",
          "Sausage",
          "Cheese",
          "Sandwich",
          "Pâté",
          "Egg",
          "Pancakes",
          "Fritters",
          "Carrots",
          "Croissant",
          "Stuffed pepper",
          "Cinnamon",
          "Lentils",
          "Lavash",
          "Sausages",
          "Pizza",
          "Hot dog",
          "Cola",
          "Cottage cheese pancakes",
          "Peas",
          "Stew",
          "Mashed potatoes",
          "Olivier salad",
          "Semolina",
          "Omelette",
          "Fried eggs",
          "Poached egg",
          "Cake",
          "Donuts",
          "Meringue",
          "Bagels",
          "Pomegranate",
          "Oysters",
          "Mushrooms",
          "Strudel",
          "Juice",
          "Feta cheese",
          "Polenta",
          "Mititei",
          "Chicken wings",
          "Kebab",
          "Kalach",
          "Chocolate spread",
          "Sugar substitute",
          "Pilaf",
          "Pastry",
          "Cabbage soup",
          "Zama",
          "Manti",
          "Chebureki",
          "Complex",
          "Otolaryngologist",
          "Cryptocurrency",
          "Bitcoin",
          "Substance",
          "Canoe",
          "Panel",
          "Atelier",
          "Cistern",
          "Alpha male",
          "Narcissus",
          "Narcissism",
          "Grass",
          "Cigarette",
          "Cider",
          "World Wide Web",
          "Strictness",
          "Unemployment",
          "Cheburashka",
          "Logic",
          "Psychology",
          "Depression",
          "Contract",
          "Implant",
          "Operation",
          "Gallbladder",
          "Osteopath",
          "Osteochondrosis",
          "Infertility",
          "Cat",
          "Orangutan",
          "Constipation",
          "Responsibility",
          "Task",
          "Convoy",
          "Police",
          "Success",
          "Million",
          "Complexity",
          "Chickenpox",
          "Helicopter",
          "Major",
          "Tip",
          "Milk foam",
          "Illness",
          "Moth",
          "Mold",
          "Corns",
          "Varicose veins",
          "Mosquito",
          "Sandpaper",
          "Nail file",
          "Massage chair",
          "Mosquito net",
          "Gelatin",
          "Sand",
          "Plastic surgery",
          "GTA game",
          "Trap",
          "Syrup",
          "Beekeeper",
          "Allergic person",
          "Ragweed",
          "Check",
          "Creak",
          "Catch",
          "Engine",
          "Fake",
          "Turpentine",
          "Bleach",
          "Tsunami",
          "Poseidon",
          "Horror",
          "Pregnancy test",
          "Ammonium",
          "Saber",
          "Loose",
          "Grapevine",
          "Smell",
          "Instruction",
          "Food",
          "Shock",
          "Trace",
          "Invisible person",
          "Investigation",
          "Cigarette butt",
          "Trigger",
          "Pasture",
          "Shepherd",
          "White shirt",
          "Advertisement",
          "Garden",
          "Cloud",
          "Cobweb",
          "Tamagotchi",
          "Bubbles",
          "Shadow",
          "Laziness",
          "Update",
          "Gadget",
          "Device",
          "Suction",
          "Construction",
          "Arrogance",
          "Edge",
          "Octopus",
          "Psychopath",
          "Ferrari",
          "Speed",
          "Oyster",
          "Delicacy",
          "Defective product",
          "Volume",
          "Double bass",
          "Counterfeit",
          "Sound",
          "Albino",
          "Freckle",
          "Herpes",
          "Noise",
          "Echo",
          "Sciatic nerve",
          "Note",
          "Allergy",
          "Forest",
          "Tachycardia",
          "Trichologist",
          "Pregnancy test",
          "Splinter",
          "Ambush",
          "Trick",
          "Blackmail",
          "Escalator",
          "Bumblebee",
          "Mousetrap",
          "Poison",
          "Color",
          "Ultrasound",
          "Quote",
          "Silicone",
          "Whale",
          "Caterpillar",
          "Expiration date",
          "Performance",
          "Corporate party",
          "Illumination",
          "Space",
          "Speed",
          "Star",
          "Disorder",
          "Suicide",
          "Penthouse",
          "Radius",
          "Centimeter",
          "Sanitary",
          "Educator",
          "Turnaround",
          "Film",
          "Glue",
          "Pattern",
          "Neighbor",
          "Puzzle",
          "Mold",
          "Stagnation",
          "Icicle",
          "Frost",
          "Shine",
          "Diamond",
          "Azure",
          "Sugar",
          "Mixture",
          "Ceiling",
          "Platypus",
          "Air conditioner",
          "Cashier",
          "Cash desk",
          "Dower",
          "Fermentation",
          "Budget",
          "Loading ramp",
          "Luxury",
          "Sensation",
          "Safety",
          "Avatar",
          "Esotericism",
          "Peel",
          "Seed",
          "Trend",
          "Fake",
          "Coronavirus",
          "Fireplace",
          "Scar",
          "Suture",
          "Container",
          "Funny",
          "friends",
          "Hippopotamus",
          "Clown",
          "Mop",
          "Glasses",
          "Teeth",
          "Straw hat",
          "Runny nose",
          "Arrow on tights",
          "Hole in clothes",
          "Glass",
          "Aristocrat",
          "Toilet",
          "Joke",
          "Bicycle",
          "Chimpanzee",
          "Wick",
          "Joke",
          "Laughter",
          "Whisper",
          "Dance",
          "Jellyfish",
          "Goosebumps",
          "Diving",
          "Fleas",
          "Robbery",
          "Dinosaur",
          "Clownfish",
          "Bow",
          "Chewing gum",
          "Camel",
          "Rhinoceros",
          "Skunk",
          "Circus",
          "Bell",
          "Bride",
          "Groom",
          "Wedding",
          "Last bell",
          "KVN",
          "Guitar",
          "Strip tease",
          "Statue",
          "Binoculars",
          "Fish",
          "Bank",
          "Money",
          "Mafia",
          "Disorder",
          "Naked",
          "Smile",
          "Kolobok",
          "Dog",
          "Amphitheater",
          "Capital",
          "Joy",
          "Tights",
          "Non - traditional person",
          "Late",
          "Drunk person",
          "Karaoke",
          "Splinter",
          "Sloth",
          "Snoring",
          "Farting",
          "Jelly",
          "Sour cream",
          "Sunburned",
          "Ate bad food",
          "Comedy",
          "High heels",
          "Tall height",
          "Puddle",
          "Age difference",
          "Girlfriends",
          "Chicken",
          "Gold",
          "Swordfish",
          "Kangaroo",
          "Sea",
          "Diet",
          "Hunger",
          "Chocolate",
          "Teletubbies",
          "Ostrich",
          "Hidden SMS",
          "Mistress",
          "Children",
          "Cold",
          "Cactus",
          "Pink hippopotamus",
          "Spots",
          "Disinfection",
          "Clavichord",
          "Valenki",
          "Hello",
          "Candy",
          "Steering wheel",
          "Garlic",
          "Ladies' man",
          "Pony",
          "Pink flamingo",
          "Pink panther",
          "Harry Potter",
          "Peppa Pig",
          "Winnie the Pooh",
          "Kar Karych",
          "Aladdin",
          "Song",
          "Verka Serduchka",
          "Pamela Anderson",
          "Kim Kardashian",
          "Neposeda",
          "Ivanushka Durachok",
          "Petrushka",
          "Vanka - vstanka",
          "Baba Yaga",
          "Koschei the Immortal",
          "Bat",
          "Penguin",
          "Spiral",
          "Weeble",
          "Plumber",
          "Nag",
          "Strip tease",
          "Belly dance",
          "Tub",
          "Diarrhea",
          "Thong",
          "Swimsuit",
          "Aphrodisiac",
          "Femininity",
          "Cheating husband",
          "Nudist",
          "Twerk",
          "Bra",
          "Bachelor",
          "Habit",
          "Pistol",
          "Parody",
          "Horse",
          "Gynecologist",
          "Dentist",
          "Scabies",
          "Late for school",
          "Love",
          "Fish",
          "Lichen",
          "Memory loss",
          "Pole",
          "Denture",
          "Tooth Fairy",
          "Unicorn",
          "Minion",
          "Donkey from Shrek",
          "Fiona",
          "Shrek",
          "Gorilla",
          "Stink",
          "Little things",
          "Suction",
          "Crab",
          "Shame",
          "Glue",
          "Slob",
          "Fight",
          "Impudence",
          "Escort",
          "Scrooge",
          "Mini skirt",
          "Chameleon",
          "Hysteria",
          "Bank robbery",
          "Mother -in -law",
          "Loser",
          "Picnic",
          "Knockout",
          "Boxing",
          "Ingrowing toenail",
          "Ground squirrel",
          "Charisma",
          "Atom",
          "Microbe",
          "Telescope",
          "Botanist",
          "Confident person",
          "Masochist",
          "Bedroom",
          "Gnome",
          "Jester",
          "Diaper",
          "Mermaid",
          "Snowman",
          "Leggings",
          "Stockings",
          "Thinker",
          "Stone",
          "Student",
          "Strong",
          "Yacht",
          "Elephant ear",
          "Hockey",
          "Motorcycle",
          "Pencil case",
          "Apple",
          "Starfish",
          "Turtle neck",
          "Volleyball net",
          "Wolf",
          "Balloon",
          "Ship",
          "Firewood",
          "Iguana",
          "Ketchup",
          "Microscope",
          "Pepper",
          "Crown",
          "Whirlpool",
          "X-ray vision",
          "Yellow jacket",
          "Zebra crossing",
          "Bird",
          "Moon",
          "Dog food",
          "Grape juice",
          "Hot dog",
          "Igloo building",
          "Kite surfing",
          "Lava lamp",
          "Mushroom",
          "Notebook cover",
          "Opossum",
          "Snowman",
          "Turtle soup",
          "Underwear set",
          "Volleyball",
          "Waffle maker",
          "Zombie",
          "Accordion",
          "Baseball glove",
          "Chocolate",
          "Drum set",
          "Fireworks",
          "Grapefruit juice",
          "Jellyfish lamp",
          "Keyhole",
          "Lime",
          "Onion",
          "Rhino horn",
          "Snowflake",
          "Unicorn tail",
          "Wheelbarrow",
          "Yellow taxi",
          "Zombie apocalypse",
          "Alligator skin",
          "Basketball court",
          "Christmas tree",
          "Dolphin",
          "Hair",
          "Half",
          "Hall",
          "Hand",
          "Hang",
          "Harm",
          "Hatch",
          "Have",
          "Head",
          "Heal",
          "Heat",
          "Hell",
          "Help",
          "Hide",
          "High",
          "Race",
          "Sunflower",
          "Tangerine",
          "Umbrella",
          "Volleyball",
          "Wig",
          "X-ray",
          "Yellow",
          "Zany",
          "Art",
          "Basketball",
          "Cruise",
          "Diamond",
          "Earthquake",
          "Firefly",
          "Guitar",
          "Hammer",
          "Ink",
          "Jukebox",
          "Kangaroo",
          "Liberty",
          "Mountains",
          "Nightingale",
          "Ocean",
          "Popcorn",
          "Queen",
          "Rainbow",
          "Saxophone",
          "Turtle",
          "Umbrella",
          "Violin",
          "Waterfall",
          "Xenon",
          "Yogurt",
          "Zebra",
          "Airplane",
          "Boat",
          "Camera",
          "Dance",
          "Eggplant",
          "Fireplace",
          "Guitar",
          "Hammerhead",
          "Island",
          "Juice",
          "King",
          "Lighthouse",
          "Monkey",
          "Nectarine",
          "Baking",
          "Gardening",
          "Cruise",
          "Diamond",
          "Earthquake",
          "Firefly",
          "Guitar",
          "Hammer",
          "Ink",
          "Jukebox",
          "Kangaroo",
          "Liberty",
          "Mountains",
          "Nightingale",
          "Ocean",
          "Popcorn",
          "Queen",
          "Rainbow",
          "Saxophone",
          "Turtle",
          "Umbrella",
          "Violin",
          "Waterfall",
          "Xenon",
          "Yogurt",
          "Earth",
          "Frog",
          "Guitar",
          "Hotel",
          "India",
          "Joker",
          "Kite",
          "Lighthouse",
          "Mountain",
          "Night",
          "Octopus",
          "Piano",
          "Quilt",
          "Restaurant",
          "Snow",
          "Tiger",
          "Unicorn",
          "Van",
          "Wallet",
          "Angel",
          "Bicycle",
          "Chocolate",
          "Dinner",
          "Unavailable",
          "Unaware",
          "Unbroken",
          "Uncanny",
          "Uncharitable",
          "Unclear",
          "Uncommon",
          "Under",
          "Uneven",
          "Unfair",
          "Unfold",
          "Ungrateful",
          "Unhappy",
          "Unified",
          "Unique",
          "Universal",
          "Unkempt",
          "Unknown",
          "Unlearn",
          "Line",
          "List",
          "Live",
          "Load",
          "Loan",
          "Lock",
          "Long",
          "Look",
          "Loose",
          "Lost",
          "Love",
          "Luck",
          "Make",
          "Male",
          "Math",
          "Meat",
          "Meet",
          "Menu",
          "Mess",
          "Mile",
          "Milk",
          "Mind",
          "Mine",
          "Crafting",
          "Painting",
          "Drawing",
          "Sculpture",
          "Design",
          "Architecture",
          "Engineering",
          "Philosophy",
          "Religion",
          "Spirituality",
          "Psychology",
          "Sociology",
          "Anthropology",
          "Biology",
          "Chemistry",
          "Physics",
          "Astronomy",
          "Literature",
          "Language",
          "Communication",
          "Transportation",
          "Environment",
          "Nature",
          "Wildlife",
          "Conservation",
          "Recycling",
          "Energy",
          "Climate",
          "Pollution",
          "Technology",
          "Innovation",
          "Invention",
          "Discovery",
          "Research",
          "Development",
          "Experiment",
          "Investigation",
          "Theory",
          "Principle",
          "Concept",
          "Idea",
          "Knowledge",
          "Intelligence",
          "Wisdom",
          "Creativity",
          "Imagination",
          "Innovation",
          "Curiosity",
          "Ambition",
          "Initiative",
          "Dedication",
          "Integrity",
          "Honesty",
          "Loyalty",
          "Respect",
          "Kindness",
          "Generosity",
          "Compassion",
          "Empathy",
          "Patience",
          "Perseverance",
          "Courage",
          "Bravery"
    ];
    
    let helpIsAsked = false;
    let assistant;
    let dict = dictionary;
    let rand = dict[Math.floor(Math.random() * dict.length)];
    let com = "Простой";

    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJlNDFiYWRjYS05NzA4LTQ4MWQtYTk5My0wMjhlYWMyMDU4OGEiLCJzdWIiOiI4NjNlZDFmOGI0ZDk0YTBiZDU1MmI4ZGE0ZDcyZjE5OGEwZDdjZDQ4MTY1YmExMGYxYTM1NjI5M2JlYjQxMzIyNTM5YmU5MjcwMDQyNjI5OCIsImlzcyI6IktFWU1BU1RFUiIsImV4cCI6MTY4Njc1Mjk4NiwiYXVkIjoiVlBTIiwiaWF0IjoxNjg2NjY2NTc2LCJ0eXBlIjoiQmVhcmVyIiwic2lkIjoiMzRkODhmZTAtOWNhMy00YzgxLWExODgtMTE4NTdiMzI3NGQ3In0.PtfnItfxjqvzNgRgLyqtDCOO3FH2TzbaBxClGroBeSR6r4GHkOnHwQei2KQ9fD2H0HJS-0b1dnDC6r7nKIeDfdGd_zHX5rMpr_-12aBepbALlkB59Ll6sOCMnlJJKzePiVgIl3NQIeM5Vw0MMyK0VahM2Bv_9kMSbJJ7IkU_OLHntvs1TAIqqmoJ7ytbRhlVbdWGIRyuq54HORDMEgFs4e4WJmc4cV7vgAxma0QK0wUPU0zrXA1LHQa_TiJkqOZvhzuyDQn-S96WIBoogwh0HH9CKjdYImJyu27lUO5F2KDh0uD1HU3GEkdxCBZZCVm1KMYgBJk-qJeG_5j08590UdIN1Sgqq5KGlwTC5IwdLWqmwDftzxUdEjiHIDpoO_eYmNsqAwvjKPFx2JI_Od1Wxs7ZFmrQmQOAEOU4FNBySWDbIrz2xYw52Cr7nvnWT3SKv_fquhu1oTdWPVrxCLHuxG-pCfXJFa8WFKYs8Fu27mCP-YrXoLpcJxqM9mC7X1328eGRgnqsove5nMWXW5o9x8KPBdKLicx04OBQHDSzZQy61QbOhUralhkvsKurs4z0-BgoEp6SZXrDdfsC5-jNPsTKK0Q9FFGg-dLSLbL-WefLRgPGnYxPkfOthTehDD9l4d3mPIVm47Sjp_AXty7pWPH7PC4aHY9HKrQmabAx8P8";
// Set the name of your SmartApp for activation
    let initPhrase = 'запусти Английский крокодил';
    let character = 'eva'; // default, before sber client gets state
    //$: setTheme(character);
    onMount(() =>
    {
        function getState() {return {}}

        const init = () =>
        {
            if (process.env.NODE_ENV === 'production') {return createAssistant({getState});}
            return createSmartappDebugger({token, initPhrase, getState });
        };
        assistant = init();
        assistant.on('start', () => { logger.log('SmartApp started'); });

        assistant.on('data', event =>
        {
            // Set your action or data hooks
            if (!event.type) {
                // Use invariants to prevent errors on Sber Portal
                return;
            }
            // FIXME Add event handler for closing the app and use "assistant.close()" inside it;

            if (event.type === 'character') {
                character = event.character.id;
                if (character === 'joy' || character === 'eva') {
                    setTheme('sber');
                }
            }

            if (event.type === 'smart_app_data') {
                logger.log(event.smart_app_data.type);
                if (event.smart_app_data.type === 'close_app'){
                    assistant.close();
                }
                if (event.smart_app_data.type === 'smartapp') {
                    reset();
                    rand = dict[Math.floor(Math.random() * dict.length)];
                } else if (event.smart_app_data.type === 'changeword') {
                    news();
                } else if (event.smart_app_data.type === 'guessedwrong') {
                        badcount();
                        news();
                } else if (event.smart_app_data.type === 'guessedright') {
                        gcount();
                        news();
                } else if (event.smart_app_data.type === 'close') {
                    if (helpIsAsked)
                        helpIsAsked = false;
                    else
                        close();
                } else if (event.smart_app_data.type === 'help') {
                    helpIsAsked = true;
                } else if (event.smart_app_data.type === 'restart') {
                    reset();
                }
                if (event.type === 'navigation') { let word = event.navigation.command; }
                logger.log(event);
            };
        });
    });
    const call_help = () => {
        assistant.sendData({
            action: {
                action_id: 'help'
            }
        });
    }
    const changeword = () => {
        assistant.sendData({
            action: {
                action_id: 'changeword'
            }
        });
    }
    const restart = () => {
        assistant.sendData({
            action: {
                action_id: 'restart'
            }
        });
    }
    const guessedright = () => {
        if (visible) {
        assistant.sendData({
            action: {
                action_id: 'guessedright'
            }
        });
    }
    }
    const guessedwrong = () => {
        if (visible) {
        assistant.sendData({
            action: {
                action_id: 'guessedwrong'
            }
        });
    }
    }

    let game = { score: 0, best: 0,};

    const reset = () =>
    {
        game.score = 0;
        game.best = 0;
        if (visible)
        {
            visible = false;
            setTimeout(function() { rand = dict[Math.floor(Math.random() * dict.length)]; }, 500);
        }
    };
    let pressed_only_once = true;
    function news() {
        if (com == "Простой") {
            dict = dictionary;
            rand = dict[Math.floor(Math.random() * dict.length)]
        }
        if (visible) {
            visible = false;
            //pressed_only_once = false;
            setTimeout(function() { visible = true;}, 1000);
           // setTimeout(function() { pressed_only_once = true;}, 3000);
        }
        else {
            setTimeout(function() { visible = true; }, 500);
        }
    }
    function gcount() { 
        // if (pressed_only_once) {
           game.best+=1; 
           game.score+=1; 
       // }
    }
    function badcount() { 
        // if (pressed_only_once)
            game.best+=1; 
    }
    let visible = false;
    function typewriter(node, { speed = 1 }) {
        const valid = (
            node.childNodes.length === 1 &&
            node.childNodes[0].nodeType === Node.TEXT_NODE
        );

        if (!valid) {
            throw new Error(`This transition only works on elements with a single text node child`);
        }
        const text = node.textContent;
        logger.log(text);
        const duration = text.length / (speed * 0.05);

        return {
            duration,
            tick: t => {
                const i = ~~(text.length * t);
                node.textContent = text.slice(0, i);
            }
        };
    }

</script>



<div class="container">
    <div class="heading">
        <img src="https://i.ibb.co/Z1P7JCp/crocodile.png" alt=" " width="100" height="100">
        <h1 class="title">Английский крокодил</h1>
        <button class= "help-button" on:click={() => call_help()}>Помощь</button>
    </div>
    <div class="scores-container">
        <div class="best-container"><p>{game.score}</p></div>
        <div class="score-container"><p>{game.best}</p></div>
    </div>
    <div class="text-score">
        <div class="best-container"><p>Угадано</p></div>
        <div class="score-container"><p>Всего</p></div>
</div>
    <!-- <div class="game-intro">
        <button class="restart-button" on:click={() => restart()}>Заново</button>
    </div> -->
    <div class="game-container">
        {#if rand.length <= 10}
            {#if visible}
                <p class = "answer" transition:typewriter>{rand}</p>
            {/if}
        {/if}
        {#if rand.length > 10}
            {#if visible}
                <p class = "answer4" transition:typewriter>{rand}</p>
            {/if}
        {/if}
        <div class="game-messages">
        </div>
    </div>
    <div class = "word">
        <button class = "NewWord" on:click = {() => changeword()}> Новое слово</button>
        <div class = "goodbad">
            <button class = "Good" on:click = {() => guessedright()}>Угадано</button>
            <button class = "Bad" on:click = {() => guessedwrong()}>Не угадано</button>
        </div>
        {#if helpIsAsked}
            <Help on:close="{() => helpIsAsked = false}" >
                <h2 slot="header" class="header">
                    Правила игры «Английский крокодил»
                </h2>
                <div slot="rules" class="rules" style="color:black">
                    <b>Английский крокодил</b> -  это игра на подражание, в которой один игрок пытается изобразить или объяснить слово на экране без использования речи или звуков.
                    Задача других игроков состоит в том, чтобы угадать, что именно он пытается изобразить.<br />
                    <b>Правила игры: </b> <br />
                    1. Определите, кто будет первым «крокодилом». Это может быть любой из игроков или же можно выбрать по очереди.<br />
                    2. Крокодил изображает с экрана слово или фразу с помощью жестов, мимики и движений тела, не произнося ни звука. Нельзя произносить слово даже по буквам.<br />
                    3. Остальные игроки наблюдают за крокодилом и пытаются угадать, что он изображает. Они могут предлагать свои варианты ответов вслух.<br />
                    4. Если кто-то угадывает правильно, то этот игрок становится следующим «крокодилом» и описывает новое слово или фразу.<br />
                    5. Слово считается разгаданным, если слово произнесено именно так, как оно было загадано.<br />
                    Важно помнить, что во время игры «крокодил» не должен произносить слова, 
                    использовать какие-либо звуки или писать что-либо. 
                    Его задача - только изображать слово или фразу с помощью движений и жестов.
                    Желаем вам увлекательной и занимательной игры!<br />
                    <b> Правила пользования приложением:</b> <br/>
                    Кнопка «Новое слово»  - показывает новое слово. <br/>
                    Кнопка «Угадано» - увеличивает счетчик угаданных из всех слов. <br/>
                    Кнопка «Не угадано» - увеличивает счетчик всех слов. <br/>
                </div>
            </Help>
        {/if}
    </div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap%27');

:global() {
    overflow: hidden;
}

:global(html) {
    overflow: hidden;
}

:global(body) {
          background-color: rgba(00, 99, 33, 1);
          background-blend-mode: multiply;
          /* background-image: url(crocodile.png); */
          background-repeat: no-repeat;
          background-position: center;
          background-size: 75%;
          overflow: hidden;
}

p {
          font-size: 400%;
          color: #fff;

}

img {
          margin-left: -90px;
}

.heading {
          width: 100%;
          height: 100px;
          background-color: #56A44E;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          position: static;
          border: 1px solid #000;
          border-radius: 15px 70px 15px 70px;
          box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
}


.title {
          background: linear-gradient(to right, #FFCCFF, #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: fantasy;
          margin: 0;
}

img:hover,
.title:hover {
          cursor: pointer;
}

.help-button {
          color: #fff;
          position: absolute;
          right: 25px;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-size: 17px;
          outline: none;
          border: 0;
          background: transparent;
}

.help-button:hover, .help-button:focus {
          color: #000;
          cursor: pointer;
          border: 1px solid #000;
}

.score-container,
.best-container {
          background-color: #56A44E;
          width: 10%;
          height: 100px;
          border: 1px solid #000;
          position: absolute;
          top: 150px;
          border-radius: 10px 30px 10px 30px;
          text-align: center;
          justify-content: center;
          align-items: center;
          display: flex;
          text-transform: uppercase;
}


.score-container {
          left: calc(50%);
}

.best-container {
          left: calc(50% - 11%);
}

.text-score .score-container, .text-score .best-container {
          top: 215px;
          border: none;
          border-radius: none;
          background-color: transparent;
}

.text-score .score-container p,
.text-score .best-container p {
          font-size: 35px;
}

.game-container {
          background: none;
          width: 100%;
          position: absolute;
          top: 135px;
          text-align: center;
}

.answer {
          font-size: 150px;
          font-family: 'Cabin Sketch', cursive;
          font-weight: normal;
          color: #FF99CC;
}



.answer4 {
          font-size: 115px;
          font-family: 'Cabin Sketch', cursive;
          font-weight: normal;
          color: #FF99CC;
          padding-top: 50px;
}


.Good,
.Bad,
.NewWord {
          background-color: #56A44E;
          width: 22%;
          height: 120px;
          border: 1px solid #000;
          position: absolute;
          top: 550px;
          border-radius: 10px 30px 10px 30px;
          text-align: center;
          justify-content: center;
          align-items: center;
          /*display: flex;*/
          font-size: 230%;
          color: #fff;
          box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
          display: inline-block;
          vertical-align: middle;
          transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out, box-shadow 0.4s ease-in-out;
}

.Good {
          left: 10%;
}

.Bad {
          right: 10%;
}

.NewWord {
          width: 32%;
          top: 730px;
          left: calc(50% - 15%);
          cursor: pointer;
}

.Good:hover,
.Bad:hover,
.NewWord:hover, .Good:focus,
.Bad:focus,
.NewWord:focus{
          /* transform: translateY(2px); */
          background-color: #388E5f;
}

.goodbad button {
          margin-bottom: 2%;
          width: 22%;
          height: 120px;
          cursor: pointer;
            /*background: ;*/
          font-weight: 500;
          display: inline-block;
          vertical-align: middle;
          line-height: 10px;
}

.Good:active,
.Bad:active,
.NewWord:active {
          box-shadow: inset 1px 1px 10px -1px
}

@font-face {
          font-family: "ComedySketchDemoRegular";
          src: url("ComedySketchDemoRegular.woff") format("woff");
          font-style: normal;
          font-weight: normal;
}

@media screen and (max-width: 1280px) and (max-height: 800px) {

          .Good,
          .Bad,
          .NewWord {
                    height: 65px;
                    top: 470px;
          }

          .Good {
                    left: 17%;
          }

          .Bad {
                    right: 17%;
          }

          .NewWord {
                    top: 600px;
          }

          .text-score .score-container p, .text-score .best-container p {
          font-size: 25px;
        }
}

@media screen and (max-width: 1080px) and (max-height: 1920px) {

          p {
                    font-size: 120px;
                    font-style: bold;
          }

          .heading {
                    height: 150px;
          }

          .title {
                    font-size: 50px;
          }

          .help-button {
                    font-size: 30px;
          }

          .best-container,
          .score-container {
                    height: 150px;
                    width: 20%;
                    top: 200px;
          }

          .scores-container {
                    top: 500px
          }

          .score-container {
                    left: calc(50%);
          }

          .best-container {
                    left: calc(50% - 22%);
          }

          .score-container,
          .best-container {
                    top: 350px;
          }

          .game-container {
                    top: 390px;
          }

          .answer {
                    font-size: 230px;
                    
          }
          
          .answer4 {
                    font-size: 190px;
                    
          }

          .Good,
          .Bad {
                    top: 1050px;
                    width: 30%;
                    font-size: 50px;
                    font-weight: 600;
                    height: 180px;
          }

          .Good {
                    left: 17%;
          }

          .Bad {
                    right: 17%;
          }

          .NewWord {
                    top: 1425px;
                    width: 50%;
                    font-size: 50px;
                    left: 25%;
                    font-weight: 600;
                    height: 180px;
          }
}

/*asd*/

.rules {
          padding-left: 2%;
}

.header {
          padding-left: 5%;
}

@media screen and (max-width: 3900px) {

          .header {
                    color: #061621;
                    font-size: 2.8vh;
                    padding-left: 2.5%;
          }

          .rules {
                    font-size: 2.8vh;
                    width: 92%;
                    padding-left: 2.5%;
          }
}

@media screen and (max-width: 2050px) {
          .header {
                    color: #061621;
                    font-size: 2.8vh;
                    padding-left: 1.5%;
          }

          .rules {
                    width: 92%;
                    font-size: 2.8vh;
                    padding-left: 1.5%;
          }
}

@media screen and (max-width: 1300px) {
          .header {
                    font-size: 2.5vh;
                    color: #061621;
          }

          .rules {
                    font-size: 2.5vh;
                    width: 92%;
          }
}

@media screen and (max-width: 1000px) and (max-height: 1400px) {
          .header {
                    font-size: 2.5vh;
                    color: #061621;
          }

          .rules {
                    text-align: left;
                    font-size: 26px;
                    width: 92%;
          }
}

@media screen and (max-width: 500px) and (max-height: 1000px) {
          .header {
                    font-size: 2.5vh;
                    color: #061621;
          }

          .rules {
                    font-size: 15px;
                    width: 92%;
          }
}

@media screen and (max-width: 400px) and (max-height: 700px) {
          .header {
                    font-size: 2.5vh;
                    color: #061621;
          }

          .rules {
                    font-size: 10px;
                    width: 92%;
          }
}

</style>