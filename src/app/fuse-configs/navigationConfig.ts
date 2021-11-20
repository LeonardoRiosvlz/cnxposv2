import i18next from 'i18next';

import en from './i18n/en';
import es from './i18n/es';
import { App_Modules } from 'api/graphql/schema/types';


i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('es', 'navigation', es);

export type MenuID = App_Modules

export enum IGNORED_MENU {
    TRANSCODER_MENU = 'TRANSCODER_MENU',
}

export type MenuItem = {
    id: MenuID | IGNORED_MENU | string
    type: 'group' | 'item' | 'collapse' | 'divider'
    title?: string
    translate?: string
    icon?: string
    url?: string
    exact?: boolean
    children?: Array<MenuItem>
}


const navigationConfig: Array<MenuItem> = [

    {
        id: 'corporate_management',
        title: 'Corporate Management',
        translate: 'CORPORATE_MANAGEMENT',
        type: 'collapse',
        icon: 'apps',
        children: [

            {
                id: 'users',
                title: 'Users',
                translate: 'USERS',
                type: 'collapse',
                children: [
                    {
                        id: App_Modules.Users,
                        title: 'User List',
                        translate: 'USERS_LIST',
                        type: 'item',
                        url: '/user',
                        exact: true
                    },
                    {
                        id: App_Modules.UserRoles,
                        title: 'Roles',
                        translate: 'ROLES',
                        type: 'item',
                        url: '/user/roles',
                        exact: true
                    }
                    /* {
                         id: App_Modules.UserPosition,
                         title: 'Positions',
                         translate: 'POSITIONS',
                         type: 'item',
                         url: '/user/positions',
                         exact: true
                     },
 
                     {
                         id: App_Modules.UserArea,
                         title: 'Areas',
                         translate: 'AREAS',
                         type: 'item',
                         url: '/user/areas',
                         exact: true
                     },*/

                ]

            }
        ]
    },
    {
        id: 'configuration',
        title: 'Configuration',
        translate: 'CONFIGURATION',
        type: 'collapse',
        icon: 'settings',
        children: [
            {
                id: App_Modules.UserArea,
                title: 'User Area',
                translate: 'USER_AREA',
                type: 'item',
                url: '/user-area',
                exact: true
            },
            {
                id: App_Modules.UserPosition,
                title: 'User Position',
                translate: 'USER_POSITION',
                type: 'item',
                url: '/user-position',
                exact: true
            }      
        ]
    },
    {
        id: 'PROCESS',
        title: 'Process',
        translate: 'PROCESS',
        type: 'collapse',
        icon: 'electric_car',
        children: [
            {
                id: App_Modules.UserPosition,
                title: 'Customer Information',
                translate: 'CUSTOMER_INFORMATION',
                type: 'item',
                url: '/user-position',
                icon: 'recent_actors',
                exact: true
            },
            {
                id: App_Modules.UserPosition,
                title: 'Corporation/Ein',
                translate: 'CORPORATION_EIN',
                type: 'item',
                url: '/user-position',
                icon: 'corporate_fare',
                exact: true
            },
            {
                id: App_Modules.UserPosition,
                title: 'IRP/ROAD',
                translate: 'IRP_ROAD',
                type: 'item',
                url: '/user-position',
                icon: 'local_atm',
                exact: true
            },
            {
                id: App_Modules.UserPosition,
                title: 'IFTA Fuel',
                translate: 'IFTA_FUEL',
                type: 'item',
                url: '/user-position',
                icon: 'local_atm',
                exact: true
            },
            {
                id: App_Modules.UserPosition,
                title: 'DOT Info',
                translate: 'IFTA_FUEL',
                type: 'item',
                url: '/user-position',
                icon: 'adjust',
                exact: true
            },
            {
                id: App_Modules.UserPosition,
                title: 'Substances Compliance',
                translate: 'SUBSTANCES_COMPLIANCE',
                type: 'item',
                url: '/user-position',
                icon: 'science',
                exact: true
            },
            {
                id: App_Modules.UserPosition,
                title: 'Driver Files',
                translate: 'DRIVER_FILES',
                type: 'item',
                url: '/user-position',
                icon: 'contact_page',
                exact: true
            },
            {
                id: App_Modules.UserPosition,
                title: 'Annual Vehicles Inspection',
                translate: 'ANNUAL_VEHICLES_INSPECTION',
                type: 'item',
                url: '/user-position',
                icon: 'departure_board',
                exact: true
            },
            {
                id: App_Modules.UserPosition,
                title: 'Invoices And Payments',
                translate: 'INVOICES_AND_PAYMENTS',
                type: 'item',
                url: '/user-position',
                icon: 'credit_card',
                exact: true
            },
            {
                id: App_Modules.UserPosition,
                title: 'Trailer Rental',
                translate: 'TRAILER_RENTAL',
                type: 'item',
                url: '/user-position',
                icon: 'rv_hookup',
                exact: true
            },
            {
                id: App_Modules.UserPosition,
                title: 'Yard Rental',
                translate: 'YARD_RENTAL',
                type: 'item',
                url: '/user-position',
                icon: '6_ft_apart',
                exact: true
            },
        ]
    }
]


export default navigationConfig;
