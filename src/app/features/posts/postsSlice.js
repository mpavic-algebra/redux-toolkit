import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  postsList: [],
  isLoading: false,
  errorMessage: ""
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsFetch: state => {
        state.isLoading = true;
    },
    getPostsSuccess: (state, action) => {
        state.postsList = action.payload;
        state.isLoading = false;
    },
    getPostsFailure: state => {
        state.isLoading = false;
        state.errorMessage = "Getting Posts failed"
    }
  },
})

// Action creators are generated for each case reducer function
export const { getPostsFetch, getPostsSuccess, getPostsFailure } = postsSlice.actions

export default postsSlice.reducer