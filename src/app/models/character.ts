export interface Character {
    charName: string;
    survival: number;
    dexterity: number;
    perception: number;
    intelligence: number; 
    charisma: number,
    id?: string
}

export interface charList extends Array<Character> {}
