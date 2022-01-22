import React from 'react';
import { 
    SafeAreaView, 
    Text, 
    Image, 
    TouchableOpacity,
    View
} from 'react-native';

import wateringImg from '../../assets/watering.png';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { styles } from './styles'

export function Welcome(){
    //É com ele que conseguimos fazer a navegação
    const navigation = useNavigation();

    function handleStart(){
        //a tela que quero ir
        navigation.navigate('UserIdentification' as never);
    }
    
    return (
        <SafeAreaView  style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                        Gerencie {'\n'} 
                        suas plantas de{'\n'} 
                        forma fácil
                </Text>
                
                    <Image source={wateringImg} 
                    style={styles.image}
                    resizeMode='contain'
                    />

                    <Text style={styles.subtitle}>
                        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre
                        que precisar.
                    </Text>

                    <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.7}
                    onPress={handleStart}
                    >
                        <Feather 
                        name='chevron-right' 
                        style={styles.buttonIcon}
                        />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
