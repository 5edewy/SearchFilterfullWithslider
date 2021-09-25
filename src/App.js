import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RouterNavigator from './RouterNavigator';
import { Primary_color } from './components/Assets/style/styles';

class App extends Component {

    render() {

        return (
            <NavigationContainer
            >
                <StatusBar
                    backgroundColor={Primary_color}
                    barStyle={"light-content"}
                />
                <RouterNavigator />
            </NavigationContainer>
        );
    }
}

export default App;