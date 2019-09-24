const reducers = (state, action) => {
    switch (action.type) {
        case 'init':
            return { ...state };
        default:
            return state;
    }
}

const createStore = (reducers) => {
    const getState = () => reducers;

    const dispatch = () => {

    }
}

export default createStore;