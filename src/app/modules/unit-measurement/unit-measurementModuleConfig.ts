import React from 'react';
import './i18n';

const UnitMeasurementModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/unit-measurement',
			component: React.lazy(() => import('./pages/UnitMeasurementTablePage'))
		},


	]
};

export default UnitMeasurementModuleConfig;
