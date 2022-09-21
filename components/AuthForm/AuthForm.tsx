import React from 'react'
import { useInput } from '../../hooks/useInput'
import style from './AuthForm.module.css'


const submitForm = (event: { preventDefault: () => void }) => {
	event.preventDefault()

}

export const AuthForm = () => {

	const login = useInput("")
	const password = useInput("")

	return (
		<>
			<form onSubmit={submitForm} className={style.form} action="">
					<input 
					placeholder='Login' 
					value={login.value} 
					onChange={login.onChange} 
					className={style.input} 
					type="text" />
					<input 
					placeholder='Password' 
					value={password.value} 
					onChange={password.onChange} 
					className={style.input} 
					type="password" />
					<button className={style.button} type="submit" > Sign in </button>
				</form>
		</>
	)
}
