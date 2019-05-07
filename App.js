import React, { Component } from 'react';
import { Image, } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer,} from 'react-navigation';


import HomeScreen from './src/components/Home/home';
import MetricScreen from './src/components/Metric/metric';
import ImperialScreen from './src/components/Imperial/imperial';
import HorseDataScreen from './src/components/HorseData/horseData';
import DataScreen from './src/components/HorseData/allData';
import StartScreen from './src/components/Home/start';


const TabNavi = createBottomTabNavigator({
    Imperial: { screen: ImperialScreen },
    Metric: { screen: MetricScreen },
    'All Data': { screen: DataScreen },
    },
{
    tabBarOptions: {
        activeTintColor: '#dbcf03',
        inactiveTintColor: '#6c95a1',
        activeBackgroundColor: '#1c1c39',
        style: {
            backgroundColor: '#0f0f34',
        },
        labelStyle: {
            fontSize: 10
        },
    },
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            if(routeName === 'Imperial') {
                return (
                    <Image source={ focused ? require('./assets/inchYellow.png') : require('./assets/inchBlue.png')} style={{width:30, height: 25}}/>
                );
            } else if(routeName === 'Metric') {
                return(
                    <Image source={ focused ? require('./assets/meterYellow.png') : require('./assets/meterBlue.png')} style={{width: 30, height: 25}}/>
                );
            }else if(routeName === 'All Data') {
                return(
                    <Image source={ focused ? require('./assets/allDataYellow.png') : require('./assets/allDataBlue.png')} style={{width: 30, height: 25}}/>
                );
            }
        }
    }),
});

const AppNavigator = createStackNavigator({
    Start: { screen: StartScreen },
    Home: { screen: HomeScreen},
    HorseName: { screen: HorseDataScreen},
    Data: { screen: DataScreen},
    Tabs: {screen: TabNavi},
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#0f0f34',
        },
        headerTintColor: '#d2c603'
    },
},
    {
        initialRouteName: 'Start',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
    render(){
        return <AppContainer/>
    }
}