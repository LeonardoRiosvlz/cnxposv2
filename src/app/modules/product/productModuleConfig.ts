import React from 'react';
import './i18n';

const ProductModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/product',
			component: React.lazy(() => import('./pages/ProductTablePage'))
		},


	]
};

export default ProductModuleConfig;
        