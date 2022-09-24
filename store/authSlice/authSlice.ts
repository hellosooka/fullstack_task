import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { parseUrl } from 'next/dist/shared/lib/router/utils/parse-url'
import { useRouter } from 'next/router'
import React from 'react'
import createParams from '../../helpers/createTokenParams'





interface fetchProps {
	username: string,
	password: string,
}

export const setToken = createAsyncThunk(
	'token/setToken',
	async ({username, password}: fetchProps) => {
		const params = createParams(username, password)
		const response = await axios.post('https://apiproxy.telphin.ru/oauth/token', params)
		const data = response.data
		return data
	}
)




interface tokenState {
  access_token: string,
	refresh_token: string,
	expires_in: number,
	status: "empty" | "loading" | 'succeeded' | 'failed'
}


const initialState: tokenState = {
  access_token: '',
	refresh_token: '',
	expires_in: 0,
	status: "empty"
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
		changeStatus: (state, action) => {
			state.status = action.payload.sta
		}
	},
	extraReducers(builder) {
		builder
		.addCase(setToken.fulfilled, (state, action) => {
			state.status = "succeeded"
			state.access_token = action.payload.access_token
			state.expires_in = action.payload.expires_in
			state.refresh_token = action.payload.refresh_token
		})
		.addCase(setToken.rejected, (state, action) => {
			state.status = "failed"
		})

	}
})
export const { changeStatus } = tokenSlice.actions


export default tokenSlice.reducer