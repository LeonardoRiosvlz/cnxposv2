import React from 'react';
import SubgroupTable from '../components/Table';

type Props = {}
const SubgroupTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <SubgroupTable />
		</div>
	);
};

export default SubgroupTablePage;
