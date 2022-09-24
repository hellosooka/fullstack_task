import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ExtensionData from '../../components/ExtensionData/ExtensionData'
import { createBearerConfig } from '../../helpers/createBearerConfig'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import { changeStatus } from '../../store/authSlice/authSlice'
import style from './ExtensionNumbers.module.css'




export default function ExtensionNumbers() {

	const tokenSelector = useAppSelector(state => state.authToken.access_token)

	
	const router = useRouter()

	const statusSelector = useAppSelector(state => state.authToken.status)
	const dispatch = useAppDispatch()

	const goToAuth = () => {
		dispatch(changeStatus('empty'))
		router.push('/auth')
	}
	

	return (
		<>
			<button onClick={() =>  goToAuth() } className={style.logOut} > Log out </button>
			<div className={style.extensionNumbers} >
				<h1 className={style.title} > <p className={style.search} > Your </p>   extension numbers </h1>
				<ExtensionData />
			</div>
		</>
	)
}


