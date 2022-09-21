import React, { useState } from 'react'

export const useInput = (initialValue: string) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
			setValue(event.target.value);
	};

	return {
			value,
			onChange: handleChange
	};
};