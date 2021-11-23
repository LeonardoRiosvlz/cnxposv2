import React from 'react';
import PreparationTypeTable from '../components/Table';

type Props = {}
const PreparationTypeTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <PreparationTypeTable />
		</div>
	);
};

export default PreparationTypeTablePage;
