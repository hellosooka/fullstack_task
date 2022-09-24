import axios from 'axios'
import React from 'react'
import { createBearerConfig } from './createBearerConfig'

export const getUserId = async (token: string) => {
	const config = createBearerConfig(token)
	const response = await axios.get('https://apiproxy.telphin.ru/api/ver1.0/user/', config)
	return response.data.client_id
}