import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Additem177616Navigator from '../features/Additem177616/navigator';
import Maps177612Navigator from '../features/Maps177612/navigator';
import UserProfile177608Navigator from '../features/UserProfile177608/navigator';
import BlankScreen0177585Navigator from '../features/BlankScreen0177585/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Additem177616: { screen: Additem177616Navigator },
Maps177612: { screen: Maps177612Navigator },
UserProfile177608: { screen: UserProfile177608Navigator },
BlankScreen0177585: { screen: BlankScreen0177585Navigator },

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
