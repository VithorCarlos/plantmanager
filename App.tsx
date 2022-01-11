/**toda interface começa importando o react */
import React, {useEffect} from 'react';
//quando nao diz o nome do arquivo, por padrao ele procurar por um index
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold 
} from '@expo-google-fonts/jost';
import * as Notifications from 'expo-notifications';
import { PlantProps } from './src/libs/storage';

//depois exportar e retornar algum elemento
/**Uma regra é que o react so pode retornar um elemento por vez <text> por ex */
/**default - é usado para o react entender ele, achar o arquivo e conseguir usar */
export default function App(){
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    //listener é uma função que vai ficar observando quando uma notificação chega
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        // pegando todos detalhes da planta que estava junto na notificação
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      }
    )
    //adicionar o listener so uma vez
    return () => subscription.remove();

    /*deletar as notificações*/
    // async function notifications() {
    //   recuperar todos os agendamentos
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log('*********** NOTIFICAÇÕES AGENDADAS **************');
    //   console.log(data);

    //   /**DELETAR TODAS NOTIFICAÇÕES */
    //   await Notifications.cancelAllScheduledNotificationsAsync();
    //   //agr deve mostar um aray vazio
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log('*********** NOTIFICAÇÕES AGENDADAS **************');
    //   console.log(data);
    // }

    // notifications();
  }, []);

  /** Enquanto a font nao foi carregada, dar uma segurada na tela de splash */
  if (!fontsLoaded)
    return <AppLoading />

  return (
    <Routes/>
  )
}
