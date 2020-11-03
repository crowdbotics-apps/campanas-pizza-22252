import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps167126Navigator from '../features/Maps167126/navigator';
import Add-Item167125Navigator from '../features/Add-Item167125/navigator';
import Maps167121Navigator from '../features/Maps167121/navigator';
import UserProfile167117Navigator from '../features/UserProfile167117/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps167126: { screen: Maps167126Navigator },
Add-Item167125: { screen: Add-Item167125Navigator },
Maps167121: { screen: Maps167121Navigator },
UserProfile167117: { screen: UserProfile167117Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
