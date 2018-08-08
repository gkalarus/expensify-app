import { createStore } from 'redux';

// Reducers

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};

const store = createStore(countReducer)

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 2
})

store.dispatch({
    type: 'INCREMENT'
})



console.log(store.getState());