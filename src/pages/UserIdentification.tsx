import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    Alert
    
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function UserIdentification(){
    const[isFocused, setIsFocused] = useState(false);
    const[isFilled, setIsFilled] = useState(false);
    const[name, setName] = useState<string>()
    const navigation = useNavigation();

    function handleInputBlur() {
        setIsFocused(false);
        //caso saia do input e tenha conteudo no name, continuar com o efeito do style
        setIsFilled(!!name);
    }

    function handleInputFocus(){
        setIsFocused(true);                     
    }

    function handleInputChange(value: string) {
        //se tem conteúdo é verdadeiro, se não tem é falso
        setIsFilled(!!value);
        setName(value);
    }
    
    async function handleSubmit(){
        if (!name)
            return Alert.alert('Me diz como chamar você 😢');

        //espera 2 parametros strings: key e value. Sempre que eu quiser obter o nome salvo no dispositivo
        //vou usar o @plantmanager:user.
        //o @ é apenas um padrão. Que é @(nome do app) e oque estamos salvando
        //awaait, vai esperar o nome ser salvo no dispotivo pra então seguir
        try {
            await AsyncStorage.setItem('@plantmanager:user', name);
            //a tela que quero ir
            navigation.navigate('Confirmation', {
                title: 'Prontinho',
                subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
                buttonTitle: 'Começar',
                icon: 'smile',
                nextScreen: 'PlantSelect'
            });
        } catch{
            Alert.alert('Não foi possível salvar o seu nome 😢');
        }
       
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    {isFilled ? '😄' : '😃'}                      
                                </Text>
                                <Text style={styles.title}>
                                    Como podemos {'\n'}
                                    chamar você?
                                
                                </Text>
                            </View>
                            
                            <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && {borderColor: colors.green}
                            ]} 
                            placeholder="Digite um nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                            />
                            <View style={styles.footer}>
                                <Button 
                                title='Confirmar'
                                onPress={handleSubmit}
                                />
                            </View>
                            
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    content: {
        flex: 1,
        width: '100%',
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },

    header: {
        alignItems: 'center' 
    },

    emoji: {
        fontSize: 44
    },

    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },

    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
});