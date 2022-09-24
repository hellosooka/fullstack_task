import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { createBearerConfig } from '../../helpers/createBearerConfig'
import { useAppSelector } from '../../hooks/useApp'
import ExtensionCard from '../ExtensionCard/ExtensionCard'
import { ExtensionCardProps } from '../ExtensionCard/ExtensionCard.props'
import style from './ExtensionData.module.css'



export default function ExtensionData() {

	const tokenSelector = useAppSelector(state => state.authToken.access_token)

	const [extensionData, setExtensionData] = useState<[ExtensionCardProps]>()
	const getExtensionData = async () => {
		const config = createBearerConfig(tokenSelector)
		const idUser = axios.get('https://apiproxy.telphin.ru/api/ver1.0/user/', config).then((response) => {
			const getExtensionData = axios.get(`https://apiproxy.telphin.ru/api/ver1.0/client/${response.data.client_id}/extension/`, config).then((data: AxiosResponse<[ExtensionCardProps]>) => {
				setExtensionData(data.data)
			})
		})
	}

	useEffect(() => {
		getExtensionData()
		
	}, [])


	return (
		<div className={style.extensionData} >
			{ extensionData ? extensionData.map((p) => <ExtensionCard key={p.id} {...p} />) : <div> Loading... </div> }
		</div>
	)
}
