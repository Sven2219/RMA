import React from 'react';
import { FlatList } from 'react-native';
import User from '../../data/model/User';
import OneUser from './OneUser';

interface Props {
    users: User[];
}


const UsersList = (props: Props) => {
    return (
        <FlatList
            data={props.users}
            windowSize={4}
            maxToRenderPerBatch={4}
            scrollEventThrottle={16}
            keyExtractor={(el) => `${el.id}`}
            renderItem={({ item }) => <OneUser item={item} />}
        />
    )
}

export default UsersList;
