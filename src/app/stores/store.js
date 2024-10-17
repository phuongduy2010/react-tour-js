import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import todosReducer from '../reducers/todos'
// import usersReducer from '../reducers/usersReducer'

// Combining the slice reducers into the root reducer
const rootReducer = combineReducers({
    todos: todosReducer
})

const middlewareEnhancer = applyMiddleware(thunk)

const composeWithDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//Adding the Redux DevTools enhancer, and composing the enhancers together
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

const store = createStore(rootReducer, composedEnhancers)