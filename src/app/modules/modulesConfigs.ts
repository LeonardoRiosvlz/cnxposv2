import './common/i18n';
import HomeModuleConfig from './home/HomeModuleConfig';
import AuthModuleConfig from './auth/AuthModuleConfig';
import UsersModuleConfig from 'app/modules/users/UsersModuleConfig';
import  UserAreaModuleConfig  from 'app/modules/user-area/user-areaModuleConfig';
import  UserPositionModuleConfig  from 'app/modules/user-position/user-positionModuleConfig';

const modulesConfigs: any[] = [
    AuthModuleConfig,
    UsersModuleConfig,
    UserPositionModuleConfig,
    UserAreaModuleConfig,
    //Home should Be last
    HomeModuleConfig
];

export default modulesConfigs;
