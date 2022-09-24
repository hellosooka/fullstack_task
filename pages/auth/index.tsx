import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { AuthForm } from '../../components/AuthForm/AuthForm'
import { useAppSelector } from '../../hooks/useApp'
import style from './auth.module.css'



function Auth() {

	const router = useRouter()

  const statusSelector = useAppSelector(state => state.authToken.status)

  useEffect(() => {
		if(statusSelector == 'succeeded') {
			router.push('/ExtensionNumbers')
		}
  }, [statusSelector])


	return (
		<div className={style.container} >
				<h1 className={style.title} > Authorization </h1>
				<AuthForm />
		</div>
	)
}

export default Auth