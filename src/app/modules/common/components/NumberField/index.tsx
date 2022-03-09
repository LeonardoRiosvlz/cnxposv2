import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import CustomNumberFormat from './NumberFormat';

type Props = {
	symbol?: string
} & Omit<TextFieldProps, 'select'>

const NumberField: React.FC<Props> = ({ ...props }: Props) => {

	return (
		<TextField {...props as TextFieldProps}

				   InputProps={{
					   inputComponent: CustomNumberFormat as any
				   }}
		/>


	);
};

export default NumberField;
