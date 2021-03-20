import { DiceValues, PlayerDices } from "../consts/diceData";

export const getFrequnecy = (currentDices: PlayerDices) => {
    const frequency: any = {};
    Object.values(currentDices).forEach((x: DiceValues) => {
        frequency[x.value] = (frequency[x.value] || 0) + 1;
    })
    return frequency;
}

export const isPoker = (currentDices: PlayerDices): boolean => {
    const frequency = getFrequnecy(currentDices);
    return Object.values(frequency).includes(4)
}

export const isMinScala = (currentDices: PlayerDices): boolean => {
    const frequency = getFrequnecy(currentDices);
    let counter: number = 0;
    for (let i = 0; i < 5; i++) {
        if (frequency[i] > 0) {
            counter++
        }
    }
    return counter === 5 ? true : false;
}

export const isMaxScala = (currentDices: PlayerDices): boolean => {
    const frequency = getFrequnecy(currentDices);
    let counter: number = 0;
    for (let i = 0; i < 6; i++) {
        if (frequency[i] > 0) {
            counter++
        }
    }
    return counter === 6 ? true : false;
}