import React, { useState , useEffect, useRef } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    I18nManager,
    Dimensions,
    FlatList,
    Platform,
    Share,
} from "react-native";
import {Container, Header, Right, Body, Left, Content } from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import { useDispatch, useSelector } from 'react-redux'
import {ScrollView} from "react-native-web";
import * as Animatable from "react-native-animatable";

const width	 		= Dimensions.get('window').width;
const height 		= Dimensions.get('window').height;
const isIOS  		= Platform.OS === 'ios';
const IS_IPHONE_X 	= (height === 812 || height === 896) && Platform.OS === 'ios';

const images = [
    require('../../assets/images/slider_1.png'),
    require('../../assets/images/slider_2.png'),
    require('../../assets/images/slider_3.png'),
    require('../../assets/images/slider_4.png'),
];

const providers = [
    {id: 0, name: 'مؤسسة كشتة', category: 'سفاري', image: require('../../assets/images/prov_1.jpg'), rate: 3, price: 500},
    {id: 1, name: 'مؤسسة كشتة', category: 'سفاري', image: require('../../assets/images/prov_2.jpg'), rate: 5, price: 500},
    {id: 2, name: 'مؤسسة كشتة', category: 'سفاري', image: require('../../assets/images/prov_3.jpg'), rate: 2, price: 500},
    {id: 3, name: 'مؤسسة كشتة', category: 'سفاري', image: require('../../assets/images/prov_4.jpg'), rate: 4, price: 500},
    {id: 4, name: 'مؤسسة كشتة', category: 'سفاري', image: require('../../assets/images/prov_3.jpg'), rate: 2, price: 500},
    {id: 5, name: 'مؤسسة كشتة', category: 'سفاري', image: require('../../assets/images/prov_4.jpg'), rate: 4, price: 500},
    {id: 6, name: 'مؤسسة كشتة', category: 'سفاري', image: require('../../assets/images/prov_3.jpg'), rate: 2, price: 500},
    {id: 7, name: 'مؤسسة كشتة', category: 'سفاري', image: require('../../assets/images/prov_4.jpg'), rate: 4, price: 500},
];

function Favs({navigation, route}) {

    function Item({ name , image , rate , index, category , price }) {

        return (
            <TouchableOpacity key={'_' + index} style={{ borderRadius: 10, height: 170, width: '47%', margin: 5, overflow: 'hidden',}} onPress={() => navigation.navigate('serviceDetails')}>
                <ImageBackground source={image} resizeMode={'cover'} style={{ height: 170, width: '100%', borderRadius: 10 }}>
                    <View style={[styles.overlay_black , styles.Width_100, { zIndex: 0, height: 200, position: 'absolute' }]} />
                    <View style={{ bottom: 0, position: 'absolute', height: 60, paddingHorizontal: 10 }}>
                        <Text style={[ styles.textBold, styles.text_White, styles.textSize_14, styles._alignText, styles.Width_100 ]}>{ name }</Text>
                        <Text style={[ styles.textBold, styles.text_orange, styles._alignText, styles.textRight ]}>{ price } { i18n.t('RS') } </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    }

    return (
        <Container>
            <ImageBackground source={require('../../assets/images/bg.png')} style={{ width, height: height-100, alignSelf: 'center', flexGrow: 1 }} resizeMode={'cover'}>
                <Header style={{ backgroundColor: 'transparent',  borderBottomWidth: 0 , paddingTop:10}} noShadow>
                    <Right style={[styles.directionRowCenter , { flex: 0}]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 50, height: 50, justifyCenter: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/white_back.png')} style={[ styles.transform , { width: 23, height: 23, marginTop: 10 }]} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <Text style={{ textAlign:  I18nManager.isRTL ? 'right' : 'left', color: '#fff', fontSize: 16, fontFamily: 'ArbFONTSBold', marginBottom: 5 }}>{ i18n.t('services') }</Text>
                    </Right>
                    <Body style={{ alignSelf: 'flex-start'}} />
                    <Left style={[styles.directionRowCenter , { flex: 0}]}>
                        <TouchableOpacity onPress={() => navigation.navigate('tripServices')} style={{ width: 50, height: 50, justifyCenter: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/add.png')} style={[{ width: 22, height: 22, marginTop: 10 }]} resizeMode={'contain'}/>
                        </TouchableOpacity>
                    </Left>
                </Header>

                <Content bounces={false} style={{ height: height*56/100, marginTop: 10, overflow: 'hidden', borderTopRightRadius: 50, }}>
                    <View style={{ width: '100%', padding: 15, borderTopRightRadius: 50, backgroundColor: '#fff' }}>
                        <FlatList
                            data={providers}
                            renderItem={({ item , index}) => <Item
                                name={item.name}
                                index={index}
                                image={item.image}
                                category={item.category}
                                rate={item.rate}
                                price={item.price}
                                id={item.id}
                            />}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            horizontal={false}
                            columnWrapperStyle={[styles.directionRowCenter]}
                            // extraData={isFav}
                        />
                    </View>
                </Content>
            </ImageBackground>
        </Container>
    )
}

export default Favs;
