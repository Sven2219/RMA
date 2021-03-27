import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import InspiringPerson from '../components/InspiringPerson';
import { Person } from '../reducers/MainReducer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import I18n from '../consts/translation';

interface Props {
    inspiringPersons: Person[];
    randomQuote: (index: number) => void;
    goToAddNewPerson: () => void;
}

const InspiringPersonsScreen = (props: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                    {I18n.t("inspiringPersons")}
                </Text>
                <Ionicons name="person-add" size={35} onPress={props.goToAddNewPerson} />
            </View>
            <FlatList
                data={props.inspiringPersons}
                maxToRenderPerBatch={3}
                windowSize={3}
                removeClippedSubviews={true}
                scrollEventThrottle={16}
                keyExtractor={(_, index) => `${index.toString()}`}
                renderItem={({ item, index }) => {
                    return (<InspiringPerson item={item} randomQuote={() => props.randomQuote(index)} />)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})


export default InspiringPersonsScreen;