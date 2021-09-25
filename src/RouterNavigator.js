import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Filter from './components/Filter';
import styles, { black_color, wp, hp, Primary_color, white_color } from './components/Assets/style/styles';
import { TouchableWithoutFeedback, View } from 'react-native';
import { VectorIcon } from './components/Assets/common';


const Stack = createStackNavigator();


const close = () => {
    return (
        <TouchableWithoutFeedback onPress={() => alert("Close")}>
            <View style={styles.back_boc}>

                <VectorIcon
                    type="AntDesign"
                    name={"close"}
                    size={wp(5)}
                    color={white_color} />

            </View>
        </TouchableWithoutFeedback>
    )
}
export default function RouterNavigator() {

    return (

        <Stack.Navigator

            initialRouteName="Filter"

            screenOptions={{

                headerStyle: {
                    elevation: 10,
                    borderBottomWidth: .2,
                    backgroundColor: Primary_color,
                    borderBottomColor: black_color,
                    shadowColor: black_color

                },
                headerTitleStyle: {
                    fontSize: wp(5),
                    color: white_color,
                },
                animationEnabled: true,
                animationTypeForReplace: "pop",
                cardOverlayEnabled: true,
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    containerStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0.3, 1],
                            outputRange: [0.2, 1],
                            extrapolate: "extend",
                        }),

                    },
                }),
            }}
        >

            <Stack.Screen
                component={Filter}
                name="Filter"
                options={{
                    headerShown: true,
                    title: "Filter Results",
                    headerLeft: () => close()
                }}
            />


        </Stack.Navigator>
    );
}