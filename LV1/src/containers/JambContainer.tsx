import React, { useCallback, useEffect, useState } from 'react';
import JambScreen from '../screens/JambScreen';
import { numberOfPlayers as players } from '../consts/keys';
import { Player } from '../consts/interfaces';
import { generatePlayers } from '../helpers/startUpFunctions';
import { dicesDefaultValues, PlayerDices } from '../consts/diceData';



const JambContainer = () => {

    const [numberOfPlayers, setNumberOfPlayers] = useState<number>(players.TWO_PLAYERS);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const [isPlayerStatisticOpen, setIsPlayerStatisticOpen] = useState<boolean>(false);

    const [throwNumber, setThrowNumber] = useState<number>(0);
    const [allPlayers, setAllPlayers] = useState<Player[]>([]);
    const [currentPlayer, setCurrentPlayer] = useState<number>(1);
    const [currentDices, setCurrentDices] = useState<PlayerDices>(dicesDefaultValues);

    useEffect(() => {
        if (!isModalOpen) {
            const players: Player[] = generatePlayers(numberOfPlayers);
            setAllPlayers(players);
        }
    }, [isModalOpen])


    useEffect(() => {
        if (throwNumber === 3) {
            if (currentPlayer + 1 <= numberOfPlayers) {
                setCurrentPlayer((state) => state + 1);
                setCurrentDices(dicesDefaultValues);
            } else {
                setCurrentPlayer(1);
            }
            setThrowNumber(0)
        }
    }, [throwNumber])

    const generateDices = useCallback(() => {
        let dices: PlayerDices = Object.values(currentDices).map((el) => {
            if (!el.disabled) {
                const randomNumber = Math.floor((Math.random() * 5) + 0);
                return { value: randomNumber, disabled: false }
            } else {
                return { ...el }
            }
        })
        setThrowNumber((state) => state + 1);
        setCurrentDices(dices);
    }, [currentDices, setCurrentDices, setThrowNumber])


    return (
        <JambScreen
            numberOfPlayers={numberOfPlayers}
            isModalOpen={isModalOpen}
            throwNumber={throwNumber}
            allPlayers={allPlayers}
            currentPlayer={currentPlayer}
            isPlayerStatisticOpen={isPlayerStatisticOpen}
            currentDices={currentDices}
            setCurrentDices={setCurrentDices}
            generateDices={generateDices}
            setIsPlayerStatisticOpen={setIsPlayerStatisticOpen}
            setThrowNumber={setThrowNumber}
            setIsModalOpen={setIsModalOpen}
            setNumberOfPlayers={setNumberOfPlayers}
        />
    )
}


export default JambContainer;