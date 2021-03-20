import { cards } from "../consts/cards";

const cardSymbol:string[] = ['Hearts','Diamonds','Clubs','Spades']

export const generateDeck = () => {
    const deck = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 14; j++) {
            deck.push(cards[j]);
        }
    }
    return deck;
}