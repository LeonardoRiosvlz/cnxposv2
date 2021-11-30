import React from 'react';
import './i18n';

const CompanyModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/company',
			component: React.lazy(() => import('./pages/CompanyTablePage'))
		},


	]
};

export default CompanyModuleConfig;
