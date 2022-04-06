import React from 'react';
import './i18n';

const SubgroupModuleConfig: any = {
	settings: {
		layout: {}
	},
	routes: [

		{
			path: '/subgroup',
			component: React.lazy(() => import('./pages/SubgroupTablePage'))
		},


	]
};

export default SubgroupModuleConfig;
