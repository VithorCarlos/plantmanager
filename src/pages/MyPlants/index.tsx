import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    Alert
} from 'react-native';
import { Header } from '../../components/Header';
import waterdrop from '../../assets/waterdrop.png';
import { loadPlant, PlantProps, removePlant } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import { styles } from './styles';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { Load } from '../../components/Load';

export function MyPlants() {
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWaterd, setNextWated] = useState<string>();

    function handleRemove(plant: PlantProps) {
        //travalhando com confirmação
        Alert.alert('Remover', `Deseja remover a ${plant.name}`, [
            {
                text: 'Não 🙏',
                style: 'cancel'
            },
            {
                text: 'Sim 😥',
                onPress: async () => {
                    try{ 
                        await removePlant(plant.id);
                        //atualizar o estado
                        setMyPlants((oldData) => 
                            //devolve todos os itens que tem aí, mas só oque o id é diferente de plant.id(a planta selecionada)
                            oldData.filter((item) => item.id != plant.id)
                        );

                    } catch(Error) {
                        Alert.alert('Não foi possível remover! 😥');
                    }
                }
            }
        ]);
    }

    useEffect(() => {
        async function loadStorageData() {
            const plantsStoraged = await loadPlant();

            //qual a distancia de uma data para outra
            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                {locale: pt}
            );
            setNextWated(
                //primeira posicao e a proxima planta a ser regada
                `Não se esqueça de regar a aproximadamente ${plantsStoraged[0].name} à ${nextTime}.`
            )

            setMyPlants(plantsStoraged);
            //parar o carregamento
            setLoading(false);
        }

        loadStorageData();
    }, [])

    if (loading) 
        return <Load />

    return (
        <View style={styles.container}>
            <Header/>

           <View style={styles.spotlight}>
                <Image 
                    source={waterdrop}
                    style={styles.spotlightimage}
                />
                <Text style={styles.spotlightText}>
                    {nextWaterd}
                </Text>
            </View> 

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Próximas regadas
                </Text>

                <FlatList 
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                    <PlantCardSecondary 
                        data={item}
                        handleRemove={() => {handleRemove(item)}}    
                    />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            
        </View>
    )
}