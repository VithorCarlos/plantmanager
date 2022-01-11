// é um arquivo .ts pq nao precisamos se preocupar so com armazenamento.
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { format } from 'date-fns';

export interface PlantProps{
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number;
        repeat_every: string;
    };
    hour: string;
    dateTimeNotification: Date;
}

//vms salvar tds plantas em formato de objeto
export interface StoragePlantProps {
    //id da planta e o objeto vinculado dentro do id
    [id: string]: {
        data: PlantProps;
        notificationId: string;
    }
}

export async function savePlant(plant: PlantProps): Promise<void> {
    try {
        const nextTime = new Date(plant.dateTimeNotification);
        const now = new Date();

        //frequencia que tem que cuidar e lembrar o usuário
        const { times, repeat_every } = plant.frequency;

        //quantas vezes vai lembrar o usuario na semana
        if (repeat_every == 'week'){
            //quantas vezes na semana vm lembrar o usuário
            const interval = Math.trunc(7 / times);
            //setar nova data
            nextTime.setDate(now.getDate() + interval)
         } 
        else {
            //se tem que lembrar todo dia entao pega a proxima data
            nextTime.setDate(nextTime.getDate() + 1);
        }

        //quantos segundos existe da data de agora com a proxima data que tem que lembrar o usuario
        //diferença de segundos de um período para o outro
        const seconds = Math.abs(
            //para nao ter a possibilidade de gerar numeros negativos
            //qual a diferenca de segundos de um periodo para o outro
            Math.ceil(now.getTime() - nextTime.getTime()) / 1000);

        //pegar o id na notificaçao, quando agendamos uma notificação, ela armazenar o id da notificação
        const notificationId = await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Heeey, 🌱',
                body: `Está na hora de cuidar da sua ${plant.name}`,
                //para sempre tocar um barulho no telefone do usuário
                sound: true,
                //Dar prioridade para a notifição
                priority: Notifications.AndroidNotificationPriority.HIGH,
                //anexando na notificação todos os detalhes de planta
                data: {
                    plant
                },
            },
            //quando que esta notificação tem que ser executada
            trigger: {
                seconds: seconds < 60 ? 60 : seconds,
                repeats: true
            }
        });

        //pegando tudo que estar salva em texto e convertendo para um obj do tipo json.
        //E o tipo tem que ser conforme o StoragePlantsProps
        //Retorna  PlantsProps ou null
        const data = await AsyncStorage.getItem('@plantmanager:plants');
        const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};
        
        const newPlant = {
            //passando para o "plant" o proprio dado
            [plant.id]: {
                data: plant,
                notificationId
            }
        }

        await AsyncStorage.setItem('@plantmanager:plants', 
            //obj virar texto, ja q estar em json
            //pegando oque ja existia e cadastrando a nova planta
            JSON.stringify({
                ...newPlant,
                ...oldPlants
            }));

    } catch(error) {
        throw new Error(error);
        
    }
}

export async function loadPlant(): Promise<PlantProps[]> {
    try {
        //pegando tudo que estar salva em texto e convertendo para um obj do tipo json.
        //E o tipo tem que ser conforme o StoragePlantsProps
        //Retorna  PlantsProps ou null
        const data = await AsyncStorage.getItem('@plantmanager:plants');
        const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};
    
        //percorrer cada chave que existe dentro da planta
        const plantsSorted = Object
        .keys(plants)
        //pegando as plantas pela chave e descarregando os dados dela
        .map((plant) => {
            //traz tudo que existe na planta e traz o hour
            return {
                ...plants[plant].data,
                hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
            }
        })
        .sort((a, b) => 
             //percorrer item por item para descobrir qual desses itens é o menor
            Math.floor(
                new Date(a.dateTimeNotification).getTime() / 1000 -
                Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
            )
        );

        return plantsSorted;
        
    } catch(error) {
        throw new Error(error);
        
    }
}

export async function removePlant(id: string): Promise<void> {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    //verificar se tem alguma coisa ou não
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    //cancelar notificação da planta agendada
    await Notifications.cancelScheduledNotificationAsync(plants[id].notificationId);

    //deletar a planta que tenha o id que acabamos de selecionar em plant
    delete plants[id];

    //devolver para a coleção novamente
    await AsyncStorage.setItem(
        '@plantmanager:plants',
        JSON.stringify(plants)
    );
}