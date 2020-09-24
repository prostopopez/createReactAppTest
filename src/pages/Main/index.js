import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import Input from '../../components/Input';

class MainPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text h1 style={styles.pageHeader}>Главная</Text>
                <Text style={styles.siteDescription}>Добро пожаловать в обучающую версию приложения от Black Perimeter</Text>
                <Input/>
            </View>
        )
    }
}

export default MainPage;

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    pageHeader: {
        fontSize: 33,
        fontWeight: '600',
        marginBottom: 30
    },
    siteDescription: {
        fontSize: 17
    }
});