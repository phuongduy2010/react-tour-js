
import { useGetTodosQuery } from '../api/apiSlice'

export function TodoList() {
    const { data: todos, isFetching, isSuccess } = useGetTodosQuery()

    // omit rendering logic here
}