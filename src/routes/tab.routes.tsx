import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import App from '../../App';
import { PlantSelect } from '../pages/PlantSelect';
import { MaterialIcons } from '@expo/vector-icons';
import { MyPlants } from '../pages/MyPlants';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator 
            screenOptions={{
                headerShown: false,
                //quando o botao estiver ativo
                tabBarActiveTintColor: colors.green,
                //quando botao estiver inativo
                tabBarInactiveTintColor: colors.heading,
                //os icones um do lado do outro
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    paddingVertical: 20,
                    height: 70,
                    paddingBottom: 25
                }
            }} 
        >
            <AppTab.Screen 
                name='Nova Panta'
                component={PlantSelect}
                options={{
                    //definir icone
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons
                            name='add-circle-outline'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <AppTab.Screen 
                name='Minhas Pantas'
                component={MyPlants}
                options={{
                    //definir icone
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons
                            name='format-list-bulleted'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </AppTab.Navigator>
    )
}

export default AuthRoutes;
