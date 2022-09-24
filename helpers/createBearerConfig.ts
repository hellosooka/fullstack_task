import React from 'react'

export const createBearerConfig = (token: string) => {
	const config = {
    headers: { Authorization: `Bearer ${token}` }
	}

	return config
}