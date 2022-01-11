import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import colors from '../styles/colors';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';
import AuthRoutes from './tab.routes';


const stackRoutes = createStackNavigator();

//tipando AppRoutes: React.FC
const AppRoutes: React.FC = () => (
    //definir pilha de navegação e suas propriedades
    // headerShown='false' - n qr que o header apareça
    //cardStyle = cor padrão para o app
    //stackRoutes.Screen - definir como vai ser a navegação. Quando chamar o componente "name", devolva o component X
    //e depois centralizar isso dentro de um container de naveção (NavigationContainer)
    <stackRoutes.Navigator 
    screenOptions={{
        cardStyle: {
            backgroundColor: colors.white
        },
        headerShown: false
    }}             
    >
        <stackRoutes.Screen
            name='Welcome'
            component={Welcome}
        />

        <stackRoutes.Screen
            name='UserIdentification'
            component={UserIdentification}
        />

        <stackRoutes.Screen
            name='Confirmation'
            component={Confirmation}
        />

        <stackRoutes.Screen
            name='PlantSelect'
            component={AuthRoutes}
        />  

        <stackRoutes.Screen
            name='PlantSave'
            component={PlantSave}
        /> 

        <stackRoutes.Screen
            name='MyPlants'
            component={AuthRoutes}
        /> 
    </stackRoutes.Navigator>
)

export default AppRoutes;