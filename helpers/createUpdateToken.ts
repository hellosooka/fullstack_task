import React from 'react'

const createUpdateParams = (refresh_token: string, redirect_uri: string) => {
	const params = new URLSearchParams();
	params.append('grant_type', "refresh_token");
	params.append('refresh_token', refresh_token);
	params.append('redirect_uri', redirect_uri);
	params.append('client_id', 'f8115578ec7246369ab37f73adb10c62');
	params.append('client_secret', '1e1c99cc6ba94893a7616e2ececaaf28');
	

	return params
	
}