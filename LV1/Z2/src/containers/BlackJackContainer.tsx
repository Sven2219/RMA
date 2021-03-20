import React, { useCallback, useEffect, useState } from 'react';
import { Card } from '../consts/cards';
import { PlayerKeys } from '../consts/keys';
import { generateDeck } from '../helpers/deckFunctions';
import BlackJackScreen from '../screens/BlackJackScreen';



export interface BlackJack {
    cards: string[];
    totalValue: number;
}

const BlackJackContainer = () => {

    const [userCards, setUserCards] = useState<BlackJack>({ cards: [], totalValue: 0 });
    const [computerCards, setComputerCards] = useState<BlackJack>({ cards: [], totalValue: 0 });
    const [isEnough, setIsEnough] = useState<boolean>(false);
    const [dealNumber, setDealNumber] = useState<number>(0);
    const [deck, setDeck] = useState<Card[]>([]);
    const [player, setPlayer] = useState<number>(PlayerKeys.PLAYER);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    useEffect(() => {
        if (!isGameOver) {
            setDeck(generateDeck());
        }
    }, [player, isGameOver])

    const generateRandomCard = useCallback(() => {
        const randomNumber = Math.floor(Math.random() * deck.length);
        const deckCopy = [...deck];
        const randomCard = deckCopy.splice(randomNumber, 1);
        return { deckCopy, randomCard };
    }, [deck])


    useEffect(() => {
        if (player === PlayerKeys.COMPUTER && !isGameOver) {
            let computerValue: number = 0;
            const computerCards = [];
            while (computerValue <= 16) {
                const { deckCopy, randomCard } = generateRandomCard();
                setDeck(deckCopy)
                computerCards.push(randomCard[0].card)
                computerValue += randomCard[0].card === "A" && computerValue > 10 ? 1 : randomCard[0].value;
            }
            setComputerCards({cards:computerCards,totalValue:computerValue})
        }
    }, [player])

    useEffect(() => {
        if (dealNumber !== 0 && player === PlayerKeys.PLAYER && !isGameOver) {
            const { deckCopy, randomCard } = generateRandomCard();
            const totalValue = randomCard[0].card === "A" && userCards.totalValue >= 11 ? userCards.totalValue + 1 : userCards.totalValue + randomCard[0].value;
            setUserCards((state) => {
                return {
                    cards: [...state.cards, randomCard[0].card],
                    totalValue: totalValue
                }
            })
            if (totalValue === 21) {
                setIsEnough(true);
            } else if (totalValue > 21) {
                setIsGameOver(true);
            } else {
                setDeck(deckCopy);
            }
        }
    }, [dealNumber])

    useEffect(() => {
        if (isEnough) {
            setPlayer(PlayerKeys.COMPUTER)
        }
    }, [isEnough])

    return (
        <BlackJackScreen
            userCards={userCards}
            computerCards={computerCards}
            isEnough={isEnough}
            isHuman={player === PlayerKeys.PLAYER}
            isGameOver={isGameOver}
            incrementDeal={setDealNumber}
            setIsEnough={setIsEnough}
        />
    )
}


export default BlackJackContainer;