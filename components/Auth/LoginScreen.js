import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Svg, { Path, Rect } from "react-native-svg"


export default function LoginScreenComponent({ navigation }) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const goToAuthScreenPage = () => {
        navigation.navigate('AuthScreen')
    }
    const goToRegisterPage = () => {
        navigation.navigate('RegisterScreen')
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login: login, password: password })
    };

    async function logIn() {
        await fetch('https://api.richhens.com/api/v1/login_check', requestOptions)
            .then(response => response.json())
            .then(res => console.log(res, 'res'))
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={require('../../assets/images/image2.png')}
                resizeMode="cover">
                <View style={styles.block}>
                    <Image
                        style={styles.blockImage}
                        source={require('../../assets/images/image4.png')}
                    />
                    <Text style={styles.textBlock}>SIGN UP/LOGIN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Email address'
                        value={login}
                        onChangeText={(text) => setLogin(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => { setPassword(text) }}
                    />
                    <TouchableOpacity
                        onPress={() => { goToAuthScreenPage(), logIn() }}
                        style={styles.signUpButton} >
                        <Text style={styles.signUpText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => goToRegisterPage()}
                        style={styles.link}>
                        <Text style={[styles.agreeText, { textDecorationLine: 'underline' }]}>New Account</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    block: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#91A5A1',
        width: '80%',
        height: 437,
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
    },
    blockImage: {
        width: 140,
        height: 88
    },
    textBlock: {
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Inter_300Light',
        marginTop: 10
    },
    input: {
        width: '90%',
        backgroundColor: '#F3F3F3',
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#515051',
        borderRadius: 25,
        fontStyle: 'italic',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20
    },
    inp: {
        fontStyle: 'italic'
    },
    buttonText: {
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_500Medium ',
        color: '#FFC300'
    },
    agree: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        position: 'relative'
    },
    agreeText: {
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_400Regular',
        marginTop: 10,
        color: '#333333',

    },
    agreeCheckBox: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#008100',
        width: 20,
        height: 20,
        borderRadius: 4,
        marginTop: 6
    },
    line: {
        height: 1,
        backgroundColor: '#333333',
        position: 'absolute',
    },
    signUpButton: {
        marginTop: 40,
        width: '50%',
        backgroundColor: '#FFF799',
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#333333',
        borderBottomWidth: 3

    },
    signUpText: {
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_600SemiBold',
        color: '#333333',
    },
    link: {
        position: 'relative',
        marginTop: 20
    },
    rightFirst: {
        bottom: 0,
        right: "20%",
        width: 70,
    },
    rightSecond: {
        bottom: -1,
        right: 0,
        width: 80
    }
})