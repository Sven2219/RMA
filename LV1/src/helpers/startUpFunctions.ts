import { Player } from "../consts/interfaces";

export const generatePlayers = (numberOfPlayers: number) => {
    let players: Player[] = [];
    for (let i = 0; i < numberOfPlayers; i++) {
        players.push({ pokerStatus: 0, minScaleStatus: 0, bigScaleStatus: 0, id: i + 1 });
    }
    return players;
}