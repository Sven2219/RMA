import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import User from '../../data/model/User';
import UsersList from '../adapter/UsersList';

interface Props {
    users: User[]
}

const UserView = (props: Props) => {

    const MemoizedUserList = React.useMemo(() => {
        return <UsersList users={props.users} />
    }, [props.users])

    return (
        <View style={styles.mainContainer}>
            {MemoizedUserList}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    }
})

export default UserView;