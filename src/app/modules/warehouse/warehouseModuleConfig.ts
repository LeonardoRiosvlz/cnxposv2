import React from 'react';
import './i18n';

const WarehouseModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/warehouse',
			component: React.lazy(() => import('./pages/WarehouseTablePage'))
		},


	]
};

export default WarehouseModuleConfig;
