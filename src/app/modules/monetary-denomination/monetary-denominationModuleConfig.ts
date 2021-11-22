import React from 'react';
import './i18n';

const MonetaryDenominationModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/monetary-denomination',
			component: React.lazy(() => import('./pages/MonetaryDenominationTablePage'))
		},


	]
};

export default MonetaryDenominationModuleConfig;
