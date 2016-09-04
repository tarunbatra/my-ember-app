import Ember from 'ember';

let data = [{
    "firstName": "Emi",
    "lastName": "Weber",
    "account": "Orci Consulting",
    "customerSince": "1447727170",
    "productsPurchased": [
        "Metoprolol Tartrate ",
        "Amlodipine Besylate",
        "Alendronate Sodium",
        "Ciprofloxacin HCl"
    ],
    "revenueGenerated": "$9,546",
    "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Morgan",
      "lastName": "Parrish",
      "account": "Amet Ultricies Sem Institute",
      "customerSince": "1471924510",
      "productsPurchased": [
          "Niaspan",
          "Ranitidine HCl",
          "Furosemide"
      ],
      "revenueGenerated": "$9,752",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Lewis",
      "lastName": "Sims",
      "account": "Dui Fusce Institute",
      "customerSince": "1490169643",
      "productsPurchased": [
          "Fluoxetine HCl"
      ],
      "revenueGenerated": "$9,180",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Cadman",
      "lastName": "Flores",
      "account": "Libero Proin Sed Associates",
      "customerSince": "1449212977",
      "productsPurchased": [
          "Diazepam",
          "Alprazolam",
          "Klor-Con M20",
          "Seroquel"
      ],
      "revenueGenerated": "$8,504",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Colette",
      "lastName": "Kane",
      "account": "Feugiat Inc.",
      "customerSince": "1451912731",
      "productsPurchased": [
          "Citalopram HBr",
          "Simvastatin",
          "Pantoprazole Sodium"
      ],
      "revenueGenerated": "$5,671",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Abra",
      "lastName": "Hurley",
      "account": "Lacus Corporation",
      "customerSince": "1441159307",
      "productsPurchased": [
          "Hydrocodone/APAP",
          "Lorazepam"
      ],
      "revenueGenerated": "$7,787",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Graham",
      "lastName": "Hughes",
      "account": "Non Arcu Limited",
      "customerSince": "1452119493",
      "productsPurchased": [
          "Alendronate Sodium"
      ],
      "revenueGenerated": "$1,981",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Thor",
      "lastName": "Rosa",
      "account": "Eu Odio Corporation",
      "customerSince": "1501720798",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$2,168",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Ariana",
      "lastName": "King",
      "account": "Nulla Integer Urna LLP",
      "customerSince": "1448676706",
      "productsPurchased": [
          "Clonazepam",
          "Metoprolol Succinate"
      ],
      "revenueGenerated": "$2,553",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Skyler",
      "lastName": "Shaw",
      "account": "A Purus Duis Corp.",
      "customerSince": "1489283639",
      "productsPurchased": [
          "Lisinopril",
          "Azithromycin"
      ],
      "revenueGenerated": "$3,159",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Malachi",
      "lastName": "Hardy",
      "account": "Erat LLP",
      "customerSince": "1488971458",
      "productsPurchased": [
          "Atenolol",
          "Lyrica",
          "Clindamycin HCl",
          "Suboxone"
      ],
      "revenueGenerated": "$5,818",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Gloria",
      "lastName": "Russo",
      "account": "Ultricies Dignissim Lacus Inc.",
      "customerSince": "1499657695",
      "productsPurchased": [
          "Simvastatin",
          "Enalapril Maleate"
      ],
      "revenueGenerated": "$2,751",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Eden",
      "lastName": "Gibbs",
      "account": "Vitae Diam LLP",
      "customerSince": "1471667588",
      "productsPurchased": [
          "Omeprazole (Rx)",
          "Bystolic",
          "Symbicort",
          "Lisinopril/Hydrochlorothiazide"
      ],
      "revenueGenerated": "$1,709",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Leo",
      "lastName": "Atkins",
      "account": "Semper Industries",
      "customerSince": "1447392143",
      "productsPurchased": [
          "Suboxone"
      ],
      "revenueGenerated": "$6,856",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Len",
      "lastName": "Mcconnell",
      "account": "Lacus Ut Institute",
      "customerSince": "1463886153",
      "productsPurchased": [
          "Amlodipine Besylate",
          "Benicar HCT"
      ],
      "revenueGenerated": "$8,245",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Wayne",
      "lastName": "Reese",
      "account": "Quis Tristique PC",
      "customerSince": "1457314708",
      "productsPurchased": [
          "Warfarin Sodium",
          "Carvedilol",
          "Lovastatin",
          "Amoxicillin Trihydrate/Potassium Clavulanate"
      ],
      "revenueGenerated": "$3,267",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "McKenzie",
      "lastName": "Potter",
      "account": "Eu Erat PC",
      "customerSince": "1487755613",
      "productsPurchased": [
          "Spiriva Handihaler",
          "Pantoprazole Sodium",
          "Lantus Solostar"
      ],
      "revenueGenerated": "$7,444",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Orli",
      "lastName": "Hooper",
      "account": "Nullam Lobortis Ltd",
      "customerSince": "1465933272",
      "productsPurchased": [
          "Alendronate Sodium",
          "Clonazepam",
          "Lisinopril"
      ],
      "revenueGenerated": "$8,148",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Brody",
      "lastName": "Dickson",
      "account": "Cursus Nunc Mauris Associates",
      "customerSince": "1480956265",
      "productsPurchased": [
          "Venlafaxine HCl ER",
          "Ventolin HFA"
      ],
      "revenueGenerated": "$3,189",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Phoebe",
      "lastName": "Hansen",
      "account": "Erat Vitae Risus Limited",
      "customerSince": "1504049129",
      "productsPurchased": [
          "Cephalexin",
          "Fluoxetine HCl",
          "Lantus"
      ],
      "revenueGenerated": "$2,404",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Ivory",
      "lastName": "Burnett",
      "account": "Integer Limited",
      "customerSince": "1496791635",
      "productsPurchased": [
          "Simvastatin"
      ],
      "revenueGenerated": "$5,228",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Hadley",
      "lastName": "Durham",
      "account": "Suspendisse Sagittis Foundation",
      "customerSince": "1441207937",
      "productsPurchased": [
          "Fluoxetine HCl",
          "Carvedilol",
          "Cyclobenzaprin HCl"
      ],
      "revenueGenerated": "$1,888",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Nevada",
      "lastName": "Henderson",
      "account": "Aliquam Enim Nec Limited",
      "customerSince": "1482830834",
      "productsPurchased": [
          "Tramadol HCl"
      ],
      "revenueGenerated": "$8,656",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Zane",
      "lastName": "Perkins",
      "account": "Molestie Corporation",
      "customerSince": "1451371016",
      "productsPurchased": [
          "Actos",
          "Lisinopril",
          "Meloxicam"
      ],
      "revenueGenerated": "$5,868",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Brendan",
      "lastName": "Browning",
      "account": "Nam Porttitor Consulting",
      "customerSince": "1497841604",
      "productsPurchased": [
          "Lisinopril",
          "Lexapro",
          "Hydrochlorothiazide"
      ],
      "revenueGenerated": "$6,170",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Kai",
      "lastName": "Forbes",
      "account": "Nullam LLC",
      "customerSince": "1467596466",
      "productsPurchased": [
          "Lantus",
          "Hydrocodone/APAP"
      ],
      "revenueGenerated": "$9,302",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Jacqueline",
      "lastName": "Sanders",
      "account": "Pede Et Risus Ltd",
      "customerSince": "1452630380",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$7,500",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Miranda",
      "lastName": "Flores",
      "account": "Arcu Et Pede Corp.",
      "customerSince": "1486280477",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$4,003",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Calista",
      "lastName": "Spencer",
      "account": "Libero Dui Nec LLC",
      "customerSince": "1476869968",
      "productsPurchased": [
          "Fluoxetine HCl",
          "Vyvanse",
          "Januvia"
      ],
      "revenueGenerated": "$6,365",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Farrah",
      "lastName": "Wolf",
      "account": "Metus LLC",
      "customerSince": "1457624248",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$3,160",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Raya",
      "lastName": "Patterson",
      "account": "Sit Amet Ante Ltd",
      "customerSince": "1443346504",
      "productsPurchased": [
          "Metformin HCl",
          "Furosemide",
          "Methylprednisolone"
      ],
      "revenueGenerated": "$1,258",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Shoshana",
      "lastName": "Riggs",
      "account": "Commodo Ipsum Suspendisse Corp.",
      "customerSince": "1489954124",
      "productsPurchased": [
          "Levothyroxine Sodium",
          "Lovastatin"
      ],
      "revenueGenerated": "$5,808",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Bethany",
      "lastName": "Ross",
      "account": "Gravida Company",
      "customerSince": "1482661261",
      "productsPurchased": [
          "Tamsulosin HCl"
      ],
      "revenueGenerated": "$7,042",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Chandler",
      "lastName": "Delgado",
      "account": "Justo Eu Arcu Ltd",
      "customerSince": "1441288509",
      "productsPurchased": [
          "Lyrica",
          "Hydrocodone/APAP"
      ],
      "revenueGenerated": "$9,479",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Ethan",
      "lastName": "Harris",
      "account": "Turpis Egestas Fusce Consulting",
      "customerSince": "1472780584",
      "productsPurchased": [
          "Clonazepam",
          "Folic Acid"
      ],
      "revenueGenerated": "$5,666",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Victor",
      "lastName": "Shelton",
      "account": "Nunc Ac Corp.",
      "customerSince": "1455678524",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$5,998",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Nora",
      "lastName": "Ayala",
      "account": "Lacus Vestibulum PC",
      "customerSince": "1481490416",
      "productsPurchased": [
          "Lovaza",
          "Pravastatin Sodium",
          "Lantus Solostar",
          "Promethazine HCl"
      ],
      "revenueGenerated": "$5,540",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Blake",
      "lastName": "Ramsey",
      "account": "Eu Elit Nulla Foundation",
      "customerSince": "1441763881",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$6,412",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Callum",
      "lastName": "Barber",
      "account": "Nullam LLP",
      "customerSince": "1472812012",
      "productsPurchased": [
          "Amoxicillin Trihydrate/Potassium Clavulanate",
          "Fluoxetine HCl",
          "Ciprofloxacin HCl"
      ],
      "revenueGenerated": "$2,427",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Iliana",
      "lastName": "Dixon",
      "account": "Velit Sed Malesuada Industries",
      "customerSince": "1499073577",
      "productsPurchased": [
          "Fluticasone Propionate"
      ],
      "revenueGenerated": "$4,595",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Justine",
      "lastName": "Barber",
      "account": "Pellentesque Corporation",
      "customerSince": "1480523815",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$6,243",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "MacKenzie",
      "lastName": "Herring",
      "account": "Lorem Eu Metus Limited",
      "customerSince": "1453420231",
      "productsPurchased": [
          "Endocet"
      ],
      "revenueGenerated": "$4,296",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Byron",
      "lastName": "Williamson",
      "account": "Montes Nascetur Limited",
      "customerSince": "1494629289",
      "productsPurchased": [
          "Lisinopril",
          "Amlodipine Besylate",
          "Fluoxetine HCl",
          "Doxycycline Hyclate"
      ],
      "revenueGenerated": "$4,197",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Imani",
      "lastName": "Campbell",
      "account": "Tempor Bibendum Donec LLC",
      "customerSince": "1464878675",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$9,976",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Adrienne",
      "lastName": "Stout",
      "account": "Adipiscing Ligula LLP",
      "customerSince": "1482110907",
      "productsPurchased": [
          "Clonazepam",
          "Amlodipine Besylate",
          "Enalapril Maleate",
          "Lidoderm"
      ],
      "revenueGenerated": "$3,483",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Garrett",
      "lastName": "Romero",
      "account": "Venenatis Vel Faucibus PC",
      "customerSince": "1455175900",
      "productsPurchased": [
          "Lidoderm",
          "Warfarin Sodium",
          "Furosemide"
      ],
      "revenueGenerated": "$4,225",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Brennan",
      "lastName": "Medina",
      "account": "Aliquam Inc.",
      "customerSince": "1461224568",
      "productsPurchased": [
          "Cyclobenzaprin HCl",
          "Pravastatin Sodium",
          "Prednisone"
      ],
      "revenueGenerated": "$4,482",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Addison",
      "lastName": "Hooper",
      "account": "Euismod Et Industries",
      "customerSince": "1482285755",
      "productsPurchased": [
          "Flovent HFA",
          "Diovan HCT"
      ],
      "revenueGenerated": "$8,719",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Akeem",
      "lastName": "Parsons",
      "account": "Magna Suspendisse Ltd",
      "customerSince": "1480634868",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$5,776",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Mariko",
      "lastName": "Hurst",
      "account": "Nascetur Ridiculus LLC",
      "customerSince": "1459100274",
      "productsPurchased": [
          "Simvastatin"
      ],
      "revenueGenerated": "$9,303",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Lucian",
      "lastName": "Johnston",
      "account": "Risus Industries",
      "customerSince": "1462275243",
      "productsPurchased": [
          "Omeprazole (Rx)",
          "Doxycycline Hyclate",
          "Omeprazole (Rx)",
          "Hydrocodone/APAP"
      ],
      "revenueGenerated": "$1,166",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Gray",
      "lastName": "Humphrey",
      "account": "Et Netus Et PC",
      "customerSince": "1492741127",
      "productsPurchased": [
          "Citalopram HBR",
          "Atenolol",
          "Ibuprofen (Rx)",
          "Sulfamethoxazole/Trimethoprim"
      ],
      "revenueGenerated": "$4,557",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Perry",
      "lastName": "Blevins",
      "account": "Mauris Corp.",
      "customerSince": "1466650349",
      "productsPurchased": [
          "Amoxicillin"
      ],
      "revenueGenerated": "$9,438",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Anjolie",
      "lastName": "Durham",
      "account": "Ornare Industries",
      "customerSince": "1501030506",
      "productsPurchased": [
          "Hydrochlorothiazide",
          "Omeprazole (Rx)"
      ],
      "revenueGenerated": "$8,473",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Sara",
      "lastName": "Vargas",
      "account": "In Corporation",
      "customerSince": "1483813101",
      "productsPurchased": [
          "Klor-Con M20",
          "Bystolic"
      ],
      "revenueGenerated": "$8,642",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Damon",
      "lastName": "Miranda",
      "account": "Vitae Posuere At Foundation",
      "customerSince": "1442089287",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$5,170",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Flavia",
      "lastName": "Moss",
      "account": "Mi Duis Risus Corp.",
      "customerSince": "1456068004",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$9,893",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Kaseem",
      "lastName": "Mcintosh",
      "account": "Aliquam LLP",
      "customerSince": "1447886970",
      "productsPurchased": [
          "Simvastatin",
          "Advair Diskus",
          "Potassium Chloride",
          "Amlodipine Besylate"
      ],
      "revenueGenerated": "$4,996",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Ira",
      "lastName": "Salas",
      "account": "A Auctor Non PC",
      "customerSince": "1447962481",
      "productsPurchased": [
          "Venlafaxine HCl ER"
      ],
      "revenueGenerated": "$1,469",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Evelyn",
      "lastName": "Pate",
      "account": "Amet Nulla LLP",
      "customerSince": "1488508510",
      "productsPurchased": [
          "Metoprolol Succinatee",
          "Amoxicillin",
          "Digoxin",
          "Azithromycin"
      ],
      "revenueGenerated": "$2,477",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Cara",
      "lastName": "Warren",
      "account": "Tincidunt Orci Institute",
      "customerSince": "1448617801",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$7,452",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Tatiana",
      "lastName": "Oneal",
      "account": "Quisque Corp.",
      "customerSince": "1479918861",
      "productsPurchased": [
          "Niaspan",
          "Ibuprofen (Rx)"
      ],
      "revenueGenerated": "$2,944",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Kareem",
      "lastName": "Phelps",
      "account": "Felis Eget Industries",
      "customerSince": "1444034847",
      "productsPurchased": [
          "Prednisone",
          "Lexapro"
      ],
      "revenueGenerated": "$3,803",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Wanda",
      "lastName": "Rosario",
      "account": "Sed Eget Lacus LLC",
      "customerSince": "1465744511",
      "productsPurchased": [
          "Warfarin Sodium",
          "Enalapril Maleate",
          "Tricor"
      ],
      "revenueGenerated": "$2,160",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Ralph",
      "lastName": "Collier",
      "account": "Pharetra Nibh Aliquam PC",
      "customerSince": "1484649418",
      "productsPurchased": [
          "Alprazolam",
          "Nuvaring"
      ],
      "revenueGenerated": "$2,918",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Portia",
      "lastName": "Reid",
      "account": "Dui Incorporated",
      "customerSince": "1472065615",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$8,268",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Dean",
      "lastName": "Nolan",
      "account": "Donec Vitae Ltd",
      "customerSince": "1499105454",
      "productsPurchased": [
          "Zolpidem Tartrate"
      ],
      "revenueGenerated": "$2,674",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Dane",
      "lastName": "Alvarado",
      "account": "Tincidunt PC",
      "customerSince": "1486788413",
      "productsPurchased": [
          "Vytorin",
          "Amoxicillin Trihydrate/Potassium Clavulanate",
          "Lorazepam",
          "Lidoderm"
      ],
      "revenueGenerated": "$1,382",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Ulric",
      "lastName": "Mcdaniel",
      "account": "Ut Ltd",
      "customerSince": "1441336685",
      "productsPurchased": [
          "Furosemide",
          "Naproxen"
      ],
      "revenueGenerated": "$5,549",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Ayanna",
      "lastName": "Chavez",
      "account": "Facilisis Inc.",
      "customerSince": "1486637765",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$5,225",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Jared",
      "lastName": "Henderson",
      "account": "Aliquet Company",
      "customerSince": "1457653823",
      "productsPurchased": [
          "Carvedilol"
      ],
      "revenueGenerated": "$1,659",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Vernon",
      "lastName": "Schneider",
      "account": "Nascetur Ridiculus LLC",
      "customerSince": "1445039613",
      "productsPurchased": [
          "Lisinopril",
          "Vyvanse",
          "Benicar",
          "Lyrica"
      ],
      "revenueGenerated": "$1,976",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Bree",
      "lastName": "Keller",
      "account": "Enim LLC",
      "customerSince": "1478162734",
      "productsPurchased": [
          "Lisinopril",
          "Venlafaxine HCl ER",
          "Sertraline HCl"
      ],
      "revenueGenerated": "$3,822",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Amela",
      "lastName": "Mccray",
      "account": "Libero Foundation",
      "customerSince": "1471693633",
      "productsPurchased": [
          "Atenolol",
          "Citalopram HBR",
          "Cyclobenzaprin HCl",
          "Metformin HCl"
      ],
      "revenueGenerated": "$7,095",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Jesse",
      "lastName": "Douglas",
      "account": "In Lorem Donec Corp.",
      "customerSince": "1470521444",
      "productsPurchased": [
          "Lisinopril",
          "Nuvaring",
          "Azithromycin",
          "Ibuprofen (Rx)"
      ],
      "revenueGenerated": "$8,800",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Finn",
      "lastName": "Sweeney",
      "account": "Urna Inc.",
      "customerSince": "1460323017",
      "productsPurchased": [
          "Fluconazole"
      ],
      "revenueGenerated": "$2,723",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Hannah",
      "lastName": "Roberts",
      "account": "In Corp.",
      "customerSince": "1475306566",
      "productsPurchased": [
          "Metformin HCl"
      ],
      "revenueGenerated": "$8,930",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Yetta",
      "lastName": "Bennett",
      "account": "Sem Corp.",
      "customerSince": "1469587115",
      "productsPurchased": [
          "Pantoprazole Sodium",
          "Triamterene/Hydrochlorothiazide"
      ],
      "revenueGenerated": "$2,082",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Arthur",
      "lastName": "Whitfield",
      "account": "Arcu Foundation",
      "customerSince": "1469926218",
      "productsPurchased": [
          "Ventolin HFA"
      ],
      "revenueGenerated": "$7,025",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Aiko",
      "lastName": "Mitchell",
      "account": "Proin Sed Turpis Ltd",
      "customerSince": "1482633545",
      "productsPurchased": [
          "Levoxyl"
      ],
      "revenueGenerated": "$1,925",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Venus",
      "lastName": "Cantrell",
      "account": "Nisi A Odio Foundation",
      "customerSince": "1455029742",
      "productsPurchased": [
          "Amoxicillin Trihydrate/Potassium Clavulanate"
      ],
      "revenueGenerated": "$9,399",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Cullen",
      "lastName": "Horn",
      "account": "Vulputate Mauris Sagittis Associates",
      "customerSince": "1483285972",
      "productsPurchased": [
          "Potassium Chloride",
          "Simvastatin",
          "Risperidone"
      ],
      "revenueGenerated": "$4,434",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Chastity",
      "lastName": "Yates",
      "account": "Non Quam Pellentesque Foundation",
      "customerSince": "1443606399",
      "productsPurchased": [
          "Alprazolam",
          "Omeprazole (Rx)",
          "Pantoprazole Sodium",
          "Glyburide"
      ],
      "revenueGenerated": "$5,134",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Felicia",
      "lastName": "Kim",
      "account": "At Pretium Aliquet Associates",
      "customerSince": "1447197713",
      "productsPurchased": [
          "Tricor"
      ],
      "revenueGenerated": "$2,600",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Lucas",
      "lastName": "Rollins",
      "account": "Congue A Aliquet PC",
      "customerSince": "1474147009",
      "productsPurchased": [
          "Lisinopril/Hydrochlorothiazide",
          "Fluoxetine HCl"
      ],
      "revenueGenerated": "$3,056",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Armando",
      "lastName": "Mccullough",
      "account": "Id Enim Curabitur Limited",
      "customerSince": "1490351705",
      "productsPurchased": [
          "Advair Diskus",
          "Lipitor",
          "Atenolol",
          "Pravastatin Sodium"
      ],
      "revenueGenerated": "$6,841",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Magee",
      "lastName": "Woods",
      "account": "Ipsum Inc.",
      "customerSince": "1495498429",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$6,943",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Wynne",
      "lastName": "Elliott",
      "account": "Duis Elementum Ltd",
      "customerSince": "1450336362",
      "productsPurchased": [
          "Zolpidem Tartrate",
          "Metoprolol Succinate",
          "Benicar HCT"
      ],
      "revenueGenerated": "$5,289",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Kyle",
      "lastName": "Curry",
      "account": "Fringilla LLP",
      "customerSince": "1442478908",
      "productsPurchased": [
          "Alprazolam",
          "Ibuprofen (Rx)"
      ],
      "revenueGenerated": "$4,758",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Macon",
      "lastName": "Meyer",
      "account": "Aenean Incorporated",
      "customerSince": "1445187212",
      "productsPurchased": [
          "Trazodone HCl",
          "Plavix",
          "Sulfamethoxazole/Trimethoprim"
      ],
      "revenueGenerated": "$1,341",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Victoria",
      "lastName": "Gillespie",
      "account": "Sem Elit Pharetra Foundation",
      "customerSince": "1461218997",
      "productsPurchased": [
          "Omeprazole (Rx)",
          "TriNessa"
      ],
      "revenueGenerated": "$4,241",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Merrill",
      "lastName": "Vargas",
      "account": "Quis Pede Praesent Corporation",
      "customerSince": "1468533113",
      "productsPurchased": [
          "Klor-Con M20",
          "Premarin"
      ],
      "revenueGenerated": "$8,922",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Sean",
      "lastName": "Espinoza",
      "account": "Ullamcorper Corporation",
      "customerSince": "1494534474",
      "productsPurchased": [
          "Azithromycin",
          "Suboxone",
          "Diazepam"
      ],
      "revenueGenerated": "$2,510",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Scott",
      "lastName": "Delgado",
      "account": "Ac Fermentum Company",
      "customerSince": "1491707336",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$8,993",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Xantha",
      "lastName": "Trujillo",
      "account": "Nullam Incorporated",
      "customerSince": "1489180725",
      "productsPurchased": [
          "Nexium",
          "Bystolic",
          "Paroxetine HCl",
          "Sertraline HCl"
      ],
      "revenueGenerated": "$9,245",
      "relationshipManager": "Kyla Chandler"
  }, {
      "firstName": "Cole",
      "lastName": "Rice",
      "account": "Erat Volutpat Nulla Limited",
      "customerSince": "1452734909",
      "productsPurchased": [
          "Carisoprodol",
          "Cyclobenzaprin HCl",
          "Tamsulosin HCl"
      ],
      "revenueGenerated": "$6,104",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Benedict",
      "lastName": "Holden",
      "account": "Gravida Non Sollicitudin Consulting",
      "customerSince": "1465336004",
      "productsPurchased": [
          "Lisinopril",
          "Metoprolol Tartrate ",
          "Lisinopril"
      ],
      "revenueGenerated": "$7,053",
      "relationshipManager": "Maris Bond"
  }, {
      "firstName": "Jack",
      "lastName": "Best",
      "account": "Fermentum Ltd",
      "customerSince": "1481883322",
      "productsPurchased": [
          "Furosemide"
      ],
      "revenueGenerated": "$4,263",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Castor",
      "lastName": "Mays",
      "account": "Curae; Institute",
      "customerSince": "1444826852",
      "productsPurchased": [
          "Alprazolam",
          "Simvastatin",
          "Furosemide",
          "Simvastatin"
      ],
      "revenueGenerated": "$5,783",
      "relationshipManager": "Cameron Chen"
  }, {
      "firstName": "Tatyana",
      "lastName": "Hayden",
      "account": "Aliquam Rutrum Inc.",
      "customerSince": "1489864831",
      "productsPurchased": [
          "Lisinopril",
          "Zolpidem Tartrate",
          "Simvastatin"
      ],
      "revenueGenerated": "$9,178",
      "relationshipManager": "Maris Bond"
  }];

export default Ember.Route.extend({
  model() {
    return data;
  }
});
