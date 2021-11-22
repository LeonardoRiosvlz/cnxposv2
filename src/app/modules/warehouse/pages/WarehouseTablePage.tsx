import React from 'react';
import WarehouseTable from '../components/Table';

type Props = {}
const WarehouseTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <WarehouseTable />
		</div>
	);
};

export default WarehouseTablePage;
