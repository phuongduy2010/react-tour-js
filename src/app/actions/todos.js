// import axios from 'axios'
import { ADD_TODO, TOGGLE_TODO } from '../constants/todos'

export const addTodo = (id, text) => ({
    type: ADD_TODO,
    text,
    id
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

// export const fetchTodosStarted = () => ({
//     type: FETCH_TODOS_STARTED
// })

// export const fetchTodosSucceeded = todos => ({
//     type: FETCH_TODOS_SUCCEEDED,
//     todos
// })

// export const fetchTodosFailed = error => ({
//     type: FETCH_TODOS_FAILED,
//     error
// })

// export const fetchTodos = () => {
//     return async dispatch => {
//         dispatch(fetchTodosStarted())
//         try {
//             // Axios is common, but also `fetch`, or your own "API service" layer
//             const res = await axios.get('/todos')
//             dispatch(fetchTodosSucceeded(res.data))
//         } catch (err) {
//             dispatch(fetchTodosFailed(err))
//         }
//     }
// }
