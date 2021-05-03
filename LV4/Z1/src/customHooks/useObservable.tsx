import React from 'react';
export const useObservable = observable => {
    const [state, setState] = React.useState();

    React.useEffect(() => {
        const sub = observable.subscribe(setState);
        return () => sub.unsubscribe();
    }, [observable]);

    return state;
};