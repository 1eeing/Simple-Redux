const createStore = (reducers) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = actions => {
        state = reducers(state, actions);
        listeners.forEach(fn => fn());
        return actions
    };

    const subScribe = (fn) => {
        listeners.push(fn);
        const unSubScribe = () => {
            listeners.filter(ln => ln !== fn);
        }
        return unSubScribe;
    }

    dispatch({ type: 'init' });

    return {
        getState,
        dispatch,
        subScribe,
    }
}

export default createStore;