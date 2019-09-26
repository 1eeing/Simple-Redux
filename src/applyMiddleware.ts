const applyMiddleware = (...middlewares) => createStore => (...args) => {
    const store = createStore(...args);
    const chains = middlewares.map(middleware => middleware(store));
    const dispatch = chains.reduceRight((prev, cur) => cur(prev), store.dispatch);
    return {
        ...store,
        dispatch
    }
}

export default applyMiddleware;