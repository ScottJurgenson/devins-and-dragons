export interface Character {
    charName: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number, 
    charisma: number,
    id?: string
}

export interface charList extends Array<Character> {}
