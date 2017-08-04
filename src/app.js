import expect from 'expect'
import { createStore } from 'redux'

import React from 'react'
import ReactDOM from 'react-dom'


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

// Component. value は props
const Counter = ({value, onIncrement, onDecrement}) => (
    <div>
	<h1>{value}</h1>
	<button onClick={onIncrement}>+</button>
	<button onClick={onDecrement}>-</button>
    </div>
)

// Store は Reducer を引数に取る
const store = createStore(counter)

// 描画する奴
const render = () => {
    ReactDOM.render(
	<Counter
	    value={store.getState()}
	    onIncrement={() => store.dispatch({type: 'INCREMENT'}) }
	    onDecrement={() => store.dispatch({type: 'DECREMENT'}) }
	/>,
	document.getElementById('root'),
    )
}

// subscribe に登録した関数は dispatch のたびに呼ばれる
// renderってそんなに何回も呼ぶものなの？
store.subscribe(render)

// 最初ね
render()

