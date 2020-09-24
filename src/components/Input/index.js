import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

class Input extends Component {
    state = {
        surname: '',
        name: ''
    };
    handleSurname = (text) => {
        this.setState({surname: text})
    };
    handleName = (text) => {
        this.setState({name: text})
    };
    login = (surname, name) => {
        alert(`Ваше имя: ${surname} ${name}`);
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Почта"
                           placeholderTextColor='gray'
                           autoCapitalize="none"
                           onChangeText={this.handleSurname}/>

                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Пароль"
                           placeholderTextColor='gray'
                           autoCapitalize="none"
                           onChangeText={this.handleName}/>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.login(this.state.surname, this.state.name)
                    }>
                    <Text style={styles.submitButtonText}> Подтвердить </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Input;

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
    },
    input: {
        marginTop: 15,
        height: 45,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 15
    },
    submitButton: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
});