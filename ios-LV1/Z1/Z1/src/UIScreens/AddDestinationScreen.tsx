import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { destinationFields } from '../UIViewController/AddDestinationContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    control: Control<Record<string, any>>
    addDestination: () => void;
    navigateBack: () => void;
}

const AddDestinationScreen = (props: Props) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={props.navigateBack} style={styles.backButtonPosition} containerStyle={styles.backButton}>
                    <Ionicons name="chevron-back" size={35} color="blue" />
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Unos nove destinacije
                </Text>
            </View>
            <Controller
                control={props.control}
                defaultValue=""
                name={destinationFields.name}
                render={({ onChange, value }) => {
                    return <View style={styles.mainInputContainer}>
                        <Text>
                            Naziv:
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput onChangeText={onChange} value={value} />
                        </View>
                    </View>
                }}
            />
            <Controller
                control={props.control}
                defaultValue=""
                name={destinationFields.description}
                render={({ onChange, value }) => {
                    return <View style={styles.mainInputContainer}>
                        <Text>
                            Opis:
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput onChangeText={onChange} value={value} />
                        </View>
                    </View>
                }}
            />
            <TouchableOpacity onPress={props.addDestination} style={styles.buttonPosition}>
                <Text style={styles.addButtonStyle}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    addButtonStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 5,
        width: "80%"
    },
    mainInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    buttonPosition: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 20,
        backgroundColor: '#d3d3d3'
    },
    backButton: {
        bottom: 6,
        zIndex: 2,
    },
    backButtonPosition: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        position: 'absolute',
        left: 0,
        top: 20
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    backButtonText: {
        fontSize: 17,
        color: 'blue',
    }
})

export default AddDestinationScreen;