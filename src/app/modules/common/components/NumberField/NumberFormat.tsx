import React from 'react';
import { default as NumberFormat } from 'react-number-format';


type CustomNumberFormatProps = {
	inputRef: (instance: NumberFormat | null) => void;
	onChange: (event: { target: { name: string; value: string } }) => void;
	name: string;
	symbol?: string;
}

const CustomNumberFormat = ({ inputRef, onChange, name, ...other }: CustomNumberFormatProps)=> {

	return (
		<NumberFormat
			{...other}
			getInputRef={inputRef}
			onValueChange={(values) => {
				onChange({
					target: {
						name,
						value: values.value,
					},
				});
			}}
			thousandSeparator
			isNumericString
			
		/>
	);
}

export default CustomNumberFormat

