import React from 'react';
import './i18n';

const ProductCategoryModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/product-category',
			component: React.lazy(() => import('./pages/ProductCategoryTablePage'))
		},


	]
};

export default ProductCategoryModuleConfig;
