import React from 'react';
import CompanyTable from '../components/Table';

type Props = {}
const CompanyTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <CompanyTable />
		</div>
	);
};

export default CompanyTablePage;
