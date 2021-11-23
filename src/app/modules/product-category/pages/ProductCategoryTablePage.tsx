import React from 'react';
import ProductCategoryTable from '../components/Table';

type Props = {}
const ProductCategoryTablePage: React.FC<Props> = (props: Props) => {
	return (
		<div className='w-full flex flex-col'>
			 <ProductCategoryTable />
		</div>
	);
};

export default ProductCategoryTablePage;
