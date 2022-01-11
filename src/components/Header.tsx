import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../styles/colors';
//outra estratégia para o resolver o problema de area do iphone por ex
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import UserImg from '../assets/vithor.png';
import fonts from '../styles/fonts';
export function Header(){
    const [userName, setUsername] = useState<string>();

    useEffect(()=>{
       async function loadStorageUserName(){
            const user = await AsyncStorage.getItem('@plantmanager:user'); 
            //se tiver user, retorna o usario, se nao retorne nada
            //como getItem tambem retorna null, então ja tratamos no setUsername que tbm pode receber um item vazio
            setUsername(user || '');
       }

       loadStorageUserName();
    }, []);

    return (   
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Ola,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <Image source={UserImg} style={styles.image}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
       
    },
    
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },

    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40
    }                
});