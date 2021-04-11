import { StyleSheet } from 'react-native';
import { colors } from './colors';
import dimensions from './dimensions';



export const commonStyles = StyleSheet.create({
    mainContainer: {
        minWidth: dimensions.itemWidth,
        height: dimensions.itemHeight,
        borderWidth: 0.5,
        borderColor: colors.darkCyan,
        flexDirection: 'row',
        backgroundColor: colors.white
    },
    infoContainer: {
        marginLeft: 20,
        overflow: 'hidden',
        maxWidth: dimensions.width - 170
    },
    imageDimensions: {
        height: dimensions.itemHeight,
        width: 130,
    },
    textStyle: {
        fontSize: 16,
        marginBottom: 10,
        marginRight: 10
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})