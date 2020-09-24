import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainPage from './src/pages/Main';

export default function App() {
    return (
        <View style={styles.container}>
            <MainPage/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
