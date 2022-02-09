export interface Character {
    charName: string;
    navigateTrackMod: number;
    scoutMod: number;
    huntForageMod: number;
    mapMod: number; 
    entertainMod: number,
    watchMod: number, 
    id?: string
}

export interface charList extends Array<Character> {}
