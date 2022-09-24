import React, { useState } from 'react'
import { ExtensionCardProps } from './ExtensionCard.props'
import style from './ExtensionCard.module.css'
import { useInput } from '../../hooks/useInput'
import { useAppSelector } from '../../hooks/useApp'
import { createBearerConfig } from '../../helpers/createBearerConfig'
import axios from 'axios'


const submitForm = (event: { preventDefault: () => void }) => {
	event.preventDefault()

}

export default function ExtensionCard(props: ExtensionCardProps) {

	const [updateStatus, setUpdateStatus] = useState(true)
	const [errorMessage, setMessageError] = useState('')

	const [isOpen, setIsOpen] = useState(false)
	const tokenSelector = useAppSelector(state => state.authToken.access_token)

	const changeCard = async () => {
		const config = createBearerConfig(tokenSelector)
	
		const bodyParameters = {
			client_id: props.client_id,
			// domain: domain.value,
			label: label.value,
			extra_params: extra_params.value,
			dial_rule_limit: dial_rule_limit.value,
			message_did: message_did.value,
			ani: ani.value,
			name: name.value,
			type: props.type,
		}

		
			const getData = axios.put(`https://apiproxy.telphin.ru/api/ver1.0/client/${props.client_id}/extension/${props.id}`, bodyParameters, config )
			.then((response) => {
				console.log(response.data)
				setUpdateStatus(true)
			})
			.catch((e) => {
				setUpdateStatus(false)
				setMessageError(e.message)
			})
			
		


	}


	//Inputs
	const name = useInput(props.name)
	const domain = useInput(props.domain)
	const label = useInput(props.label)
	const extra_params = useInput(props.extra_params)
	const dial_rule_limit = useInput(props.dial_rule_limit)
	const message_did = useInput(props.message_did)
	const ani = useInput(props.ani)

	return (
		<div className={style.container} >
			
				
			
			<div className={style.bottom} >
				
				<div className={ props.status == "active" ? style.stausActive : style.statusBlocked } > {props.status} </div>
				<div className={style.title} >
					<h1 className={style.name} >
						{props.name}
					</h1>
					<h4 className={style.domain} >
						{props.domain}
					</h4>
				</div>
				<button onClick={() => setIsOpen(!isOpen) }  className={style.about} > { isOpen == true ? <div> Close </div> : <div> ... </div> } </button>
			</div>
			{isOpen ? 
			<div className={style.info_container}>
				<hr />
				<form onSubmit={submitForm} className={style.info}>	
					<label className={style.label} htmlFor="name"> Name </label>
					<input className={style.input} id='name' type="text" onChange={name.onChange} value={name.value}  />

					<label className={style.label} htmlFor="domain"> Domain </label>
					<input className={style.input} id='domain' type="text" onChange={domain.onChange} value={domain.value} />

					<label className={style.label} htmlFor="label"> Label </label>
					<input className={style.input} id='label' type="text" onChange={label.onChange} value={label.value} />

					<label className={style.label} htmlFor="extra_params"> Extra_params </label>
					<input className={style.input} id='extra_params' type="text" onChange={extra_params.onChange} value={extra_params.value} />

					<label className={style.label} htmlFor="dial_rule_limit"> Dial_rule_limit </label>
					<input className={style.input} id='dial_rule_limit' type="text" onChange={dial_rule_limit.onChange} value={dial_rule_limit.value} />


					<label className={style.label} htmlFor="message_did"> Message_did </label>
					<input className={style.input} id='message_did' type="text" onChange={message_did.onChange} value={message_did.value} />

					<label className={style.label} htmlFor="ani"> Ani </label>
					<input className={style.input} id='ani' type="text" onChange={ani.onChange} value={ani.value} />

					
					<button type='submit' onClick={() => changeCard()} className={style.saveButton} > Save config </button>
					{ updateStatus ? <div> </div> : <div className={style.error} > Error! {errorMessage} </div> }
					<div className={style.date} > {props.create_date} </div>
					
				</form>
			</div>
			: <div></div> }
		</div>
	)
}


