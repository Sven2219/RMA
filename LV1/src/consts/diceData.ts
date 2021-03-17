export interface Dice {
    [key: string]: {
        value: number[]
        disabled: boolean;
    }
}


export const dices: { [key: string]: number[] } = {
    0: [0, 0, 0, 0, 1, 0, 0, 0, 0],
    1: [1, 0, 0, 0, 0, 0, 0, 0, 1],
    2: [1, 0, 0, 0, 1, 0, 0, 0, 1],
    3: [1, 0, 1, 0, 0, 0, 1, 0, 1],
    4: [1, 0, 1, 0, 1, 0, 1, 0, 1],
    5: [1, 0, 1, 1, 0, 1, 1, 0, 1]
}


export interface DiceValues {
    value: number;
    disabled: boolean;

}

export interface PlayerDices {
    [key: number]: DiceValues
}

export const dicesDefaultValues: PlayerDices = {
    0: {
        disabled: false,
        value: 0
    },
    1: {
        disabled: false,
        value: 1
    },
    2: {
        disabled: false,
        value: 2
    },
    3: {
        disabled: false,
        value: 3
    },
    4: {
        disabled: false,
        value: 4
    },
    5: {
        disabled: false,
        value: 5
    }
}