import React, { Component } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, StatusBar, Image, ScrollView} from 'react-native';
import { SQLite } from 'expo';

const db = SQLite.openDatabase('../../../database/equine.db');

class StartScreen extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS horseData(id INTEGER PRIMARY KEY AUTOINCREMENT, horseName TEXT, horseAge INTEGER, horseOwner TEXT, date INTEGER , epocTime INTEGER)'
            );
        })
    }

    static navigationOptions = {
        title: 'Horse Data Calculator',
        // headerStyle: { backgroundColor: '#151525' },
        headerTintColor: '#dfdfdf'
    };

    render() {
        return (
            <View style={styles.titleScreen}>
                <StatusBar barStyle='light-content'/>
                <View style={{flex: 1,}}>
                    <Text style={{color: '#80f3ff', marginTop: 30, fontSize: 16, alignSelf: 'center', textAlign: 'center'}}>
                        The Importance Of The Horse Weight
                    </Text>
                    <ScrollView>
                        <Text style={{color: '#ffffff', marginTop: 20, paddingHorizontal: 30, fontSize: 12,textAlign: 'justify'}}>
                            Incorrect weight estimation may result in over-dosing or under-dosing the horse. This App can calculate and store all your horse data, needed for feed calculation, dosages for de-wormers, anti-biotics, other medication and more.
                        </Text>
                        <Text style={{color: '#da5540', marginTop:10, paddingHorizontal: 30, paddingBottom: 5, fontSize: 12,textAlign: 'justify'}}>
                            This calculator is only intended for use as an estimation tool. The developer is not responsible for any issues arising from the use of this calculator or for any inaccuracies in the information it provides. Always, when in doubt, please consult with your veterinarian professionals. The short list of medication within that App is intend to be a quick in-field overview for veterinarian pro-fessionals and possibly to help within the communication with the horse owner.
                        </Text>
                    </ScrollView>
                </View>
                <View style={{alignItems: 'center', marginBottom: 10, marginTop: 10,}}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={styles.buttonBottomDark}>
                        <Text>Start Here   <Image source={require('../../../assets/start.png')} style={{width: 15, height: 17}}/></Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleScreen: {
        flex:1,
        backgroundColor: '#0f0f34',
    },
    buttonBottomDark: {
        alignItems: 'center',
        backgroundColor: '#6c95a1',
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
    },
    buttonBottomLight: {
        alignItems: 'center',
        backgroundColor: '#9ebdba',
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
    },
});
export default StartScreen;