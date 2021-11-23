import React from 'react';
import PreparationTable from '../components/Table';

type Props = {}
const PreparationTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <PreparationTable />
		</div>
	);
};

export default PreparationTablePage;
