import './common/i18n';
import HomeModuleConfig from './home/HomeModuleConfig';
import AuthModuleConfig from './auth/AuthModuleConfig';
import UsersModuleConfig from 'app/modules/users/UsersModuleConfig';
import  UserAreaModuleConfig  from 'app/modules/user-area/user-areaModuleConfig';
import  UserPositionModuleConfig  from 'app/modules/user-position/user-positionModuleConfig';
import TaxesModuleConfig from './taxes/taxesModuleConfig';
import BanksModuleConfig from './banks/banksModuleConfig';
import UnitMeasurementModuleConfig from './unit-measurement/unit-measurementModuleConfig';
import MonetaryDenominationModuleConfig from './monetary-denomination/monetary-denominationModuleConfig';
import WarehouseModuleConfig from './warehouse/warehouseModuleConfig';

const modulesConfigs: any[] = [
    AuthModuleConfig,
    UsersModuleConfig,
    UserPositionModuleConfig,
    UserAreaModuleConfig,
    TaxesModuleConfig,
    BanksModuleConfig,
    UnitMeasurementModuleConfig,
    WarehouseModuleConfig,
    MonetaryDenominationModuleConfig,
    //Home should Be last
    HomeModuleConfig
];

export default modulesConfigs;
