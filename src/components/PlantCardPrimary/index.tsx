import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri} from 'react-native-svg';
import { styles } from './styles';

interface PlantProps extends RectButtonProps{
    data: {
        name: string;
        photo: string;
    }
}

export const PlantCardPrimary = ({data, ...rest} : PlantProps) => {
    return(
        <RectButton
            style={styles.container}
            {...rest}
        >
            <SvgFromUri 
                uri={data.photo} 
                width={70} 
                height={70}
            />
            <Text style={styles.text}>
                {data.name}
            </Text>
        </RectButton>
    )
}
