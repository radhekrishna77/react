import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"hello world"}],
    edit:false,
    id:1,
    text:"jai shree ram"
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
           state.todos =  state.todos.filter((prev) => (prev.id !== action.payload))
        },
        updateTodo: (state,action) => {
            const todo = {
                id:action.payload.id,
                text:action.payload.text
            }
            // console.log(action.payload.id+" jai go "+action.payload.text)
            state.todos = state.todos.map((prev) => (prev.id === action.payload.id ? todo : prev))
        },
        updateEdit: (state) => {
            state.edit = !state.edit
        },
        updateDetail: (state,action) => {
            state.id = action.payload.id,
            state.text = action.payload.text
        }
    }
})

export const {addTodo,removeTodo,updateTodo,updateEdit,updateDetail} = todoSlice.actions

export default todoSlice.reducer