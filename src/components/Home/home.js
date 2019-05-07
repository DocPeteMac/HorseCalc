import React, { Component } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, StatusBar, Modal, ScrollView, Image, AsyncStorage} from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'How To...',
        // headerStyle: { backgroundColor: '#151525' },
        headerTintColor: '#dfdfdf'
    };
    state = {
        startModal: false,
    };

    handleStartModal = () => {
        this.setState({
            startModal: !this.state.startModal ? true : false
        })
    };

    render() {
        return (
            <View style={styles.titleScreen}>
                <StatusBar barStyle='light-content'/>
                <Text style={{alignSelf: 'center', color: '#80f3ff', marginTop: 20, fontSize: 16, fontWeight: 'bold',}}>
                    Horse Weight
                </Text>
                <TouchableOpacity
                    onPress={this.handleStartModal}>
                    <View style={styles.horseMeasure}>
                        <Text style={{alignSelf: 'center', fontSize: 12}}>How to measure the weight?  <Image source={require('../../../assets/rArrowDark.png')} style={{width: 12, height: 12}}/></Text>
                    </View>
                </TouchableOpacity>
                <Modal
                    animationType='slide'
                    visible={this.state.startModal}
                >
                    <ScrollView style={{flex: 1, backgroundColor: '#151525'}}>
                        <StatusBar barStyle='light-content'/>
                        <TouchableOpacity
                            onPress={this.handleStartModal}>
                            <View style={styles.modalButton}>
                                <Text style={styles.closeButton}>BACK</Text>
                            </View>
                        </TouchableOpacity>
                            <View style={styles.heartGirth}>
                                <Text style={{alignSelf: 'center', color: '#9b9b9b', fontWeight: 'bold', marginBottom: 5}}>Heart Girth</Text>
                                <Image
                                    source={require('../../../assets/circumf.png')}
                                />
                                <Text style={{color: '#9b9b9b',marginLeft: 20, marginRight: 20, marginTop: 20}}>
                                    Measure around the midsection, immediately behind the elbow and withers.
                                </Text>
                            </View>
                        <View style={styles.line}><Text> </Text></View>
                        <View style={styles.bodyLen}>
                            <Text style={{alignSelf: 'center', color: '#9b9b9b',  fontWeight: 'bold', marginBottom: 5}}>Body Length</Text>
                            <Image
                                source={require('../../../assets/length.png')}
                            />
                            <Text style={{color: '#9b9b9b',marginLeft: 20, marginRight: 20, marginTop: 20}}>
                                Measure from the point of the shoulder to the point of the buttock (tuber ischii).
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={this.handleStartModal}>
                            <View style={styles.modalButton}>
                                <Text style={styles.closeButton}>BACK</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </Modal>
                <ScrollView style={{height: 230, paddingLeft: 20, paddingRight:20}}>
                    <Text style={{color: '#dddddd', fontSize: 12,textAlign: 'justify'}}>Why not just use a weight measure tape? {'\n'}The weight measure tape calculate only the heart girth, but we have obviously horses with the same heart girth and different body length. That is not just specific for different breeds. i.e. Quarter Horse - Warmblood Horse. It is even different within the same breed.{'\n\n'} A horse's weight can be an important health indicator. Knowing how much a horse weighs and whether it is currently gaining or losing weight, can help identify health issues. A horse may be under or over its optimal weight for a variety of reasons.{'\n'}</Text>
                    <Text style={{color: '#949494', fontSize: 12,textAlign: 'justify'}}>
                        The recommendation is to use the metric system for measurements. The calculation is using the heart girth by the power of 2. Just the fact that 1 inch = 2.54 cm makes a big difference in the result of the calculation. The goal is to get an estimation out in the field as close as it can be to the weight scale. The in-field weight calculation is still an estimation, but using "cm" gives a more precise weight estimation. {'\n'}
                    </Text>
                </ScrollView>
                <View style={{alignItems: 'center', marginTop: 20, marginBottom: 10}}>
                    <TouchableOpacity
                        onPress={ () => this.props.navigation.navigate('HorseName') }
                        style={styles.buttonBottomDark}>
                        <Text style={{fontSize:12,}}>Input Your Horse Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Tabs')}
                        style={styles.buttonBottomLight}>
                        <Text style={{fontSize:12, color: 'red',}}>Get the Horse Weight</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('Data')}
                        style={styles.buttonBottomDark}>
                        <Text style={{fontSize:12,}}>Show All New Data</Text>
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
    buttonBottomLight: {
        alignItems: 'center',
        backgroundColor: '#9ebdba',
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 20,
        width: '90%',
    },
    horseMeasure: {
        borderWidth: 1,
        borderColor: '#212b28',
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#988c03',
        margin: 20
    },

    modalButton: {
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#988c03',
        width: '40%',
        marginTop: 30,
        alignSelf: 'center'
    },
    closeButton: {
        color: '#ffffff',
        alignSelf: 'center',
        padding: 5,
    },
    heartGirth: {
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 5
    },
    line: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#606060',
        padding: 5,
        marginLeft: 20,
        marginRight: 20
    },
    bodyLen: {
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30
    },
});
export default HomeScreen;