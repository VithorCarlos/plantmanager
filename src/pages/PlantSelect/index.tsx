import React, { useEffect, useState } from 'react';
import {
    View, 
    Text,
    FlatList,
    ActivityIndicator
} from 'react-native';
import colors from '../../styles/colors';
import { Header } from '../../components/Header';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import api from '../../services/api';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { Load } from '../../components/Load';
import { useNavigation } from '@react-navigation/native';
import { PlantProps } from '../../libs/storage';
import { styles } from './styles'

interface EnviromentProps{
    key: string;
    title: string;
}

export function PlantSelect(){
    const [enviroments, setEnvironments] = useState<EnviromentProps[]>([]); 
    const [plants, setPlants] = useState<PlantProps[]>([]);
    //estado auxiliar para nao ficar criando requisões para api
    const [filteredPlants, setFiltedPlants] = useState<PlantProps[]>([]); 
    //saber qual ambiente foi selecionado
    const [enviromentsSelected, setEnvironmentSelected] = useState('all'); 
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    const navigation = useNavigation();

    function handleEnviromentSelected(environment: string){
        setEnvironmentSelected(environment);

        if (environment == 'all')
            return setFiltedPlants(plants);

        //percorrer cada planta verificando se a planta tem o ambiente que contém o ambiente que esta querendo filtrar
        const filtered = plants.filter(plant =>
            plant.environments.includes(environment)   
        );

        setFiltedPlants(filtered);
    }

    async function fetchPlants() {
        const {data} = await api
        .get(`plants?_sort=name&order=asc&_page=${page}&_limit=8`);
        
        if(!data)
            return setLoading(true);

        if (page > 1){
            //armazenar os dados que estão armazenados anteriormente no estado e recuperar essas informações
            setPlants(oldValue => [...oldValue, ...data]);
            setFiltedPlants(oldValue => [...oldValue, ...data]);
        } else {
            setPlants(data);
            setFiltedPlants(data);
        }

        setLoading(false);
        setLoadingMore(false);
    }
    //qd o usuario rolar e chegar no final da rolagem chamar mais dados aos poucos
    function handleFetchMore(distance: number) {
        if (distance < 1)
            return;

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlants();
    }

    function handlePlantSelect(plant: PlantProps){
        navigation.navigate('PlantSave', {plant});
    }

    //hook do react que carregar toda vez que a tela for montada. Ele e carregado antes da tela ser exibida
    useEffect(() => {
        async function fetchEnviroment() {
            const {data} = await api
            .get('plants_environments?_sort=title&order=asc');
            setEnvironments([
                    {
                        key: 'all',
                        title: 'Todos',
                    },
                    ...data
                ]);
            }
        
        fetchEnviroment();
    },[]);

    useEffect(() => {
        fetchPlants();
    }, []);

    if (loading) 
    return <Load />
    
    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                <Header/>
        
                <Text style={styles.title}>Em qual ambiente</Text>

                <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
            </View>

            <View>
                <FlatList 
                    data={enviroments}
                    keyExtractor={(item) => String(item.key)}
                    renderItem={({item}) => (<EnvironmentButton 
                        title={item.title}
                        active={item.key == enviromentsSelected}
                        onPress={() => handleEnviromentSelected(item.key)}
                        /> 
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.environmentList}
                />
            </View>
            <View style={styles.plants}>
                <FlatList 
                    data={filteredPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                        <PlantCardPrimary 
                        data={item} 
                        onPress={() => handlePlantSelect(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}//qd user chegar ao final da tela
                    onEndReached={({ distanceFromEnd })=>
                        handleFetchMore(distanceFromEnd)    
                    }
                    ListFooterComponent={
                        loadingMore
                        ? <ActivityIndicator color={colors.green} />
                        : <></>
                    }
                    />
            </View>
            
        </View>
    )
}
