import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import  tokenReducer  from './authSlice/authSlice'


const store = configureStore({
  reducer: {
		authToken: tokenReducer
	}
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch