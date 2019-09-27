const createStore = (reducers) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const getObserverStore = () => observerStore;

    const dispatch = actions => {
        state = reducers(state, actions);
        triggerSubscribe();
        return actions
    };

    const subScribe = (fn) => {
        listeners.push(fn);
        const unSubScribe = () => {
            listeners.filter(ln => ln !== fn);
        }
        return unSubScribe;
    }

    const triggerSubscribe = () => {
        listeners.forEach(fn => fn());
    }

    const createObserver = (obj) => {
        return new Proxy(obj, {
            get(target, key) {
                return target[key];
            },
            set(target, key, value) {
                target[key] = value;
                triggerSubscribe();
                return false;
            }
        });
    }
    
    const emptyObj = Object.create(null);
    const observerStore = createObserver(emptyObj);

    dispatch({ type: 'init' });

    return {
        getState,
        dispatch,
        subScribe,
        getObserverStore,
    }
}

export default createStore;