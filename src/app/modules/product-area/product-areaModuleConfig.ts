import React from 'react';
import './i18n';

const ProductAreaModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/product-area',
			component: React.lazy(() => import('./pages/ProductAreaTablePage'))
		},


	]
};

export default ProductAreaModuleConfig;
