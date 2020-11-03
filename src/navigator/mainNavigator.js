import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList50167147Navigator from '../features/ArticleList50167147/navigator';
import CalendarView51167146Navigator from '../features/CalendarView51167146/navigator';
import BlankScreen49167145Navigator from '../features/BlankScreen49167145/navigator';
import Maps167126Navigator from '../features/Maps167126/navigator';
import Add-Item167125Navigator from '../features/Add-Item167125/navigator';
import Maps167121Navigator from '../features/Maps167121/navigator';
import UserProfile167117Navigator from '../features/UserProfile167117/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList50167147: { screen: ArticleList50167147Navigator },
CalendarView51167146: { screen: CalendarView51167146Navigator },
BlankScreen49167145: { screen: BlankScreen49167145Navigator },
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
