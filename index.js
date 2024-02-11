let obj1 = {
    Adj1: "Crazy",
    Adj2: "Amzing",
    Adj3: "Fire",
    Adj4: "Fantastic",
    Adj5: "Incredible",
    Adj6: "Spectacular",
    Adj7: "Epic",
    Adj8: "Majestic",
    Adj9: "Phenomenal",
    Adj10: "Unbelievable",
    Adj11: "Mind-blowing",
    Adj12: "Outstanding",
    Adj13: "Remarkable",
    Adj14: "Extraordinary",
    Adj15: "Breathtaking",
    Adj16: "Stunning",
    Adj17: "Fascinating",
    Adj18: "Dazzling",
    Adj19: "Magnificent",
    Adj20: "Astonishing"
};
let obj2 = {
    shopName1: "Engine",
    shopName2: "Food",
    shopName3: "Tech",
    shopName4: "Clothing",
    shopName5: "Books",
    shopName6: "Electronics",
    shopName7: "Jewelry",
    shopName8: "Furniture",
    shopName9: "Sports",
    shopName10: "Music",
    shopName11: "Toys",
    shopName12: "Beauty",
    shopName13: "Pets",
    shopName14: "Art",
    shopName15: "Home",
    shopName16: "Garden",
    shopName17: "Accessories",
    shopName18: "Health",
    shopName19: "Stationery",
    shopName20: "Crafts"
};
let obj3 = {
    anotherWord1: "Bros",
    anotherWord2: "Limited",
    anotherWord3: "Hub",
    anotherWord4: "Co",
    anotherWord5: "Group",
    anotherWord6: "Inc",
    anotherWord7: "Corp",
    anotherWord8: "Enterprise",
    anotherWord9: "Services",
    anotherWord10: "Agency",
    anotherWord11: "Associates",
    anotherWord12: "Consulting",
    anotherWord13: "Solutions",
    anotherWord14: "Partners",
    anotherWord15: "Systems",
    anotherWord16: "Industries",
    anotherWord17: "Global",
    anotherWord18: "Network",
    anotherWord19: "Ventures",
    anotherWord20: "International"
};

var ran1 = "Adj" + (Math.round(Math.random() * 19) + 1);
var ran2 = "shopName" + (Math.round(Math.random() * 19) + 1);
var ran3 = "anotherWord" + (Math.round(Math.random() * 19) + 1);


console.log(obj1[ran1]  + obj2[ran2] + " " + obj3[ran3] + " " );
