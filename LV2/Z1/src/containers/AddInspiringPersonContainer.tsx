import React, { useCallback, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MainDispatch } from '../context/MainDispatch';
import { ActionTypes, Person } from '../reducers/MainReducer';
import AddInspiringPersonScreen from '../screens/AddInspiringPersonScreen';
import * as ImagePicker from 'react-native-image-picker';
import imagePickerProps from '../consts/imagePickerProperty';
import { useNavigation } from '@react-navigation/core';

export const personFileds = {
    firstName: "firstName",
    lastName: "lastName",
    birth: "birthYear",
    death: "deathYear",
    desciption: "description"
}


const AddInspiringPersonContainer = () => {
    const { control, handleSubmit, errors } = useForm();
    const { dispatch } = useContext(MainDispatch);
    const [newQuote, setNewQuote] = useState<string>("")
    const [quotes, setQuotes] = useState<string[]>([]);
    const navigation = useNavigation();
    const [imageURI, setImageURI] = useState<string>("");

    const addPerson = useCallback((data: Person) => {
        const person: Person = {
            firstName: data.firstName,
            lastName: data.lastName,
            birthYear: data.birthYear,
            deathYear: data.deathYear,
            quote: quotes,
            image: imageURI,
            description:data.description
        }
        dispatch({ type: ActionTypes.ADD_INSPIRING_PERSON, payload: person });
        goBack();
    }, [imageURI, quotes])

    const addQuote = useCallback(() => {
        setQuotes((state) => [...state, newQuote]);
    }, [newQuote])

    const openImage = useCallback(() => {
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: imagePickerProps.includeBase64,
            },
            (response) => {
                if (response.uri)
                    setImageURI(response.uri)
            },
        )
    }, [])

    const goBack = useCallback(() => {
        navigation.goBack();
    }, [])

    const deleteQuote = useCallback((index: number) => {
        const quoteCopy = [...quotes];
        quoteCopy.splice(index, 1);
        setQuotes(quoteCopy)
    }, [quotes])

    const dismissImage = useCallback(() => {
        setImageURI("");
    }, [])

    return (
        <AddInspiringPersonScreen
            control={control}
            errors={errors}
            quotes={quotes}
            newQuote={newQuote}
            imageURI={imageURI}
            dismissImage={dismissImage}
            deleteQuote={deleteQuote}
            goBack={goBack}
            setNewQuote={setNewQuote}
            openImage={openImage}
            addQuote={addQuote}
            handleSubmit={handleSubmit(addPerson)}
        />
    )
}


export default AddInspiringPersonContainer;