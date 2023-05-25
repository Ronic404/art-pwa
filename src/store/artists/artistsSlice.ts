import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../api/axios'

export interface IArtistsState {
  isLoading: boolean
  data: {
    id: number
  }[]
}

const initialState: IArtistsState = {
  isLoading: false,
  data: [],
}

export const getArtists = createAsyncThunk(
  'artists/getArtists',
  async () => {
    const response = await api.get('artists?page=10');
    return response.data;
  }
);

export const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArtists.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArtists.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(getArtists.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default artistsSlice.reducer
