import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView,
    View,
    Text
} from 'react-native';
import { styles } from './styles';
import { Button } from '../../components/Button';

interface Params {
    title: string,
    subtitle: string,
    buttonTitle: string,
    icon: 'smile' | 'hug',
    nextScreen: string;
}

const emojis = {
    hug: '🤗',
    smile: '😄'
}

export function Confirmation() {
    const navigation = useNavigation();
    //recuperar os parametros
    const routes = useRoute();

    //pegando as informações ja desestruturando
    const {
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params

    function handleMoveOn(){
        //a tela que quero ir
        navigation.navigate(nextScreen as never);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                 <Text style={styles.emoji}>
                    {emojis[icon]}
                 </Text>
                 <Text style={styles.title}>
                    {title}
                 </Text>
                 <Text style={styles.subtitle}>
                    {subtitle}
                 </Text>
                 <View style={styles.footer}>
                    <Button 
                    title={buttonTitle}
                    onPress={handleMoveOn}
                    />
                </View>
            </View>

            
        </SafeAreaView>
    )
};

