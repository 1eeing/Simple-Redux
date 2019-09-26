const bindActionCreator = (actionCreator, dispatch) => (...args) => {
    return dispatch(actionCreator(...args))
}

const bindActionCreators = (actionCreators, dispatch) => {
    if (typeof actionCreators === 'function') {
        return bindActionCreator(actionCreators, dispatch);
    }
    let boundActionCreators = {};
    for(let key in actionCreators){
        const actionCreator = actionCreators[key];
        if(typeof actionCreator === 'function'){
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
        return boundActionCreators;
    }
}

export default bindActionCreators;
