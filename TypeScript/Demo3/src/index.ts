//comment here
import {Monster, SuperMonster} from "./models/monsterTypes"

const monster1: Monster = {
    firstName: "Zorg",
    age: 500,
    type: "Undead",
    moreInfo: "Terrifies entire galaxies!"
};

const monster2: Monster = {
    firstName: "Morgana",
    lastName: "Pendragon",
    age: 761,
    type: "Human",
    moreInfo: "An ancient sorceress from Arthurian legends."
};
const monster3: Monster = {
    firstName: "SCP-728",
    age: 99999,
    type: "Blob",
    moreInfo: "Only records lie in scripts from ancient civilizations. Not much is known except it is to be feared."
};

const superMonster1: SuperMonster = {
    firstName: "Gohan",
    age: 13,
    powerLevel: 480000,
    type: "Human",
    moreInfo: "Gohan, son of Goku, is a Human-Saiyan Hybrid who's attained the legendary super saiyan form."
}

let monsters = [monster1, monster2, monster3, superMonster1];

console.log(monsters);