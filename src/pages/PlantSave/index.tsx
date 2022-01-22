import React, { useEffect, useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView, 
    Platform,
    TouchableOpacity
} from 'react-native';
import {SvgFromUri} from 'react-native-svg';
import {useNavigation, useRoute} from '@react-navigation/core';
import waterdrop from '../../assets/waterdrop.png';
import { Button } from '../../components/Button';
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';
import { PlantProps, savePlant } from '../../libs/storage';
import { styles } from './styles'
//pegar tds detalhes da planta na interface
interface Params{
    plant: PlantProps
}

export function PlantSave(){
    //por padrão vai ser uma nova data
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    //Pra controlar quando vai aparecer ou não se for  android/
    //Se platform for como IOS, o padrão ja vai ser para mostrar como verdadeiro
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS  == 'ios');

    const route = useRoute();
    const { plant } =  route.params as Params;

    const navigation = useNavigation();

    function handleChangeTime(event: Event, dateTime: Date | undefined){
        if(Platform.OS == 'android'){
            //faz inversão... Se ta verdadeiro deixa false e vice versa
            setShowDatePicker(oldState => !oldState);
        }

        //Não deixar a pessoa escolher uma data que já passou
        //isBefore(dateTime, new Date() saber se dateTime é antiga a newDate
        if(dateTime && isBefore(dateTime, new Date())){
            //tirar o horário antigo e voltar para o momento atual
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma hora no futuro! ⏱️');
        }

        if (dateTime) {
            setSelectedDateTime(dateTime);
        }
    }

    function handleOpenDateTimePickerForAndroid(){
        setShowDatePicker(oldState => !oldState);
    }

    async function handleSave(){
        
        try {
            //pegar a propria planta e adicionar um time notification
            await savePlant({
                ...plant,
                dateTimeNotification: selectedDateTime
            })                      

            navigation.navigate('Confirmation', {
                title: 'Tudo Certo',
                subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado',
                buttonTitle: 'Muito Obrigado :D',
                icon: 'hug',
                nextScreen: 'MyPlants'
            });

        } catch {
            Alert.alert('Não foi possível salvar! 😢');
        }
    }
    
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            <View style={styles.container}>  
                <View style={styles.plantInfo}>
                    <SvgFromUri 
                        uri={plant.photo}
                        height={150}
                        width={150}
                    />
                    <Text style={styles.plantName}>
                        {plant.name}
                    </Text>
                    <Text style={styles.plantAbout}>
                        {plant.about}
                    </Text>  
                </View>
                
                <View style={styles.controller}>
                    <View style={styles.tipContainer}>
                        <Image 
                            source={waterdrop}
                            style={styles.tipImage}
                        />
                        <Text style={styles.tipText}>
                            {plant.water_tips}
                        </Text>
                    </View>
                    <Text style={styles.alertLabel}>
                            Escolha o melhor horário para ser lembrado: 
                    </Text>
                
                    
                    {showDatePicker && (
                    <DateTimePicker
                        value={selectedDateTime}
                        mode='time'
                        display='default'
                        onChange={handleChangeTime}
                    />
                    )}

                    {
                        Platform.OS == 'android' && (
                            <TouchableOpacity 
                                onPress={handleOpenDateTimePickerForAndroid}
                                style={styles.dateTimePickerButton}
                                >
                                <Text style={styles.dateTimePickerText}>
                                    {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                                </Text>
                            </TouchableOpacity>
                        
                        )
                    }

                    <Button
                        title='Cadastrar Planta'
                        onPress={handleSave}
                    />
                </View>
            </View>
        </ScrollView>
     )
}

