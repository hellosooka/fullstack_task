import axios from 'axios'
import React from 'react'


export const getUserExtensions = async (id: string) => {
	try {
		const response = await axios.get(`https://apiproxy.telphin.ru/api/ver1.0/client/${id}/extension/`)
		return response.data
	} catch(e) {
		console.log(e)
	}
}