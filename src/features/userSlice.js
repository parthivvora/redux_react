import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: [],
    userData: [],
    isError: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
    getUser: (state, action) => {
      return state.data;
    },
    editUser: (state, action) => {
      const user = state.find((i, index) => index == action.payload.id);
      if (user) {
        user.name = action.payload.name;
        user.age = action.payload.age;
      }
      return state;
    },
    deleteUser: (state, action) => {
      //   const user = state.filter((i, index) => index != action.payload);
      //   return user;
      state.splice(action.payload, 1);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isError = action.error.message;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData.push(...action.payload);
    });
  },
});

export const { addUser, getUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
