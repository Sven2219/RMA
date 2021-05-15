import React from 'react';
import { Playlist } from '../helpers/playlist';
import MainScreen from '../screens/MainScreen';
var Sound = require('react-native-sound');
Sound.setCategory('Playback');




const MainContainer = () => {

    const playSound = React.useCallback((item: Playlist) => {
        const sound = new Sound(item.sound, Sound.MAIN_BUNDLE, (error) => {
            if (!error) {
                sound.play();
            }
        });
    }, [])

    return (
        <MainScreen playSound={playSound} />
    )
}

export default MainContainer;