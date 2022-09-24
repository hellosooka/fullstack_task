import axios from 'axios';
import React from 'react'



const createParams = (username: string, password: string) => {
	const params = new URLSearchParams();
	params.append('grant_type', "password");
	params.append('client_id', 'f8115578ec7246369ab37f73adb10c62');
	params.append('client_secret', '1e1c99cc6ba94893a7616e2ececaaf28');

	params.append('username', username);
	params.append('password', password);

	return params
	
}

export default createParams