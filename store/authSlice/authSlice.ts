import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    access_token: '',
		refresh_token: ''
  },
  reducers: {
		setToken: (state, action) => {

		},
    getToken: (state, action) => {
			
		},
		refreshToken: state => {

		}
  }
})

export const { getToken, refreshToken } = tokenSlice.actions

export default tokenSlice.reducer