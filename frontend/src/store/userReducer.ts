import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    name: string;
}

const initialState: UserState = {
    name: "",
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
});

export default userSlice.reducer;
// export const { increment, decrement } = counterSlice.actions;
