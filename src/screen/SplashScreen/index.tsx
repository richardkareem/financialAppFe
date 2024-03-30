import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { HomeScreenNavigationProp } from '../../route'
import AsyncStorage from '@react-native-async-storage/async-storage'


interface Props {
    navigation: HomeScreenNavigationProp
}

const SplashScreen = ({ navigation }: Props) => {

    const isLogged = async () => {
        const isHaveAcc = await AsyncStorage.getItem('userDetail');
        // console.log({ isHaveAcc });

        setTimeout(() => {
            if (!isHaveAcc) {
                navigation.navigate('RegisterScreen');
            } else {
                navigation.navigate('MainApp');
            }
        }, 3000)
    }

    useEffect(() => {
        (async () => {
            await isLogged();
        })();
    }, [])

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Welcome Paduka Raja</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'Poppins',
        fontSize: 32,
        fontWeight: '600'
    }
})