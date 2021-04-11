import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import dimensions from '../consts/dimensions';
import I18n from '../consts/translation';
import { Person } from '../reducers/MainReducer';

interface Props {
    item: Person;
    randomQuote: () => void;
}

const InspiringPerson = (props: Props) => {
    const life = useMemo(() => {
        return props.item.deathYear ? `${props.item.birthYear}-${props.item.deathYear}` : props.item.birthYear;
    }, [props.item])
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity activeOpacity={0.6} onPress={props.randomQuote}>
                <Image source={{ uri: props.item.image }} style={styles.imageDimensions} />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <Text style={styles.textStyle}>{`${I18n.t("name")}: ${props.item.firstName} ${props.item.lastName}`}</Text>
                <Text style={styles.textStyle}>{`${I18n.t("life")}: ${life}`}</Text>
                <Text style={styles.textStyle}>{I18n.t("description")}{'\n'}{props.item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        minWidth: dimensions.itemWidth,
        height: dimensions.itemHeight,
        borderWidth: 1,
        marginTop: 40,
        borderRadius: dimensions.itemHeight / 4,
        flexDirection: 'row'
    },
    infoContainer: {
        marginLeft: 5,
        marginTop:5,
        overflow: 'hidden',
        maxWidth: dimensions.width - 170
    },
    imageDimensions: {
        height: dimensions.itemHeight,
        width: 130,
        borderRadius: dimensions.itemHeight / 4
    },
    textStyle: {
        fontSize: 16,
        marginBottom: 10,
        marginRight: 10
    }
})

export default InspiringPerson;