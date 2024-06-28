import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    albums: []
}

export const getInitialState = createAsyncThunk('todo/getInitialState', (arg, thunkAPI) => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(res => {
        console.log('res is , ',res)
        return res.data;
      })
      .then(parsedResponse => {
        console.log('aprtsed ',parsedResponse)
        thunkAPI.dispatch(actions.setInitialState(parsedResponse))
      })
})

const albumSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        setInitialState: (state, action) => {
            state.todos= [
                ...action.payload
            ]
        }
    }
});

export const albumReducer=albumSlice.reducer;
export const actions = albumSlice.actions;
export const albumSelector = (state)=>state.albumReducer.todos;