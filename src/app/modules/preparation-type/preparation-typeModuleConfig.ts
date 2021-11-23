import React from 'react';
import './i18n';

const PreparationTypeModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/preparation-type',
			component: React.lazy(() => import('./pages/PreparationTypeTablePage'))
		},


	]
};

export default PreparationTypeModuleConfig;
