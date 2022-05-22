import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import List from '../pages/List';
import Edit from '../pages/Edit';

const MainStack = createStackNavigator();

export default () => (
    <MainStack.Navigator 
    screenOptions={{
        headerStyle:{
            backgroundColor: '#222'
        },
        headerTintColor: '#fff',
    }}
    >
        <MainStack.Screen name="List" component={List} />
        <MainStack.Screen name="Edit" component={Edit} />
    </MainStack.Navigator>
)