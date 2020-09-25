import React, {Component, useState} from 'react';
import {CheckBox, View, Text, TouchableOpacity, Modal, TouchableHighlight, TextInput, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from "react-native-web";
import Svg, { Path } from "react-native-svg";

class Inputs extends Component {
    constructor() {
        super();

        this.state = {
            surname: '',
            name: '',
            isChecked: false,
            modalVisible: false
        };
    }

    handleSurname = (text) => {
        this.setState({surname: text})
    };

    handleName = (text) => {
        this.setState({name: text})
    };

    handleCheckbox = (value) => {
        this.setState({isChecked: value});
    }

    alertMessage = (surname, name, isChecked) => {
        if (isChecked) {
            alert(`Ваше имя: ${surname} ${name}`);
        } else {
            this.setState({modalVisible: true});
        }
    };

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    render() {
        const {
            surname,
            name,
            isChecked,
            modalVisible
        } = this.state;

        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           placeholder="Фамилия"
                           placeholderTextColor='gray'
                           onChangeText={this.handleSurname}/>
                <TextInput style={styles.input}
                           placeholder="Имя"
                           placeholderTextColor='gray'
                           onChangeText={this.handleName}/>
                <TouchableWithoutFeedback onPress={() => this.handleCheckbox(!isChecked)}>
                    <View style={styles.forCheckbox}>
                        <CheckBox
                            value={isChecked}
                            onValueChange={this.handleCheckbox}
                            style={styles.checkbox}
                            checkedColor='blue'
                        />
                        <Text style={styles.checkboxText}>Введённые данные подтверждаю</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.forSubmit}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                            () => this.alertMessage(surname, name, isChecked)
                        }>
                        <Text style={styles.submitButtonText}> Готово </Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    style={styles.modal}
                >
                    <View style={styles.modalBlock}>
                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!modalVisible);
                            }}
                            style={styles.modalCross}
                        >
                            <Svg fill={'white'} viewBox="0 0 512.001 512.001" style={styles.cross}>
                                <Path d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z" />
                            </Svg>
                        </TouchableHighlight>
                        <Text style={styles.insideModal}>Пожалуйста, подтвердите введённые данные</Text>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35
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
    forCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 45
    },
    checkbox: {
        width: 27,
        height: 27,
        marginRight: 15,
        borderRadius: 5
    },
    checkboxText: {
        fontSize: 15
    },
    forSubmit: {
        alignItems: 'center'
    },
    submitButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#0F73D2',
        padding: 10,
        width: 110,
        height: 40,
        borderRadius: 7,
        fontSize: 16
    },
    submitButtonText: {
        color: 'white',
    },
    modal: {
        alignSelf: 'stretch',
        alignItems: 'center',
        borderColor: 'transparent',
    },
    modalBlock: {
        position: 'absolute',
        bottom: 60,
        marginTop: 45,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#555',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        paddingBottom: 30,
        borderRadius: 7
    },
    insideModal: {
        color: 'white',
        lineHeight: 20
    },
    modalCross: {
        position: 'absolute',
        right: 15,
        top: 15,
    },
    cross: {
        width: 15,
        height: 15
    }
});

export default Inputs;