const combineReducers = (reducers) => (state, action) => {
    let finalState = {};
    let hasChanged = false;

    for (let key in reducers) {
        const prevState = state[key];
        const nextState = reducers[key](prevState, action);
        finalState[key] = nextState;
        hasChanged = hasChanged || prevState !== nextState;
    }

    return hasChanged ? finalState : state;
}

export default combineReducers;