import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';



const Spinner = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.indicatorContainer}>
                <ActivityIndicator size={'large'} color={"#000"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },

    indicatorContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default Spinner;