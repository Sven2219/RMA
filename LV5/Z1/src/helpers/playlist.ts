export interface Playlist {
    sound: string;
    image: any;
}

export const playlist: Playlist[] = [
    {
        sound: 'zdravko_mamic_ajmo.mp3',
        image: require('../images/zdravko_mamic.jpg')
    },
    {
        sound: 'conor_mcgregor.mp3',
        image: require('../images/conor.jpg')
    },
    {
        sound: 'tommy_shelby.mp3',
        image: require('../images/cillian_murphy.jpg')
    }
]