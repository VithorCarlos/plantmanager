import React from 'react';
//definir o container de navegação
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import StackRoutes from './stack.routes';

const Routes = () => (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
);

export default Routes;