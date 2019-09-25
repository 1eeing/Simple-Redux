const combineReducers = (reducers) => (state, action) => {
    let finalState = {};
    let hasChanged = false;

    for (let key in reducers) {
        const nextState = state[key];
        const nextReducer = reducers[key](nextState, action);
        finalState[key] = nextReducer;
        hasChanged = hasChanged || nextReducer !== nextState;
    }

    return hasChanged ? finalState : state;
}

export default combineReducers;