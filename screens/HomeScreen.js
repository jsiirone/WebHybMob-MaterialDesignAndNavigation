import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function HomeScreen({ navigation }) {
/*
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons name="arrow-forward" size={24} onPress={() => navigation.navigate('Second')} />
            )
        })
    })
*/
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
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