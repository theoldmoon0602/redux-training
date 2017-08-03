import expect from 'expect'
import { createStore } from 'redux'


// Reducer: stateとactionを受け取って、新しいstateを返す
const counter = (state = 0, action) => {
    switch (action.type) {
    case 'INCREMENT':
	    return state+1
    case 'DECREMENT':
	    return state-1
    default:
	    return state
    }
}

// Store は Reducer を引数に取る
const store = createStore(counter)

// subscribe に登録した関数は dispatch のたびに呼ばれる
store.subscribe(()=> {
    document.body.innerText = store.getState()
})

document.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})


