import React from 'react';
import Chip from '@material-ui/core/Chip';

type Props = {
	price: number;
}
var formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
  });

const PriceCellSimple: React.FC<Props> = ({ price }: Props) => {
	return (

		<p >{formatter.format(price)}</p>

	);
};

export default PriceCellSimple;
