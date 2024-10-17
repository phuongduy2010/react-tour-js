import { configureStore } from '@reduxjs/toolkit'

import todosReducer from '../features/todos/todosSlice'


// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
    // Automatically calls `combineReducers`
    reducer: {
        todos: todosReducer
    }
})


// import { configureStore } from '@reduxjs/toolkit'

// // Import the API object
// import { api } from '../features/api/apiSlice'
// // Import any other slice reducers as usual here
// import usersReducer from '../features/users/usersSlice'

// export const store = configureStore({
//     reducer: {
//         // Add the generated RTK Query "API slice" caching reducer
//         [api.reducerPath]: api.reducer,
//         // Add any other reducers
//         users: usersReducer
//     },
//     // Add the RTK Query API middleware
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware().concat(api.middleware)
// })