import React from 'react';
import './i18n';

const BanksModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/banks',
			component: React.lazy(() => import('./pages/BanksTablePage'))
		},


	]
};

export default BanksModuleConfig;
