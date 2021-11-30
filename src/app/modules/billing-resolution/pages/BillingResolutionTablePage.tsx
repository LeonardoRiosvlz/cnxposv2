import React from 'react';
import BillingResolutionTable from '../components/Table';

type Props = {}
const BillingResolutionTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <BillingResolutionTable />
		</div>
	);
};

export default BillingResolutionTablePage;
