import React from 'react';
import './i18n';

const BillingResolutionModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/billing-resolution',
			component: React.lazy(() => import('./pages/BillingResolutionTablePage'))
		},


	]
};

export default BillingResolutionModuleConfig;
