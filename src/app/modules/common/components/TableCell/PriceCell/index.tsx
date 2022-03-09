import React from 'react';
import Chip from '@material-ui/core/Chip';

type Props = {
	price: number;
	stl:string;
	title?:string;
}
var formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
  });

const PriceCell: React.FC<Props> = ({ price, stl,title }: Props) => {
	return (

		<p className={stl}><strong>{title}: </strong> {formatter.format(price)}</p>

	);
};

export default PriceCell;
