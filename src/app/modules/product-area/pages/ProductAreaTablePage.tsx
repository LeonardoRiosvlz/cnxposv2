import React from 'react';
import ProductAreaTable from '../components/Table';

type Props = {}
const ProductAreaTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <ProductAreaTable />
		</div>
	);
};

export default ProductAreaTablePage;
