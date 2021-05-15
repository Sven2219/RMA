import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import OneUniversity from '../components/OneUniversity';
import { University } from '../types/University';

interface Props {
    universities: University[];
}

const UniversityScreen = (props: Props) => {

    const MemoizedTable = React.useMemo(() => {

        return (
            <FlatList
                data={props.universities}
                maxToRenderPerBatch={3}
                windowSize={3}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                renderItem={({ item }) => {
                    return (<OneUniversity item={item} />)
                }}
            />
        )
    }, [props.universities])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Popis sveucilista
                </Text>
            </View>
            {MemoizedTable}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#d3d3d3'
    },
    headerText: {
        fontSize: 16,
        padding: 20,
        fontWeight: 'bold'
    }
})

export default UniversityScreen;