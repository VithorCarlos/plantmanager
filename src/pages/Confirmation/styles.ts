import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',

    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
        
    },

    emoji: {
        fontSize: 78,
        textAlign: 'center'

    },

    title: {
        fontSize:22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15  
    },

    subtitle: {
        fontSize:17,
        fontFamily: fonts.text,
        textAlign: 'center',
        paddingVertical: 10,
        color: colors.heading
    },

    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
})