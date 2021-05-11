import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import OneDestination from '../components/OneDestination';
import Destination from '../types/Destination';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    destinations: Destination[];
    goToAddNewDestination: () => void;
}

const DestinationsScreen = (props: Props) => {

    const MemoizedListOfDestinations = React.useMemo(() => {
        return (
            <FlatList
                data={props.destinations}
                keyExtractor={(item, index) => index.toString() + `${item.id}`}
                renderItem={({ item }) => {
                    return <OneDestination item={item} />
                }}
            />
        )
    }, [props.destinations])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Moje destinacije
                </Text>
            </View>
            <TouchableOpacity containerStyle={styles.addButtonContainer}>
                <Ionicons name="add" size={35} onPress={props.goToAddNewDestination} color={'blue'} />
            </TouchableOpacity>
            {MemoizedListOfDestinations}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 1,
        backgroundColor: '#d3d3d3'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    addButtonContainer: {
        position: 'absolute',
        right: 0,
        top: 15
    }
})


export default DestinationsScreen;