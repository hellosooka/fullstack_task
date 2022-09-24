import React from 'react'

export interface ExtensionCardProps {
	id: string,
	name: string,
	domain: string,
	type: string,
	status: string,
	label: string,
	client_id: string,
	extension_group_id: string ,
	extra_params: string,
	dial_rule_limit: string,
	caller_id_name: string,
	create_date: string,
	did_as_transfer_caller_id: string,
	dial_rule_id: string,
	ani_rfc3325: boolean,
	message_did: string,
	ani: string
}