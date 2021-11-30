import React from 'react';
import './i18n';

const ProductStructureModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/product-structure',
			component: React.lazy(() => import('./pages/ProductStructureTablePage'))
		},


	]
};

export default ProductStructureModuleConfig;
