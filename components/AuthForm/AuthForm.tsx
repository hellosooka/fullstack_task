import React from 'react'
import getToken  from '../../helpers/createTokenParams'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import { useInput } from '../../hooks/useInput'
import { setToken } from '../../store/authSlice/authSlice'
import style from './AuthForm.module.css'


const submitForm = (event: { preventDefault: () => void }) => {
	event.preventDefault()

}

export const AuthForm = () => {

	const username = useInput("")
	const password = useInput("")

  const dispatch = useAppDispatch()
	const status = useAppSelector(state => state.authToken.status)

	return (
		<>
		{status == "failed" ? <div className={style.failed} > Failed </div> : <div></div> }
			<form onSubmit={submitForm} className={style.form} action="">
					<input 
					placeholder='Login' 
					value={username.value} 
					onChange={username.onChange} 
					className={style.input} 
					type="text" />
					<input 
					placeholder='Password' 
					value={password.value} 
					onChange={password.onChange} 
					className={style.input} 
					type="password" />
					<button className={style.button} onClick={() => dispatch(setToken({
						username: username.value,
						password: password.value,
					}))}  type="submit" > Sign in </button>
				</form>
		</>
	)
}
