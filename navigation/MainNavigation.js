
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";
import styles from "../styles";

const MainNavigation = createStackNavigator({
    TabNavigation,
    PhotoNavigation,
    MessageNavigation
    },
    {
        headerMode: "none",
        mode: "modal"
    }
);

export default createAppContainer(MainNavigation);