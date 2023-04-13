import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("todo/getPosts", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const initialState = {
  todos: [],
  loading: false,
  posts: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },

    deleteToDo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo !== payload);
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.post = [...payload];
      state.loading = false;
    },
    [getPosts.rejected]: (state,{payload}) => {
      state.loading = false;
    }
  },
});

export const { addTodo, deleteToDo } = todoSlice.actions;

export default todoSlice.reducer;
