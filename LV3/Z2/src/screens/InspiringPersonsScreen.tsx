import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import InspiringPerson from '../components/InspiringPerson';
import { Person } from '../reducers/MainReducer';
import { colors } from '../consts/colors';
import EditPersonModal from '../components/EditPersonModal';

interface Props {
    inspiringPersons: Person[];
    activeIndex: number;
    setActiveIndex: React.Dispatch<number>
    randomQuote: (index: number) => void;
    deletePerson: (index: number) => void;
}

const InspiringPersonsScreen = (props: Props) => {
    return (
        <View style={styles.mainContainer}>
            <EditPersonModal
                activeIndex={props.activeIndex}
                setActiveIndex={props.setActiveIndex}
            />
            {/*flatlist is equivalent of recycler view in kotlin. Window size determine how many additional items will render.*/}
            <FlatList
                data={props.inspiringPersons}
                maxToRenderPerBatch={3}
                windowSize={3}
                removeClippedSubviews={true}
                scrollEventThrottle={16}
                keyExtractor={(_, index) => `${index.toString()}`}
                renderItem={({ item, index }) => {
                    return (<InspiringPerson
                        item={item}
                        setActiveIndex={() => props.setActiveIndex(index)}
                        randomQuote={() => props.randomQuote(index)}
                        deletePerson={() => props.deletePerson(index)}
                    />)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
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