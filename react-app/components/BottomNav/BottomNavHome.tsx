import { View, TouchableOpacity,Text, StyleSheet } from 'react-native';

export function BottomNavHome() {
    return (
        <View style={style.Container}>
                <TouchableOpacity style={style.button1}>
                    <Text style={style.Text1}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button2}>
                    <Text style={style.Text}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button2}>
                    <Text style={style.Text}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button2}>
                    <Text style={style.Text}>Home</Text>
                </TouchableOpacity>
        </View>
    )
}

const style= StyleSheet.create ({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#E9EFFD',

        width: '100%',
        height: '10%',
        borderTopWidth: 3,
        borderTopColor: '#023E8A',
    },

    button1: {
        backgroundColor: '#023E8A',
        padding: 10,
        borderRadius: 10,
    },

    button2:{
        padding: 10,
        borderRadius: 10,
    },

    Text1: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center',
    },

    Text: {
        textAlign: 'center',
    }
})