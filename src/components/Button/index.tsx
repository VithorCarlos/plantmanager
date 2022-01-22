import React from "react";
import { 
    TouchableOpacity,
    StyleSheet,
    Text,
    TouchableOpacityProps,
    ButtonProps
} from 'react-native';
import { styles } from './styles';

interface ButtonsProps extends TouchableOpacityProps{
    title: string
}

export function Button({title, ...rest}: ButtonProps){
    return (
        <TouchableOpacity 
        style={styles.container} 
        activeOpacity={0.7}
        {...rest}
        >
            <Text style={styles.text}>
                 {title}
            </Text>
        </TouchableOpacity>
    )
}
