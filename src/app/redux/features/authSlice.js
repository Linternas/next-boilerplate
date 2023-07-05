import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  token: '',
  tokenType: '',
  kakaoAccessToken: ''
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    HYDRATE: () => {
      return { ...state, ...action.payload };
    },
    reset: () => initialState,
    setAuthData: (state, action) => {
      console.log(state);
      console.log(action);
      state.value = {
        ...state,
        ...action.payload,
        isLogin: true
      };
    },
    logout: (state, action) => {
      state = {
        ...state,
        isLogin: false,
        token: '',
        tokenType: '',
        kakaoAccessToken: ''
      };
    }
  }
});

export const { setAuthData, logout } = auth.actions;
export default auth.reducer;
