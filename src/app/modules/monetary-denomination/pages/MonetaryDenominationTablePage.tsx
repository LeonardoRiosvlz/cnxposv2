import React from 'react';
import MonetaryDenominationTable from '../components/Table';

type Props = {}
const MonetaryDenominationTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <MonetaryDenominationTable />
		</div>
	);
};

export default MonetaryDenominationTablePage;
