import React, { useEffect } from "react";
import { StyleSheet, View, Text, BackHandler } from 'react-native';

export default function SecondScreen({ route, navigation }) {

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress',close)
        return () => {
            BackHandler.removeEventListener('hardwareBackPress',close)
        }
    }, [])

    const close = () => {
        navigation.goBack(null)
        return true
    }

    return (
        <View style={styles.container}>
            <Text>Second Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    }
});