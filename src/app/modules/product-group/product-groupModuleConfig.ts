import React from 'react';
import './i18n';

const ProductGroupModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/product-group',
			component: React.lazy(() => import('./pages/ProductGroupTablePage'))
		},


	]
};

export default ProductGroupModuleConfig;
