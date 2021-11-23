import React from 'react';
import './i18n';

const PreparationModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/preparation',
			component: React.lazy(() => import('./pages/PreparationTablePage'))
		},


	]
};

export default PreparationModuleConfig;
