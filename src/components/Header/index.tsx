import React, {useEffect, useState} from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//outra estratégia para o resolver o problema de area do iphone por ex
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import UserImg from '../assets/vithor.png';
import { styles } from './styles';

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
