import React, { Component } from 'react';
import {Text, View, AsyncStorage, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image, Alert} from 'react-native';


class HorseDataScreen extends Component {
    constructor(props){
        super(props);
        this.state= {
            horseName : '',
            horseAge : '',
        };
    };

    horseNameValue = (value) => {
        this.setState({horseName : value})
    };

    horseAgeValue = (value) => {
      this.setState({horseAge: value})
    };

    saveData = () => {
            AsyncStorage.multiSet([['horseName', this.state.horseName], ['horseAge', this.state.horseAge]]);
            this.setState({ horseName: '' });
            this.setState({ horseAge: '' });
            Alert.alert('Storage Message', 'Data are stored');
    };

    render() {
        return (
            <View style={styles.titleScreen}>
                <ImageBackground source={require('../../../assets/runingHorseXRb.png')} style={{width: '100%', height: '100%',}}>
                    <Text style={{alignSelf: 'center', color: '#b3eaf6', fontSize: 20, fontWeight: 'bold', marginVertical: 20,}}>Horse Data</Text>
                    <View style={{flexDirection: 'row', marginTop: 20, paddingHorizontal: 20,}}>
                        <Text style={{color: '#dfdfdf', width: '40%', fontSize: 12,}}>Horse Name: </Text>
                        <View style={{backgroundColor: '#7dabb7', borderRadius: 3,}}>
                            <TextInput
                                style={{width: 150, paddingLeft: 20,}}
                                placeholder='Name'
                                returnKeyType='done'
                                clearTextOnFocus={true}
                                keyboardAppearance='dark'
                                autoCorrect={false}
                                textContentType='name'
                                value={this.state.horseName}
                                onChangeText={this.horseNameValue}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20, paddingHorizontal: 20,}}>
                        <Text style={{color: '#dfdfdf', width: '40%', fontSize: 12,}}>Horse Age: </Text>
                        <View style={{backgroundColor: '#7dabb7',  borderRadius: 3,}}>
                            <TextInput
                                style={{width: 150, paddingLeft: 20, borderRadius: 3,}}
                                placeholder='Age'
                                returnKeyType='done'
                                keyboardType='number-pad'
                                clearTextOnFocus={true}
                                // onFocus={() => this.setState({ horseAge: '' })}
                                keyboardAppearance='dark'
                                onChangeText={this.horseAgeValue}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={this.saveData}
                        style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Store Data</Text>
                        <Image source={require('../../../assets/storeDataWhite.png')} style={{width: 18, height: 15, marginTop: 5}}/>
                    </TouchableOpacity>
                    <View style={{flex:2, justifyContent: 'flex-end', marginBottom: 10, alignItems: 'center',}}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Tabs')}
                            style={styles.buttonBottomDark}>
                            <Text style={{fontSize:12,}}>Get the Horse Weight   <Image source={require('../../../assets/kgLight.png')} style={{width: 15, height: 15}}/></Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleScreen: {
        flex:1,
        backgroundColor: '#0f0f34',
    },
    screenContent: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonBottomDark: {
        alignItems: 'center',
        backgroundColor: '#6c95a1',
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 20,
        width: '90%',
    },
    saveButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 70,
        backgroundColor: '#979346',
        width: 91,
        height: 91,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        shadowColor: '#ffffff',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 12,
    },
});


export default HorseDataScreen;