import Destination from "../Types/Destination";


export enum ActionTypes {
    SET_DESTINATION = "SetDestination",
    ADD_DESTINATION = "AddDestination",
}


export interface State {
    destinations: Destination[]
}

type SetDestination = {
    readonly type: ActionTypes.SET_DESTINATION;
    readonly payload: Destination[]
}

type AddDestination = {
    readonly type: ActionTypes.ADD_DESTINATION;
    readonly payload: Destination
}

export type Actions = SetDestination | AddDestination;

export const reducer = (state: State, actions: Actions): State => {
    switch (actions.type) {
        case ActionTypes.SET_DESTINATION:
            return { ...state, destinations: actions.payload };
        case ActionTypes.ADD_DESTINATION:
            return { ...state, destinations: [...state.destinations, actions.payload] }
        default:
            return state;
    }
}