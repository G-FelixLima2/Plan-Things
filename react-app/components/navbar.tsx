import { View, Text, Image, StyleSheet, ImageBackgroundBase } from "react-native";

export function Navbar() {
    return (
        <View style={style.Container}>  
                <Image source={require('@/assets/shoeske.webp')}  style={style.Image}/>
            <Text style={style.Title}>Home</Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#E9EFFD',

        width: '100%',
        height: '10%',
        paddingHorizontal: 5,
    },

    Image: {
        width: '20%',
        height: '100%',

        borderRadius: '50%',
        borderColor: '#023E8A',
        borderWidth: 2,
    },

    Title: {
        fontSize: 24,
        fontWeight: 700,
        color: '#023E8A',
        marginLeft: 10,

        borderLeftWidth: 2,
        borderLeftColor: '#023E8A',
        paddingLeft: 20,
    }
})
