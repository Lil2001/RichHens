import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Switch, Platform } from 'react-native';
import { useState } from 'react';
import Svg, { Path, Rect } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_200ExtraLight, Inter_600SemiBold, Inter_500Medium, Inter_400Regular, Inter_300Light } from '@expo-google-fonts/inter';

export default function UserProfileScreenComponent({ navigation }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const routes = navigation.getState()?.routes;
    const prevRoute = routes[routes.length - 2];
    console.log(prevRoute.name, 'lll')

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#F8F0CD', '#B6DAF6']}
                style={styles.block}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate(prevRoute.name)}
                >
                    <Image
                        style={{ width: 37, height: 37 }}
                        source={require('../../assets/images/backArrow.png')}
                    />
                </TouchableOpacity>
                <View
                    style={styles.avatarBlock}
                >
                    <Image
                        style={{ width: 70, height: 70 }}
                        source={require('../../assets/images/avatar1.png')}
                    />

                    <View>
                        <Text style={styles.textFirst}>Hen User</Text>
                        <Text style={styles.textSecond}>sampe@mail.com</Text>
                    </View>
                    <TouchableOpacity
                        style={{marginLeft:100}}
                        onPress={() => navigation.navigate('UserProfileEditingScreen')}
                    >
                        <Svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M1 1L9 9L1 17" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                        </Svg>

                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <View style={{ width: '100%', padding: 20 }}>
                <View style={styles.blockActivate}>
                    <Text style={styles.textActivate}>Activation code</Text>
                    <View style={styles.arrowDiv}>
                        <Text style={styles.textActivate}>5</Text>
                        <TouchableOpacity
                            style={{ marginLeft: 20 }}
                        >
                            <Svg width="10" height="12" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M1 1L9 9L1 17" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                            </Svg>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.blockActivate}>
                    <Text style={styles.textActivate}>Sound</Text>
                    <View style={styles.arrowDiv}>
                        <Switch
                            trackColor={{ false: Platform.OS === "android" ? '#454545' : '#454545', true: Platform.OS === "android" ? "#004B84" : "#004B84", }}
                            thumbColor={Platform.OS === "android" ? "#ffffff" : "#ffffff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
                <View style={styles.blockActivate}>
                    <Text style={styles.textActivate}>Terms of Use</Text>
                    <TouchableOpacity
                        style={{ marginLeft: 20 }}
                    >
                        <Svg width="10" height="12" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M1 1L9 9L1 17" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                        </Svg>
                    </TouchableOpacity>
                </View>
                <View style={styles.blockActivate}>
                    <Text style={styles.textActivate}>Version 1.0.1</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white'
    },
    block: {
        width: '100%',
        height: 190,
        // padding: 25
        paddingTop:25,
        paddingLeft:25,
        paddingBottom:25,
        paddingRight:18
    },
    avatarBlock: {
        width: '100%',
        // padding: 35,
        paddingTop:35,
        paddingBottom:35,
        paddingLeft:35,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textFirst: {
        fontFamily: 'Inter_500Medium',
        fontSize: 18,
        color: '#333333',
        lineHeight: 22,
        marginBottom: 5
    },
    textSecond: {
        fontFamily: 'Inter_300Light',
        fontSize: 14,
        color: '#333333',
        lineHeight: 17,
        fontStyle: 'italic'
    },
    blockActivate: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
    },
    arrowDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textActivate: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 13,
        color: '#454545',
        lineHeight: 16,
    }
})