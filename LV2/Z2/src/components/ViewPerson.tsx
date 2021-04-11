import React from 'react';
import { View,Image,TouchableOpacity, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Person } from '../reducers/MainReducer';
import DeleteAction from './DeleteAction';
import ModifyAction from './ModifyAction';
import I18n from '../consts/translation'
import { commonStyles } from '../consts/commonStyle';

interface Props{
    item: Person;
    randomQuote:()=>void;
    deletePerson:()=>void;
    setActiveIndex:()=>void;
}

const ViewPerson = (props:Props) => {
    const life = React.useMemo(() => {
        return props.item.deathYear ? `${props.item.birthYear}-${props.item.deathYear}` : props.item.birthYear;
    }, [props.item])

    const renderLeftAction = React.useCallback(() => {
        return (
            <ModifyAction modifyAction={props.setActiveIndex} />
        )
    }, [])
    const renderRightActions = React.useCallback(() => {
        return (
            <DeleteAction deleteAction={props.deletePerson} />
        )
    }, [])

    return (
        <Swipeable renderLeftActions={renderLeftAction} renderRightActions={renderRightActions}>
            <View style={commonStyles.mainContainer}>
                <TouchableOpacity activeOpacity={0.6} onPress={props.randomQuote}>
                    <Image source={{ uri: props.item.image }} style={commonStyles.imageDimensions} />
                </TouchableOpacity>
                <View style={commonStyles.infoContainer}>
                    <Text style={commonStyles.textStyle}>{`${I18n.t("name")}: ${props.item.firstName} ${props.item.lastName}`}</Text>
                    <Text style={commonStyles.textStyle}>{`${I18n.t("life")}: ${life}`}</Text>
                    <Text style={commonStyles.textStyle}>{I18n.t("description")}{'\n'}{props.item.description}</Text>
                </View>
            </View>
        </Swipeable>
    )
}

export default ViewPerson;