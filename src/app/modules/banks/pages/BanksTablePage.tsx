import React from 'react';
import BanksTable from '../components/Table';

type Props = {}
const BanksTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <BanksTable />
		</div>
	);
};

export default BanksTablePage;
