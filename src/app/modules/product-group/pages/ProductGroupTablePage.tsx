import React from 'react';
import ProductGroupTable from '../components/Table';

type Props = {}
const ProductGroupTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <ProductGroupTable />
		</div>
	);
};

export default ProductGroupTablePage;
