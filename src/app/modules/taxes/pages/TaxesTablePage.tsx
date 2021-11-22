import React from 'react';
import TaxesTable from '../components/Table';

type Props = {}
const TaxesTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <TaxesTable />
		</div>
	);
};

export default TaxesTablePage;
