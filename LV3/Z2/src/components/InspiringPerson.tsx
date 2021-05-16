import React from 'react';
import { Person } from '../reducers/MainReducer';
import ViewPerson from './ViewPerson';

interface Props {
    item: Person;
    setActiveIndex: () => void;
    randomQuote: () => void;
    deletePerson: () => void;
}


const InspiringPerson = (props: Props) => {
    return (<ViewPerson
        item={props.item}
        randomQuote={props.randomQuote}
        deletePerson={props.deletePerson}
        setActiveIndex={props.setActiveIndex}
    />)
}


export default React.memo(InspiringPerson, (prev, curr) => {
    return (prev.item === curr.item);
});