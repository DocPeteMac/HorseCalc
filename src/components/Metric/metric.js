import React, { Component } from 'react';
import {
    Text,
    View,
    AsyncStorage,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Slider,
    Modal,
    ScrollView,
    Alert
} from 'react-native';

class MetricScreen extends Component {
    state={
        bCir: '',
        bLen: '',
        buteValue: 1,
        banamineValue: 0.5,
        xylaValue: 0.19,
        detoValue: 0.035,
        aceValue: 2,
        butarValue: 0.1,
        startModal: false,
    };

    saveMetricMeasureData= () => {
        AsyncStorage.multiSet([
            ['bCir', this.state.bCir],
            ['bLen', this.state.bLen],
            ['hKg', this.weightKG()],
            ['hLbs', this.weightLbs()],
            ['hXyla', this.xylazine()],
            ['hDeto', this.detomidine()],
            ['hBute', this.bute()],
            ['hBanam', this.banamine()],
            ['hButar', this.butar()],
            ['hDex', this.dexa()],
            ['hAce', this.ace()],
        ]);
        Alert.alert('Storage Message', 'Data are stored');
    };

    onBcirInput= (value) => {
        this.setState({
            bCir: value
        })
    };

    onBlenInput= (value) => {
        this.setState({
            bLen: value
        })
    };

    handleStartModal = () => {
        this.setState({startModal: !this.state.startModal ? true : false})
    };

    weightKG = () => {
        return (((this.state.bCir * this.state.bCir) * this.state.bLen) / 11877.4).toFixed(0);
    };

    weightLbs = () => {
        return (this.weightKG() * 2.204622622).toFixed(0);
    };

    bute = () => {
        return (this.weightLbs() * (this.state.buteValue / 200)).toFixed(1);
    };

    banamine = () => {
        return (this.weightLbs() * (this.state.banamineValue / 50)).toFixed(1);
    };

    xylazine = () => {
        return (this.weightLbs() * (this.state.xylaValue / 100)).toPrecision(3);
    };

    detomidine = () => {
        return (this.weightLbs() * (this.state.detoValue / 100)).toPrecision(2);
    };

    ace = () => {
        return ((this.weightLbs() / 100) * (this.state.aceValue / 10)).toPrecision(2)
    };

    butar = () => {
        return (this.weightKG() * (this.state.butarValue / 100)).toPrecision(2);
    };

    dexa = () => {
        return '5 ml'
    };

    render() {
            let kg = this.weightKG();
            let lbs = this.weightLbs();
            let phButa = this.bute();
            let bana = this.banamine();
            let dexa = this.dexa();
            let xyla = this.xylazine();
            let deto = this.detomidine();
            let butarPha = this.butar();
            let aceProm = this.ace();
            let xylaDosis = this.state.xylaValue.toPrecision(3);
            let detoDosis = this.state.detoValue.toPrecision(2);

        return (
            <View style={styles.titleScreen}>
                <View>
                    <Text style={{alignSelf: 'center', color: '#80f3ff', padding: 10, fontWeight: 'bold', fontSize: 18,}}>
                        MEASUREMENT IN cm
                    </Text>
                    <View style={styles.inputCir}>
                        <Text style={{width: '50%', color: '#94c9d5', fontSize: 16}}>Heart Girth: </Text>
                        <TextInput
                            style={styles.cInput}
                            onChangeText={this.onBcirInput}
                            value={this.state.bCir}
                            placeholder='Circumference here'
                            keyboardType='number-pad'
                            returnKeyType='done'
                            onFocus={() => this.setState({bCir: ''})}
                            keyboardAppearance='dark'
                        />
                        <Text style={{paddingLeft: 5, color: '#ff8200'}}> cm</Text>
                    </View>
                    <View style={{flexDirection: 'row', paddingLeft: 20,}}>
                        <Text style={{width: '50%', color: '#94c9d5', fontSize: 16}}>Body Length: </Text>
                        <TextInput
                            style={styles.lInput}
                            onChangeText={this.onBlenInput}
                            value={this.state.bLen}
                            placeholder='Length here'
                            keyboardType='number-pad'
                            returnKeyType='done'
                            onFocus={() => this.setState({bLen: ''})}
                            keyboardAppearance='dark'
                        />
                        <Text style={{paddingLeft: 5, color: '#ff8200'}}> cm</Text>
                    </View>
                </View>
                    <View style={{flexDirection: 'row', paddingLeft: 20, marginTop: 40,}}>
                        <Text style={styles.hWeight}>
                            Horse weight:</Text>
                        <Text style={{color: '#151525', backgroundColor: '#94c9d5', width: '30%', fontSize: 16, paddingLeft: 10, borderWidth: 2, borderColor: '#ff2c00',}}>
                            {lbs}
                        </Text>
                        <Text style={{color: '#94c9d5', paddingLeft: 5}}> lbs</Text>
                </View>
                <Text style={{color: '#94c9d5', paddingLeft: 20, marginBottom: 5, fontSize: 12,}}>
                    Weight in kg: {kg}
                </Text>
                <View style={styles.linieLightBlue}></View>
                <ScrollView>
                    <View style={{backgroundColor: '#202258'}}>
                        <View style={styles.medStyle}>
                            <Text style={{color: '#94c9d5', width: '55%', fontSize: 12}}>
                                Bute <Text style={{fontSize: 9}}>(i.v.)</Text>:</Text>
                            <Text style={{color: '#94c9d5',  fontSize: 14, backgroundColor: '#2b2b26', width: '25%', paddingLeft: 10,}}>
                                {phButa}
                            </Text>
                            <Text style={{paddingLeft: 5, color: '#94c9d5',}}> ml</Text>
                        </View>
                    </View>
                    <View style={styles.medStyle}>
                        <Text style={{color: '#94c9d5', width: '55%', fontSize: 12}}>
                            Banamine <Text style={{fontSize: 9}}>(i.m., i.v.)</Text>:</Text>
                        <Text style={{color: '#94c9d5',  fontSize: 14, backgroundColor: '#2b2b26', width: '25%', paddingLeft: 10,}}>
                            {bana}
                        </Text>
                        <Text style={{paddingLeft: 5, color: '#94c9d5',}}> ml</Text>
                    </View>
                    <View style={{backgroundColor: '#202258'}}>
                        <View style={styles.medStyleDexa}>
                            <Text style={{color: '#94c9d5', width: '55%', fontSize: 12}}>
                                Dexium <Text style={{fontSize: 9}}>(i.m., i.v.):</Text>:</Text>
                            <Text style={{color: '#94c9d5',  fontSize: 14, backgroundColor: '#2b2b26', width: '25%', paddingLeft: 10,}}>
                                {dexa}
                            </Text>
                            <Text style={{paddingLeft: 5, color: '#94c9d5',}}> daily</Text>
                        </View>
                    </View>
                    <View style={styles.medStyle}>
                        <Text style={{color: '#94c9d5', width: '55%', fontSize: 12}}>
                            Xylazine:<Text style={{fontSize: 9}}>(i.v.)</Text>:</Text>
                        <Text style={{color: '#94c9d5',  fontSize: 14, backgroundColor: '#2b2b26', width: '25%', paddingLeft: 10,}}>
                            {xyla}
                        </Text>
                        <Text style={{paddingLeft: 5, color: '#94c9d5',}}> ml</Text>
                    </View>
                    <View style={{backgroundColor: '#202258'}}>
                        <View style={styles.medStyle}>
                            <Text style={{color: '#94c9d5', width: '55%', fontSize: 12}}>
                                Detomidine <Text style={{fontSize: 9}}>(i.v., i.m.)</Text>:</Text>
                            <Text style={{color: '#94c9d5', fontSize: 14, backgroundColor: '#2b2b26', width: '25%', paddingLeft: 10,}}>
                                {deto}
                            </Text>
                            <Text style={{paddingLeft: 5, color: '#94c9d5',}}> ml</Text>
                        </View>
                    </View>
                    <View style={styles.medStyle}>
                        <Text style={{color: '#94c9d5', width: '55%', fontSize: 12}}>
                            Acepromazine <Text style={{fontSize: 9}}>(i.v., i.m.)</Text>:</Text>
                        <Text style={{color: '#94c9d5', fontSize: 14, backgroundColor: '#2b2b26', width: '25%', paddingLeft: 10,}}>
                            {aceProm}
                        </Text>
                        <Text style={{paddingLeft: 5, color: '#94c9d5',}}> ml</Text>
                    </View>
                    <View style={{backgroundColor: '#202258'}}>
                        <View style={styles.medStyle}>
                            <Text style={{color: '#94c9d5', width: '55%', fontSize: 12}}>
                                Butarphanol <Text style={{fontSize: 9}}>(i.v., i.m.)</Text>:</Text>
                            <Text style={{color: '#94c9d5', fontSize: 14, backgroundColor: '#2b2b26', width: '25%', paddingLeft: 10,}}>
                                {butarPha}
                            </Text>
                            <Text style={{paddingLeft: 5, color: '#94c9d5',}}> ml</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 5}}>
                    <TouchableOpacity
                        onPress={this.handleStartModal}
                        style={{borderWidth: 1, borderRadius: 5, borderColor: '#d2c603', width: '40%', alignSelf: 'center',}}>
                        <Text style={{color: '#d2c603', fontSize: 10, alignSelf: 'center', padding: 6,}}>Set Sedation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.saveMetricMeasureData}
                        style={{borderWidth: 1, borderRadius: 5, borderColor: '#b3eaf6', width: '40%', alignSelf: 'center',}}>
                        <Text style={{color: '#b3eaf6', fontSize: 10, alignSelf: 'center', padding: 6,}}>Store Data</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType='slide'
                    visible={this.state.startModal}>
                    <View style={{flex: 1, backgroundColor: '#151525'}}>
                        <Text style={{color: '#bdf3ff', marginTop: 30, fontSize: 12, paddingHorizontal: 15, textAlign: 'justify',}}>
                            The sedation dosage can be adjusted here. The default is 1.9 ml (Xylazine)/ 1000 lbs and 0.35 ml (Detomidine)/ 1000 lbs for a Quarter Horse (Concentration: Xylazine 100 mg/ ml and Detomidine 10 mg/ ml). Slide left to decrease and slide to the right to increase the dosage.
                        </Text>
                        <View style={{flexDirection: 'row', paddingLeft: 20, marginTop: 20}}>
                            <Text style={{color: '#94c9d5', width: '50%', fontWeight: 'bold', fontSize: 16,}}>
                                Xylazine:
                            </Text>
                            <Text style={{color: '#94c9d5', backgroundColor: '#2b2b26', width: '30%', fontSize: 16, paddingLeft: 10,}}>
                                {xyla}
                            </Text>
                            <Text style={{paddingLeft: 5, color: '#94c9d5'}}> ml</Text>
                        </View>
                        <Text style={{marginLeft:20, marginRight: 20, marginTop: 20, color: '#9d9d9d'}}>Dosage: {xylaDosis} ml/ 100 lbs</Text>
                        <Slider
                            style={{justifyContent: 'center', alignItems: 'stretch',
                                backgroundColor: '#46717d',
                                borderRadius: 5,
                                marginLeft: 18,
                                marginRight: 18,}}
                            step={0.06}
                            value={this.state.xylaValue}
                            minimumValue={0.15}
                            maximumValue={0.21}
                            onValueChange={(val) => this.setState({xylaValue: val})}
                            minimumTrackTintColor={'#ff4e20'}
                            maximumTrackTintColor={'#ffc9b1'}
                        />
                        <View style={{flexDirection: 'row', paddingLeft: 20, marginTop: 50}}>
                            <Text style={{color: '#94c9d5', width: '50%', fontWeight: 'bold', fontSize: 16,}}>
                                Detomidine: </Text>
                            <Text style={{color: '#94c9d5', backgroundColor: '#2b2b26', width: '30%', fontSize: 16, paddingLeft: 10,}}>
                                {deto}
                            </Text>
                            <Text style={{paddingLeft: 5, color: '#94c9d5'}}> ml</Text>
                        </View>
                        <Text style={{marginLeft:20, marginRight: 20, marginTop: 20, color: '#9d9d9d'}}>Dosage: {detoDosis} ml/ 100 lbs</Text>
                        <Slider
                            style={{justifyContent: 'center', alignItems: 'stretch',
                                backgroundColor: '#46717d',
                                borderRadius: 5,
                                marginLeft: 18,
                                marginRight: 18,}}
                            step={0.1}
                            value={this.state.detoValue}
                            minimumValue={0.02}
                            maximumValue={0.05}
                            onValueChange={(val) => this.setState({detoValue: val})}
                            minimumTrackTintColor={'#ff4e20'}
                            maximumTrackTintColor={'#ffc9b1'}
                        />
                        <View style={{alignItems: 'center', marginTop: 20,}}>
                            <TouchableOpacity
                                onPress={this.handleStartModal}
                                style={{width: '60%', marginTop: 20, borderWidth: 1, borderRadius: 5, borderColor: '#d2c603', marginHorizontal: 20, alignItems: 'center',}}>
                                <Text style={{fontSize: 12, color: '#d2c603', alignSelf: 'center', padding: 8,}}>Back To Horse Weight</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   titleScreen: {
       flex: 1,
       backgroundColor: '#0f0f34',
   },
    cInput: {
        backgroundColor: '#d8eaed',
        borderRadius: 3,
        width: '30%',
        fontSize: 16,
        paddingLeft: 10,
    },
    lInput: {
        // height: 20,
        backgroundColor: '#d8eaed',
        borderRadius: 3,
        width: '30%',
        fontSize: 16,
        paddingLeft: 10,
    },
    hWeight: {
        color: '#94c9d5',
        width: '50%',
        fontSize: 16,
        borderRadius: 3,
    },
    inputCir: {
        flexDirection: 'row',
        paddingBottom: 20,
        paddingLeft: 20,
        paddingTop: 20
    },
    linieLightBlue: {
        height: 1,
        backgroundColor: '#b3eaf6',
        width: '80%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    medStyle: {
        flexDirection: 'row',
        paddingLeft: 20,
        // marginTop: 10,
        paddingVertical: 8,
        borderRadius: 3,
    },
    medStyleDexa: {
        flexDirection: 'row',
        paddingLeft: 20,
        // marginTop: 10,
        paddingTop: 8,
        paddingBottom: 2,
        borderRadius: 3,
    },
});


export default MetricScreen;