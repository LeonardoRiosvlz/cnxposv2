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
        id: 'BILLING',
        title: 'Billing',
        translate: 'BILLING',
        type: 'collapse',
        icon: 'attach_money',
        children: [
            {
                id: App_Modules.BillingResolution,
                title: 'Billing Resolution',
                translate: 'BILLING_RESOLUTION',
                type: 'item',
                url: '/billing-resolution',
                exact: true
            },
            {
                id: App_Modules.Taxes,
                title: 'Taxes',
                translate: 'TAXES',
                type: 'item',
                url: '/taxes',
                exact: true
            },
            {
                id: App_Modules.UserPosition,
                title: 'Banks',
                translate: 'BANKS',
                type: 'item',
                url: '/banks',
                exact: true
            },
            {
                id: App_Modules.UnitMeasurement,
                title: 'Unit Measurement',
                translate: 'UNIT_MEASUREMENT',
                type: 'item',
                url: '/unit-measurement',
                exact: true
            },
            {
                id: App_Modules.MonetaryDenomination,
                title: 'Monetary Denomination',
                translate: 'MONETARY_DENOMINATION',
                type: 'item',
                url: '/monetary-denomination',
                exact: true
            }
        ]
    },
    {
        id: App_Modules.Warehouse,
        title: 'Warehouse',
        translate: 'WAREHOUSE',
        type: 'collapse',
        icon: 'store',
        url: '/warehouse',
        exact: true
    },
    {
        id: 'Product Architecture',
        title: 'PRODUCT ARCHITECTURE',
        translate: 'PRODUCT_ARCHITECTURE',
        type: 'collapse',
        icon: 'qr_code_scanner',
        children: [
            {
                id: App_Modules.ProductStructure,
                title: 'Product Structure',
                translate: 'PRODUCT_STRUCTURE',
                type: 'item',
                url: '/product-structure',
                exact: true
            },
            {
                id: App_Modules.ProductArea,
                title: 'Product Area',
                translate: 'PRODUCT_AREA',
                type: 'item',
                url: '/product-area',
                exact: true
            },
            {
                id: App_Modules.ProductCategory,
                title: 'Product Category',
                translate: 'PRODUCT_CATEGORY',
                type: 'item',
                url: '/product-category',
                exact: true
            },
            {
                id: App_Modules.ProductGroup,
                title: 'Product Group',
                translate: 'PRODUCT_GROUP',
                type: 'item',
                url: '/product-group',
                exact: true
            },
            {
                id: App_Modules.Subgroup,
                title: 'Subgroup',
                translate: 'SUBGROUP',
                type: 'item',
                url: '/subgroup',
                exact: true
            },
            {
                id: App_Modules.Preparation,
                title: 'Preparation',
                translate: 'PREPARATION',
                type: 'item',
                url: '/preparation',
                exact: true
            },
            {
                id: App_Modules.PreparationType,
                title: 'Preparation Type',
                translate: 'PREPARATION_TYPE',
                type: 'item',
                url: '/preparation-type',
                exact: true
            },
            {
                id: App_Modules.Product,
                title: 'Product',
                translate: 'PRODUCT',
                type: 'item',
                url: '/product',
                exact: true
            },
        ]
    },
]


export default navigationConfig;
