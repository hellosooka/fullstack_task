import React from 'react'
import { AuthForm } from '../../components/AuthForm/AuthForm'
import style from './auth.module.css'



function Auth() {


	return (
		<div className={style.container} >
				<h1 className={style.title} > Authorization </h1>
				<AuthForm />
		</div>
	)
}

export default Auth