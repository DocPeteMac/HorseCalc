import React, { Component } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, AsyncStorage, ScrollView } from 'react-native';


class DataScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            horseNameValue: '',
            horseAgeValue: '',
            bCirVal: '',
            bLenVal: '',
            hKgVal: '',
            hLbsVal: '',
            hXylaVal: '',
            hDetoVal: '',
            hButeVal: '',
            hBanaVal: '',
            hDexaVal: '',
            hAceVal: '',
            hButarVal: '',
            bCirImpVal: '',
            bLenImpVal: '',
            hLbsImpVal: '',
            hXylaImpVal: '',
            hDetoImpVal: '',
            hButeImpVal: '',
            hBanamImpVal: '',
            hDexImpVal: '',
            hAceImpVal: '',
            hButarImpVal: '',
        }
    };

    getAllData = () => {
        AsyncStorage.getItem('horseName').then((value) => this.setState({horseNameValue: value}));
        AsyncStorage.getItem('horseAge').then((value) => this.setState({horseAgeValue: value}));
        AsyncStorage.getItem('hKg').then((value) => this.setState({hKgVal: value}));
        AsyncStorage.getItem('hLbs').then((value) => this.setState({hLbsVal: value}));
        AsyncStorage.getItem('hXyla').then((value) => this.setState({hXylaVal: value}));
        AsyncStorage.getItem('hDeto').then((value) => this.setState({hDetoVal: value}));
        AsyncStorage.getItem('bCirImp').then((value) => this.setState({bCirImpVal: value}));
        AsyncStorage.getItem('bLenImp').then((value) => this.setState({bLenImpVal: value}));
        AsyncStorage.getItem('hLbsImp').then((value) => this.setState({hLbsImpVal: value}));
        AsyncStorage.getItem('hXylaImp').then((value) => this.setState({hXylaImpVal: value}));
        AsyncStorage.getItem('hDetoImp').then((value) => this.setState({hDetoImpVal: value}));
        AsyncStorage.getItem('hButeImp').then((value) => this.setState({hButeImpVal: value}));
        AsyncStorage.getItem('hBanamImp').then((value) => this.setState({hBanamImpVal: value}));
        AsyncStorage.getItem('hDexImp').then((value) => this.setState({hDexImpVal: value}));
        AsyncStorage.getItem('hAceImp').then((value) => this.setState({hAceImpVal: value}));
        AsyncStorage.getItem('hButarImp').then((value) => this.setState({hButarImpVal: value}));
        AsyncStorage.getItem('hBute').then((value) => this.setState({hButeVal: value}));
        AsyncStorage.getItem('hBanam').then((value) => this.setState({hBanamVal: value}));
        AsyncStorage.getItem('hDex').then((value) => this.setState({hDexVal: value}));
        AsyncStorage.getItem('hAce').then((value) => this.setState({hAceVal: value}));
        AsyncStorage.getItem('hButar').then((value) => this.setState({hButarVal: value}));
    };

    todaysDate = () => {
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        return `${month} / ${date} / ${year}`
    };

    timeStampNow = () => {
        return Date.now();
    };


    render() {

        return (
            <View style={styles.titleScreen}>
                <View style={styles.screenContent}>
                    <Text style={styles.description}>Today's Date: </Text>
                    <Text style={styles.varNameData}>{ this.todaysDate() }</Text>
                </View>
                <View style={styles.screenContent}>
                    <Text style={styles.description}>Horse Name:</Text>
                    <Text style={styles.varNameData}>{ this.state.horseNameValue }</Text>
                </View>
                <View style={styles.screenContent}>
                    <Text style={styles.description}>Horse Age: </Text>
                    <Text style={styles.varAgeData}>{ this.state.horseAgeValue }</Text>
                    <Text style={styles.endDescription}>years</Text>
                </View>
                <View style={styles.screenContent}>
                    <Text style={styles.measuredUnits}>Measured in:</Text>
                    <Text style={styles.titleSepart}>metric</Text>
                    <Text style={styles.titleSepart}>imperial</Text>
                </View>
                <View style={styles.screenContentKg}>
                    <Text style={styles.description}>Weight in kg: </Text>
                    <Text style={styles.varDataMetric}>{ this.state.hKgVal }</Text>
                    <Text style={styles.varDataImperialEmpty}> </Text>
                    <Text style={styles.endDescription}>kg</Text>
                </View>
                <View style={styles.screenContentLbs}>
                    <Text style={styles.description}>Weight in lbs: </Text>
                    <Text style={styles.varDataMetric}>{ this.state.hLbsVal }</Text>
                    <Text style={styles.varDataImperial}>{ this.state.hLbsImpVal }</Text>
                    <Text style={styles.endDescription}>lbs</Text>
                </View>
                <ScrollView>
                    <View style={styles.screenContentXzla}>
                        <Text style={styles.description}>Xylazine: </Text>
                        <Text style={styles.varDataMetric}>{ this.state.hXylaVal }</Text>
                        <Text style={styles.varDataImperial}>{ this.state.hXylaImpVal }</Text>
                        <Text style={styles.endDescription}>ml</Text>
                    </View>
                    <View style={styles.screenContent}>
                        <Text style={styles.description}>Detomidine: </Text>
                        <Text style={styles.varDataMetric}>{ this.state.hDetoVal }</Text>
                        <Text style={styles.varDataImperial}>{ this.state.hDetoImpVal }</Text>
                        <Text style={styles.endDescription}>ml</Text>
                    </View>
                    <View style={styles.screenContent}>
                        <Text style={styles.description}>Acepromazine: </Text>
                        <Text style={styles.varDataMetric}>{ this.state.hAceVal }</Text>
                        <Text style={styles.varDataImperial}>{ this.state.hAceImpVal }</Text>
                        <Text style={styles.endDescription}>ml</Text>
                    </View>
                    <View style={styles.screenContent}>
                        <Text style={styles.description}>Butarphanol: </Text>
                        <Text style={styles.varDataMetric}>{ this.state.hButarVal }</Text>
                        <Text style={styles.varDataImperial}>{ this.state.hButarImpVal }</Text>
                        <Text style={styles.endDescription}>ml</Text>
                    </View>
                    <View style={styles.screenContent}>
                        <Text style={styles.description}>Bute: </Text>
                        <Text style={styles.varDataMetric}>{ this.state.hButeVal }</Text>
                        <Text style={styles.varDataImperial}>{ this.state.hButeImpVal }</Text>
                        <Text style={styles.endDescription}>ml</Text>
                    </View>
                    <View style={styles.screenContent}>
                        <Text style={styles.description}>Banamine: </Text>
                        <Text style={styles.varDataMetric}>{ this.state.hBanamVal }</Text>
                        <Text style={styles.varDataImperial}>{ this.state.hBanamImpVal }</Text>
                        <Text style={styles.endDescription}>ml</Text>
                    </View>
                    <View style={styles.screenContentLast}>
                        <Text style={styles.description}>Dexium: </Text>
                        <Text style={styles.varDataMetric}>{ this.state.hDexVal }</Text>
                        <Text style={styles.varDataImperial}>{ this.state.hDexImpVal }</Text>
                        <Text style={styles.endDescription}>daily</Text>
                    </View>
                </ScrollView>
                <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', position: 'absolute', bottom: 1}}>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('HorseName')}
                        style={styles.buttonBottomLight}>
                        <Text style={{fontSize:10,}}>Horse Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> this.getAllData()}
                        style={styles.buttonBottomyellow}>
                        <Text style={{fontSize:10,}}>Get Last Data</Text>
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
    currentDate: {
        paddingTop: 20,
        paddingHorizontal: 20,
        textAlign: 'right',
        color: '#b3eaf6',
        fontSize: 10,
    },
    screenContent: {
        flexDirection: 'row',
        marginTop: 15,
        marginHorizontal: 20,
    },
    screenContentXzla: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 20,
    },
    screenContentLast: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 25,
        marginHorizontal: 20,
    },
    screenContentLbs: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    screenContentKg: {
        flexDirection: 'row',
        marginTop: 8,
        marginHorizontal: 20,
    },
    buttonBottomyellow: {
        alignItems: 'center',
        backgroundColor: '#9da549',
        padding: 4,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#e3e3e3',
        width: '45%',
        fontSize:10,
    },
    buttonBottomLight: {
        alignItems: 'center',
        backgroundColor: '#9ebdba',
        padding: 4,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e3e3e3',
        width: '45%',
        fontSize:10,
    },
    varNameData: {
        color: '#dfdfdf',
        width: '40%',
        backgroundColor: '#222451',
        paddingLeft: 10,
        fontSize: 10,
    },
    varAgeData: {
        color: '#dfdfdf',
        width: '40%',
        backgroundColor: '#222451',
        paddingLeft: 10,
        fontSize: 10,
    },
    description: {
        color: '#b3eaf6',
        width: '40%',
        fontSize: 10,
    },
    measuredUnits: {
        color: '#5d7884',
        width: '40%',
        fontSize: 10,
    },
    varDataMetric: {
        color: '#dfdfdf',
        width: '20%',
        backgroundColor: '#222451',
        paddingLeft: 10,
        fontSize: 10,
    },
    varDataImperial: {
        color: '#dfdfdf',
        width: '20%',
        backgroundColor: '#222451',
        paddingLeft: 10,
        marginLeft: 5,
        fontSize: 10,
    },
    varDataImperialEmpty: {
        color: '#dfdfdf',
        width: '20%',
        paddingLeft: 10,
        marginLeft: 5,
        fontSize: 10,
    },
    titleSepart: {
        color: '#5d7884',
        width: '20%',
        textDecorationLine: 'underline',
        marginLeft: 5,
        fontSize: 9,
    },
    endDescription: {
        paddingLeft: 10,
        color: '#b3eaf6',
        fontSize: 10,
    },
});
export default DataScreen;