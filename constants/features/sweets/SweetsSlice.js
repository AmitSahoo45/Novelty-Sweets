import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    sweets: [],
    status: 'idle',
    error: null
}

export const fetchSweets = createAsyncThunk('sweets/fetchSweets', async () => {
    const { data } = await axios.get(`http://localhost:1337/api/sweets?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 927507f30f322bad130dff6e252af9c0991e2cf29ccd6428304da89b2e86c711122bf42933082edb0c1841b739491a01610c1a2ce35d3b3a2e4d8be2ec009acce5190c6f181a4a6489058f592a5f315cbd2726ade4b58a1902cd149f3f3b602a3cf015fd4455e7bc568f965496cc45974297c3be990beafba8ac225160687908'
        }
    })
    return data
})

export const sweetsSlice = createSlice({
    name: 'sweets',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchSweets.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSweets.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.sweets = action.payload
            })
            .addCase(fetchSweets.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectAllSweets = (state) => state.sweets.sweets.data

export default sweetsSlice.reducer;