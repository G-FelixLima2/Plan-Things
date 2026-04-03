import react from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps){
    return(
        <TouchableOpacity style={style.button1} onPress={onPress}>
            <Text style={style.Title}>{title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button1: {
        backgroundColor: '#023E8A',
        padding: 10,
        width: 270,
        alignContent: 'center',
        justifyContent: 'center',
    },
    
    Title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center',
    }
})