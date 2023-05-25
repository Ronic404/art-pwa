import { RootState } from '../store'

export const artistsDataSelector = (state: RootState) => state.artists.data
