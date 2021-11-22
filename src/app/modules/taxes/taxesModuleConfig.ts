import React from 'react';
import './i18n';

const TaxesModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/taxes',
			component: React.lazy(() => import('./pages/TaxesTablePage'))
		},


	]
};

export default TaxesModuleConfig;
