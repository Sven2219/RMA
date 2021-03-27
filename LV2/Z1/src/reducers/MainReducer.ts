
export interface Person {
    firstName: string;
    lastName: string;
    birthYear: number;
    deathYear: number;
    image?: string;
    quote: string[];
    description:string;
}

export enum ActionTypes {
    SET_INSPIRING_PERSONS = "SetInspiringPersons",
    ADD_INSPIRING_PERSON = "AddInspiringPersons",
}


export interface State {
    inspiringPersons: Person[]
}

type SetInspiringPersons = {
    readonly type: ActionTypes.SET_INSPIRING_PERSONS;
    readonly payload: Person[]
}

type AddInspiringPerson = {
    readonly type: ActionTypes.ADD_INSPIRING_PERSON;
    readonly payload: Person
}

export type Actions = SetInspiringPersons | AddInspiringPerson;

export const reducer = (state: State, actions: Actions): State => {
    switch (actions.type) {
        case ActionTypes.SET_INSPIRING_PERSONS:
            return { ...state, inspiringPersons: actions.payload };
        case ActionTypes.ADD_INSPIRING_PERSON:
            return { ...state, inspiringPersons: [...state.inspiringPersons, actions.payload] }
        default:
            return state;
    }
}