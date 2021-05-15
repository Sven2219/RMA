import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SoundItem from '../components/SoundItem';
import { playlist, Playlist } from '../helpers/playlist';

interface Props {
    playSound: (item: Playlist) => void;
}

const MainScreen = (props: Props) => {

    const MemoizedList = React.useMemo(() => {
        return (
            <FlatList
                data={playlist}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <SoundItem item={item} playSound={props.playSound} />}
            />
        )
    }, [props.playSound])


    return (<View style={styles.mainContainer}>
        {MemoizedList}
    </View>)
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default MainScreen;