import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userList: []
    },
    reducers: {
        setUserList: (state, action) => {
            state.userList = action.payload
        }
    }
})

export const { setUserList } = userSlice.actions

export default userSlice.reducer

export function fetchUser() {
    return async (dispatch) => {
        let response = await Axios.get("http://localhost:2000/users")
        console.log(response)
        dispatch(setUserList(response.data))
    }
}

export function signUpUser(data) {
    return async (dispatch) => {
        let response = await Axios.post("http://localhost:2000/users", data)
        dispatch(fetchUser())
    }
}
