import React from 'react';
import { useForm } from 'react-hook-form';
import { MainDispatch } from '../context/MainDispatch';
import { ActionTypes, Person } from '../reducers/MainReducer';
import AddInspiringPersonScreen from '../screens/AddInspiringPersonScreen';
import * as ImagePicker from 'react-native-image-picker';
import imagePickerProps from '../consts/imagePickerProperty';
import { MainState } from '../context/MainState';
import { CLOSED_MODAL } from './InspiringPersonsContainer';

export const personFileds = {
    firstName: "firstName",
    lastName: "lastName",
    birth: "birthYear",
    death: "deathYear",
    desciption: "description"
}

interface Props {
    activeIndex?: number;
    setActiveIndex?: React.Dispatch<number>
}

const AddInspiringPersonContainer = (props: Props) => {
    const { control, handleSubmit, errors, setValue } = useForm();
    const { dispatch } = React.useContext(MainDispatch);
    const { state } = React.useContext(MainState);
    const [newQuote, setNewQuote] = React.useState<string>("")
    const [quotes, setQuotes] = React.useState<string[]>([]);
    const [imageURI, setImageURI] = React.useState<string>("");

    React.useEffect(() => {
        if (props.activeIndex !== undefined) {
            Object.values(personFileds).forEach((el) => {
                //@ts-ignore
                setValue(el, state.inspiringPersons[props.activeIndex][el])
            })
            if (state.inspiringPersons[props.activeIndex].image) {
                //@ts-ignore
                setImageURI(state.inspiringPersons[props.activeIndex].image)
            }
            setQuotes(state.inspiringPersons[props.activeIndex].quote);
        }
    }, [])

    const handleButtonPress = React.useCallback((data: Person) => {
        let id: number = 0;
        if (state.inspiringPersons.length > 0) {
            id = props.activeIndex !== undefined ? props.activeIndex : state.inspiringPersons[state.inspiringPersons.length - 1].id + 1;
        }
        const person: Person = {
            id,
            firstName: data.firstName,
            lastName: data.lastName,
            birthYear: data.birthYear,
            deathYear: data.deathYear,
            quote: quotes,
            image: imageURI,
            description: data.description
        }
        if (props.activeIndex !== undefined && props.setActiveIndex) {
            const updatedPersons = [...state.inspiringPersons];
            updatedPersons[props.activeIndex] = person;
            dispatch({ type: ActionTypes.SET_INSPIRING_PERSONS, payload: updatedPersons })
            props.setActiveIndex(CLOSED_MODAL)
        } else {
            dispatch({ type: ActionTypes.ADD_INSPIRING_PERSON, payload: person });
        }
        //reset values
        Object.values(personFileds).forEach((el) => {
            setValue(el, "")
        })
        setQuotes([]);
        setImageURI("")
    }, [imageURI, quotes, props.activeIndex, dispatch])

    const addQuote = React.useCallback(() => {
        setQuotes((state) => [...state, newQuote]);
    }, [newQuote])

    const openImage = React.useCallback(() => {
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

    const deleteQuote = React.useCallback((index: number) => {
        const quoteCopy = [...quotes];
        quoteCopy.splice(index, 1);
        setQuotes(quoteCopy)
    }, [quotes])

    const dismissImage = React.useCallback(() => {
        setImageURI("");
    }, [])

    return (
        <AddInspiringPersonScreen
            control={control}
            errors={errors}
            quotes={quotes}
            newQuote={newQuote}
            imageURI={imageURI}
            isUpdating={props.activeIndex !== undefined}
            dismissImage={dismissImage}
            deleteQuote={deleteQuote}
            setNewQuote={setNewQuote}
            openImage={openImage}
            addQuote={addQuote}
            handleSubmit={handleSubmit(handleButtonPress)}
        />
    )
}


export default AddInspiringPersonContainer;