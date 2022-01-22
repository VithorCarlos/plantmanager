import React from 'react';
import { 
    Text,
    View,
    Animated
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri} from 'react-native-svg';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles'
import colors from '../../styles/colors';

interface PlantProps extends RectButtonProps{
    data: {
        name: string;
        photo: string;
        hour: string;
    };

    //tipando uma função na interface. Nosso elemente recebe uma função
    handleRemove: () => void;
}

export const PlantCardSecondary = ({data, handleRemove, ...rest} : PlantProps) => {
    return(
        <Swipeable
            //travar do lado direito
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <RectButton
                            style={styles.buttonRemove}
                            onPress={handleRemove}
                        >   
                            <Feather name='trash' size={32} color={colors.white}/>
                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >
            <RectButton
                style={styles.container}
                {...rest}
            >
                <SvgFromUri 
                    uri={data.photo} 
                    width={50} 
                    height={50}
                />
                <Text style={styles.title}>
                    {data.name}
                </Text>

                <View style={styles.details}>
                    <Text style={styles.timeLabel}>
                        Regar às
                    </Text>

                    <Text style={styles.time}>
                        {data.hour}
                    </Text>
                </View>
            </RectButton>
        </Swipeable>
    )
}

