export interface Character {
    charName: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number, 
    charisma: number,
    strengthMod: number;
    dexterityMod: number;
    constitutionMod: number;
    intelligenceMod: number;
    wisdomMod: number, 
    charismaMod: number,
    id?: string
}

export interface charList extends Array<Character> {}
