const applyMiddleware = (...middlewares) => (createStore) => (...args) => {
    const store = createStore(...args);
    const middles = middlewares.map(middleware => middleware(store));
    const dispatch = middles.reduceRight((prev, cur) => prev(cur), store.dispatch);
    return {
        ...store,
        dispatch
    }
}

export default applyMiddleware;