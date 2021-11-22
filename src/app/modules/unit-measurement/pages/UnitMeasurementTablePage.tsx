import React from 'react';
import UnitMeasurementTable from '../components/Table';

type Props = {}
const UnitMeasurementTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <UnitMeasurementTable />
		</div>
	);
};

export default UnitMeasurementTablePage;
