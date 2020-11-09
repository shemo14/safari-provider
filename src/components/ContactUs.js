import React, { useState , useEffect, useRef } from "react";import {	View,	Text,	Image,	TouchableOpacity,	ImageBackground,	I18nManager,	Dimensions,	Platform,	Linking, ActivityIndicator} from "react-native";import {Container, Header, Right, Body, Icon, Content, Card } from 'native-base'import styles from '../../assets/styles'import i18n from "../../locale/i18n";import COLORS from "../consts/colors";import {useSelector, useDispatch} from 'react-redux';import {getContacts} from '../actions';import * as Animatable from "react-native-animatable";const width	 		= Dimensions.get('window').width;const height 		= Dimensions.get('window').height;const IS_IPHONE_X 	= (height === 812 || height === 896) && Platform.OS === 'ios';function ContactUs({navigation}) {	const lang   	= useSelector(state => state.lang.lang);	const contacts  = useSelector(state => state.about.contacts);	const loader 	= useSelector(state => state.about.loader);	const dispatch = useDispatch();	function fetchData(){		dispatch(getContacts(lang))	}	useEffect(() => {		fetchData();		const unsubscribe = navigation.addListener('focus', () => {			fetchData();		});		return unsubscribe;	}, [navigation , loader]);	function renderLoader(){		if (loader === false){			return(				<View style={[styles.loading, styles.flexCenter, {height:'100%'}]}>					<ActivityIndicator size="large" color={COLORS.blue} style={{ alignSelf: 'center' }} />				</View>			);		}	}	return (		<Container>			{ renderLoader() }			<ImageBackground source={require('../../assets/images/bg.png')} style={{ width, height: 200, alignSelf: 'center', flexGrow: 1 }} resizeMode={'cover'}>				<Header style={{ backgroundColor: 'transparent',  borderBottomWidth: 0 }} noShadow>					<Right style={{ flex: 0, marginLeft: 10 }}>						<TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 50, height: 50, justifyCenter: 'center', alignItems: 'center' }}>							<Image source={require('../../assets/images/white_back.png')} style={[ styles.transform , { width: 27, height: 27, marginTop: 10 }]} resizeMode={'contain'}/>						</TouchableOpacity>						<Text style={{ textAlign:  I18nManager.isRTL ? 'right' : 'left', color: '#fff', fontSize: 20, fontFamily: 'ArbFONTSBold', marginBottom: 5 }}>{ i18n.t('contactUs') }</Text>					</Right>					<Body style={{ alignSelf: 'flex-start'}} />				</Header>				<View animation="zoomInDown" easing="ease-out" delay={700} style={[styles.tripHeaderShadow, { backgroundColor: '#fff' }]}>					<View style={[styles.tripHeaderImage, styles.textCenter, { alignItems: 'center', justifyCenter: 'center' }]}>						<Text style={{ textAlign: 'center', width: '100%', color: COLORS.blue, fontSize: 30, fontFamily: 'VIP_cartoon', marginTop: 5 }}>{ i18n.t('safari') }</Text>						<Text style={[styles.textSize_16, styles.text_black, styles.textBold, styles.textCenter, styles.Width_100]}>{ i18n.t('contactsIntro') }</Text>					</View>				</View>				<Content bounces={false} style={{ overflow: 'hidden', borderTopRightRadius: 50, marginTop: 50}}>					<View style={{ width: '100%', padding: 15, borderTopRightRadius: 50, backgroundColor: '#fff', minHeight: 110, }}>						<ImageBackground source={require('../../assets/images/map.png')} style={{ width: '100%', height: '100%' }}>							<Text style={[styles.textBold, styles.textSize_16, styles.textRight, styles.marginVertical_10, styles.text_blue, { marginTop: 40 }]}>{ i18n.t('contacts') }</Text>							<View animation="fadeInRight" easing="ease-out" delay={700} style={{width: '100%'}}>								<Card style={{ width: '100%', padding: 10, borderRadius: 10 }}>									{										contacts && contacts.phone ?											<TouchableOpacity onPress={() => Linking.openURL('tel:' + contacts.phone )} style={{ flexDirection: 'row', padding: 5, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd', height: 45 }}>												<Image source={require('../../assets/images/phone_call.png')} resizeMode={'contain'} style={{ width: 25, height: 25, marginHorizontal: 15 }}/>												<Text style={[styles.textRegular, styles.textRight, { color: '#999', fontSize: 16, marginTop: 5 }]}>{ contacts.phone }</Text>											</TouchableOpacity> : null									}									{										contacts && contacts.email ?											<TouchableOpacity onPress={() => Linking.openURL('mailto:' + contacts.email)} style={{ flexDirection: 'row', padding: 5, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd', height: 45 }}>												<Image source={require('../../assets/images/email.png')} resizeMode={'contain'} style={{ width: 25, height: 25, marginHorizontal: 15 }}/>												<Text style={[styles.textRegular, styles.textRight, { color: '#999', fontSize: 16, marginTop: 5 }]}>{ contacts.email }</Text>											</TouchableOpacity> : null									}									{										contacts && contacts.whatsapp ?											<TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?text=hello&phone=' + contacts.whatsapp)} style={{ flexDirection: 'row', padding: 5, alignItems: 'center', height: 45 }}>												<Image source={require('../../assets/images/blue_whatsapp.png')} resizeMode={'contain'} style={{ width: 25, height: 25, marginHorizontal: 15 }}/>												<Text style={[styles.textRegular, styles.textRight, { color: '#999', fontSize: 16, marginTop: 5 }]}>{ contacts.whatsapp }</Text>											</TouchableOpacity> : null									}								</Card>							</View>							<Text style={[styles.textBold, styles.textSize_16, styles.textRight, styles.marginVertical_10, styles.text_blue ]}>{ i18n.t('socials') }</Text>							<View animation="fadeInLeft" easing="ease-out" delay={700} style={{width: '100%'}}>								<Card style={{ width: '100%', padding: 10, borderRadius: 10 }}>									{										contacts && contacts.socials ?											contacts.socials.map((social, i) => (												<TouchableOpacity key={i} onPress={() => Linking.openURL(social.url)} style={{ flexDirection: 'row', padding: 5, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd', height: 45 }}>													<Image source={{ uri: social.icon }} resizeMode={'contain'} style={{ width: 25, height: 25, marginHorizontal: 15 }}/>													<Text style={[styles.textRegular, styles.textRight, { color: '#999', fontSize: 16, marginTop: 5 }]}>{ social.site_name }</Text>												</TouchableOpacity>											))										: null									}								</Card>							</View>						</ImageBackground>					</View>				</Content>			</ImageBackground>		</Container>	)}export default ContactUs;