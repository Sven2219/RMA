import React from 'react';
import { Modal, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import AddInspiringPersonContainer from '../containers/AddInspiringPersonContainer';
import { CLOSED_MODAL } from '../containers/InspiringPersonsContainer';


interface Props {
    activeIndex: number;
    setActiveIndex: React.Dispatch<number>
}


const EditPersonModal = (props: Props) => {

    const closeModal = React.useCallback(() => {
        props.setActiveIndex(CLOSED_MODAL);
    }, [])

    return (
        <Modal visible={props.activeIndex !== CLOSED_MODAL} >
            <View >
                <Feather name="x" size={35} onPress={closeModal} />
            </View>
            <AddInspiringPersonContainer
                activeIndex={props.activeIndex}
                setActiveIndex={props.setActiveIndex}
            />
        </Modal>
    )
}


export default EditPersonModal;