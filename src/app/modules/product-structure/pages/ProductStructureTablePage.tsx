import React from 'react';
import ProductStructureTable from '../components/Table';

type Props = {}
const ProductStructureTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <ProductStructureTable />
		</div>
	);
};

export default ProductStructureTablePage;
