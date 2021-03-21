import { cards } from "../consts/cards";



export const generateDeck = () => {
    const deck = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 14; j++) {
            deck.push({ ...cards[j], symbol: i });
        }
    }
    return deck;
}