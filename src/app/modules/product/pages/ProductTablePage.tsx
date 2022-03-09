import React from 'react';
import ProductTable from '../components/Table';

type Props = {}
const ProductTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <ProductTable />
		</div>
	);
};

export default ProductTablePage;
