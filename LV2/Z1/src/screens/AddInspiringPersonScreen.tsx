import React from 'react';
import { Control, Controller, DeepMap, FieldError, FieldValues } from 'react-hook-form';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
//@ts-ignore
import Reiput from 'reinput';
import Quote from '../components/Quote';
import { colors } from '../consts/colors';
import I18n from '../consts/translation';
import { pattern, required } from '../helpers/rules';
import Feather from 'react-native-vector-icons/Feather';
import dimensions from '../consts/dimensions';
import { personFileds } from '../containers/AddInspiringPersonContainer';

interface Props {
    control: Control<Record<string, any>>
    errors: DeepMap<FieldValues, FieldError>
    quotes: string[];
    newQuote: string;
    imageURI: string;
    dismissImage: () => void;
    deleteQuote: (index: number) => void;
    setNewQuote: React.Dispatch<React.SetStateAction<string>>;
    addQuote: () => void;
    handleSubmit: () => void;
    openImage: () => void;
    goBack: () => void;
}

const AddInspiringPersonScreen = (props: Props) => {
    const lastNameRef = React.useRef<any>();
    const descriptionRef = React.useRef<any>();
    const birthYearRef = React.useRef<any>();
    const deathYearRef = React.useRef<any>();
    const quoteRef = React.useRef<any>();

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={[styles.positionCenter, styles.imagePosition]}>
                {props.imageURI ? <><Image source={{ uri: props.imageURI }} style={styles.imageDimensions} />
                    <View style={styles.dismissImageIcon}>
                        <Feather name="x" size={25} color={colors.fireBrick} onPress={props.dismissImage} />
                    </View>
                </>
                    : <TouchableOpacity onPress={props.openImage} style={[styles.imageContainer, styles.shadow, styles.positionCenter]} activeOpacity={0.6}>
                        <Text style={styles.chooseImageText}>{I18n.t("chooseImage")}</Text>
                    </TouchableOpacity>}
            </View>
            <View style={styles.backIconPosition}>
                <Ionicons name="arrow-back-outline" size={35} onPress={props.goBack} />
            </View>
            <Controller
                name={personFileds.firstName}
                control={props.control}
                defaultValue=""
                rules={{
                    required: required(I18n.t("firstNameRequired")),
                    pattern: pattern(/[a-zA-Z]/, I18n.t("firstNameIsntValid"))
                }}
                render={({ onChange, value }) =>
                    <View>
                        <Reiput
                            activeColor={colors.darkCyan}
                            label={I18n.t("firstName")}
                            blurOnSubmit={false}
                            onChangeText={onChange}
                            value={value}
                            returnKeyType="next"
                            onSubmitEditing={() => { lastNameRef.current.focus(); }}
                        />
                    </View>
                }
            />
            {
                props.errors.firstName && (
                    <Text style={styles.errorText}>{props.errors.firstName.message}</Text>
                )
            }
            <Controller
                name={personFileds.lastName}
                control={props.control}
                defaultValue=""

                rules={{
                    required: required(I18n.t("lastNameRequired")),
                    pattern: pattern(/[a-zA-Z]/, I18n.t("lastNameIsntValid"))
                }}
                render={({ onChange, value }) =>
                    <View>
                        <Reiput
                            ref={(input: any) => { lastNameRef.current = input }}
                            onSubmitEditing={() => { descriptionRef.current.focus() }}
                            activeColor={colors.darkCyan}
                            label={I18n.t("lastName")}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            onChangeText={onChange}
                            value={value}
                        />
                    </View>
                }
            />
            {
                props.errors.lastName && (
                    <Text style={styles.errorText}>{props.errors.lastName.message}</Text>
                )
            }
            <Controller
                name={personFileds.desciption}
                control={props.control}
                defaultValue=""
                render={({ onChange, value }) =>
                    <View>
                        <Reiput
                            ref={(input: any) => { descriptionRef.current = input }}
                            onSubmitEditing={() => { birthYearRef.current.focus() }}
                            activeColor={colors.darkCyan}
                            label={I18n.t("description")}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            onChangeText={onChange}
                            value={value}
                        />
                    </View>
                }
            />
            {
                props.errors.description && (
                    <Text style={styles.errorText}>{props.errors.description.message}</Text>
                )
            }
            <View style={styles.yearMainContainer}>
                <Controller
                    name={personFileds.birth}
                    control={props.control}
                    defaultValue=""
                    rules={{
                        pattern: pattern(/\d+/, I18n.t("notValidFormat"))
                    }}
                    render={({ onChange, value }) =>
                        <View>
                            <Text style={styles.yearText}>{I18n.t("birth")}</Text>
                            <View style={styles.yearContainer}>
                                <TextInput
                                    ref={(input) => { birthYearRef.current = input }}
                                    onSubmitEditing={() => { deathYearRef.current.focus() }}
                                    blurOnSubmit={false}
                                    onChangeText={onChange}
                                    value={value}
                                    returnKeyType="next"
                                    style={{color:colors.dark}}
                                    placeholderTextColor={colors.dark}
                                    placeholder={"YYYY"}
                                />
                            </View>
                        </View>
                    }
                />
                <Controller
                    name={personFileds.death}
                    control={props.control}
                    defaultValue=""
                    rules={{
                        pattern: pattern(/\d+/, I18n.t("notValidFormat"))
                    }}
                    render={({ onChange, value }) =>
                        <View>
                            <Text style={styles.yearText}>{I18n.t("death")}</Text>
                            <View style={styles.yearContainer}>
                                <TextInput
                                    ref={(input) => { deathYearRef.current = input }}
                                    onSubmitEditing={() => { quoteRef.current.focus() }}
                                    blurOnSubmit={false}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholderTextColor={colors.dark}
                                    returnKeyType="next"
                                    style={{color:colors.dark}}
                                    placeholder={"YYYY"}
                                />
                            </View>
                        </View>
                    }
                />
            </View>
            <View style={styles.quoteContainer}>
                <Reiput
                    activeColor={colors.darkCyan}
                    ref={(input: any) => { quoteRef.current = input }}
                    label={I18n.t("quote")}
                    onChangeText={(text: string) => props.setNewQuote(text)}
                    blurOnSubmit={false}
                    style={styles.quoteTextInput}
                />
                <View style={styles.iconPosition}>
                    <AntDesign size={25} name="plus" onPress={props.addQuote} />
                </View>

            </View>
            <FlatList
                data={props.quotes}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <Quote
                    item={item}
                    index={index}
                    deleteQuote={() => props.deleteQuote(index)}
                />}
            />
            <View style={[styles.positionCenter, styles.buttonPadding]}>
                <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.6} onPress={props.handleSubmit}>
                    <Text style={styles.buttonTitle}>
                        {I18n.t("addPerson")}
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 30
    },

    positionCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    chooseImageText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backIconPosition: {
        position: 'absolute',
        left: 0,
        top: 20
    },
    imagePosition: {
        paddingVertical: 20,
    },
    imageContainer: {
        borderWidth: 1,
        height: dimensions.imageHeight,
        width: dimensions.imageWidth,
        borderRadius: 8,
        backgroundColor: colors.white
    },
    buttonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: colors.darkCyan
    },
    buttonTitle: {
        fontSize: 17,
        color: colors.white,
        fontWeight: "bold"
    },
    yearMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20
    },
    yearContainer: {
        borderWidth: 0.8,
        minWidth: 100,
        borderRadius: 10,
        maxWidth: 140,
        alignItems: 'center',
    },
    imageDimensions: {
        width: dimensions.imageWidth,
        height: dimensions.imageHeight,
        resizeMode: 'cover'
    },
    errorText: {
        fontSize: 16,
        color: colors.fireBrick,
        bottom: 30
    },
    yearText: {
        color: colors.dark,
        fontSize: 16,
        marginBottom: 4
    },
    iconPosition: {
        top: 15
    },
    quoteContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    quoteTextInput: {
        width: "90%"
    },
    buttonPadding: {
        paddingBottom: 10
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    dismissImageIcon: {
        position: 'absolute',
        bottom: -10
    }
})

export default AddInspiringPersonScreen;