import React, { useState , useEffect, useRef } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    I18nManager,
    Dimensions,
    KeyboardAvoidingView
} from "react-native";
import {
    Container,
    Content,
    Form,
    Input,
    Textarea,
    Header,
    Right,
    Left,
    Body,
    CheckBox,
    Icon,
    Item,
    Label
} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import COLORS from "../consts/colors";
import { useDispatch, useSelector } from 'react-redux'

const width		 	= Dimensions.get('window').width;
const height	 	= Dimensions.get('window').height;

function AddService({navigation, route}) {
    const [userImage, setUserImage] = useState(null);
    const [base64, setBase64] = useState('');

    const [servName, setServName] = useState('');
    const [servNameStatus, setServNameStatus] = useState(0);
    const [servNameEn, setServNameEn] = useState('');
    const [servNameEnStatus, setServNameEnStatus] = useState(0);
    const [whatsNum, setWhatsNum] = useState('');
    const [whatsNumStatus, setWhatsNumStatus] = useState(0);
    const [price, setPrice] = useState('');
    const [priceStatus, setPriceStatus] = useState(0);
    const [desc, setDesc] = useState('');
    const [descStatus, setDescStatus] = useState(0);
    const [descEn, setDescEn] = useState('');
    const [descEnStatus, setDescEnStatus] = useState(0);

    function activeInput(type) {
        if (type === 'servName' || servName !== '') setServNameStatus(1);
        if (type === 'servNameEn' || servNameEn !== '') setServNameEnStatus(1);
        if (type === 'whatsNum' || whatsNum !== '') setWhatsNumStatus(1);
        if (type === 'price' || price !== '') setPriceStatus(1);
        if (type === 'desc' || desc !== '') setDescStatus(1);
        if (type === 'descEn' || descEn !== '') setDescEnStatus(1);
    }

    function unActiveInput(type) {
        if (type === 'servName' && servName === '') setServNameStatus(0);
        if (type === 'servNameEn' && servNameEn === '') setServNameEnStatus(0);
        if (type === 'whatsNum' && whatsNum === '') setWhatsNumStatus(0);
        if (type === 'price' && price === '') setPriceStatus(0);
        if (type === 'desc' && desc === '') setDescStatus(0);
        if (type === 'descEn' && descEn === '') setDescEnStatus(0);
    }



    const askPermissionsAsync = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);

    };

    const _pickImage = async () => {

        askPermissionsAsync();

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64:true
        });

        if (!result.cancelled) {
            setUserImage(result.uri);
            setBase64(result.base64);
        }
    };

    let image = userImage;

    return(
        <Container>
            <ImageBackground source={require('../../assets/images/bg.png')} style={{ width, height:height*70/100, alignSelf: 'center', flexGrow: 1 }} resizeMode={'cover'}>
                <Header style={{ backgroundColor: 'transparent', marginTop: 10, borderBottomWidth: 0 }} noShadow>
                    <Right style={[styles.directionRowCenter , { flex: 0}]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 50, height: 50, justifyCenter: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/white_back.png')} style={[ styles.transform , { width: 23, height: 23, marginTop: 10 }]} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <Text style={{ textAlign:  I18nManager.isRTL ? 'right' : 'left', color: '#fff', fontSize: 16, fontFamily: 'ArbFONTSBold', marginBottom: 5 }}>{ i18n.t('addService') }</Text>
                    </Right>
                    <Body style={{ alignSelf: 'flex-start'}} />
                </Header>



                <Content contentContainerStyle={[styles.bgFullWidth]}>

                    <View style={[styles.bg_White, styles.heightFull,
                        styles.Width_100, {borderTopRightRadius:50 , marginTop:70 , paddingTop:50}]}>


                        <View style={[styles.tripHeaderShadow , styles.width_120 ,{marginTop:0 , top:-70 }]}>
                            <View style={[styles.tripHeaderImage, styles.height_120]}>
                                <View style={[styles.tripImage]}>
                                    <View style={[ styles.bg_White, styles.Width_100, styles.position_A, styles.height_120 , styles.borderGray, { zIndex: 0 ,
                                        borderRadius: 10} ]} />
                                    <TouchableOpacity onPress={_pickImage}  style={[styles.Width_100 , styles.heightFull , styles.flexCenter]}>
                                        {
                                            image != null?
                                                <Image source= {{uri:image}} style={[styles.Width_100 , styles.heightFull , styles.SelfCenter ]} resizeMode={'cover'} />
                                                :
                                                <Icon type={'AntDesign'} name={'plus'} style={{ color: COLORS.gray, fontSize: 24 }} />
                                        }
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>

                        <KeyboardAvoidingView behavior={'padding'} style={[styles.keyboardAvoid]}>
                            <Form style={[styles.Width_100 , styles.flexCenter, styles.marginVertical_10, styles.Width_90, styles.marginTop_35 ]}>

                                <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginBottom_5 ]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R ]}>
                                        <Label style={[styles.label, styles.textRegular ,{ color:servNameStatus === 1 ?  COLORS.blue :  COLORS.gray}]}>{ i18n.t('servName') }</Label>
                                        <Input style={[styles.input, styles.height_50, (servNameStatus === 1 ? styles.Active : styles.noActive)]}
                                               onChangeText={(servName) => setServName(servName)}
                                               onBlur={()  => unActiveInput('servName')}
                                               onFocus={() => activeInput('servName')}
                                        />
                                    </Item>
                                </View>
                                <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginBottom_5 ]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R ]}>
                                        <Label style={[styles.label, styles.textRegular ,{ color:servNameEnStatus === 1 ?  COLORS.blue :  COLORS.gray}]}>{ i18n.t('servNameEn') }</Label>
                                        <Input style={[styles.input, styles.height_50, (servNameEnStatus === 1 ? styles.Active : styles.noActive)]}
                                               onChangeText={(servNameEn) => setServNameEn(servNameEn)}
                                               onBlur={()  => unActiveInput('servNameEn')}
                                               onFocus={() => activeInput('servNameEn')}
                                        />
                                    </Item>
                                </View>
                                <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginBottom_5 ]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R ]}>
                                        <Label style={[styles.label, styles.textRegular ,{ color:whatsNumStatus === 1 ?  COLORS.blue :  COLORS.gray}]}>{ i18n.t('whatsNum') }</Label>
                                        <Input style={[styles.input, styles.height_50, (whatsNumStatus === 1 ? styles.Active : styles.noActive)]}
                                               onChangeText={(whatsNum) => setWhatsNum(whatsNum)}
                                               onBlur={()  => unActiveInput('whatsNum')}
                                               onFocus={() => activeInput('whatsNum')}
                                               keyboardType={'number-pad'}
                                        />
                                    </Item>
                                </View>
                                <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginBottom_5 ]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R ]}>
                                        <Label style={[styles.label, styles.textRegular ,{ color:priceStatus === 1 ?  COLORS.blue :  COLORS.gray}]}>{ i18n.t('price') }</Label>
                                        <Input style={[styles.input, styles.height_50, (priceStatus === 1 ? styles.Active : styles.noActive)]}
                                               onChangeText={(price) => setPrice(price)}
                                               onBlur={()  => unActiveInput('price')}
                                               onFocus={() => activeInput('price')}
                                               keyboardType={'number-pad'}
                                        />
                                    </Item>
                                </View>

                                <TouchableOpacity onPress={() => navigation.navigate('additions')} style={[styles.chooseLang , styles.marginBottom_25 , { borderColor: COLORS.gray , borderRadius: 5}]}>
                                    <Text style={[ styles.textSize_16, styles.text_gray, styles.textRegular, { textAlign: 'left', width: '100%'} ]}>{ i18n.t('adds') }</Text>
                                    <Icon type={'AntDesign'} name={'plus'} style={{ position: 'absolute', right:0, marginHorizontal: 10 , color:COLORS.gray}}/>
                                </TouchableOpacity>

                                <View style={{ width:'100%' ,backgroundColor: '#f7f7fa', flexDirection: 'row', borderRadius: 10, alignItems: 'center', padding: 5,marginBottom:20}}>
                                    <View style={{ width: 60, height: 60, borderRadius: 10, overflow: 'hidden' }}>
                                        <Image source={require('../../assets/images/fire.png')} style={{ width: 60, height: 60 }} resizeMode={'contain'}/>
                                    </View>
                                    <View style={{ marginHorizontal: 10  }}>
                                        <Text style={[ styles.textSize_16, styles.text_black, styles.textBold, styles._alignText, { alignSelf: 'flex-start' } ]}> { i18n.t('additions') } </Text>
                                        <Text style={[ styles.textSize_15, styles.text_orange, styles.textRegular, styles._alignText, { alignSelf: 'flex-start', marginTop: -10 } ]}> 500 { i18n.t('RS') } </Text>
                                    </View>
                                    <TouchableOpacity style={{position:'absolute' , right:5 , top:5}}>
                                        <Icon type={'AntDesign'} name={'close'} style={{fontSize: 18 , color:COLORS.gray}}/>
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.position_R,  styles.height_70, styles.flexCenter, { marginTop: 15, marginBottom: 20 }]}>
                                    <Item style={[styles.item, styles.position_R ]}>
                                        <Textarea value={desc}
                                                  placeholder={i18n.t('serviceDescAr')} bordered={false}
                                                  style={[styles.textArea, styles.height_80, (descStatus === 1 ? styles.Active : styles.noActive)]}
                                                  onChangeText={(desc) => setDesc(desc)}
                                                  onBlur={()  => unActiveInput('desc')}
                                                  onFocus={() => activeInput('desc')}
                                        />
                                    </Item>
                                </View>

                                <View style={[styles.position_R,  styles.height_70, styles.flexCenter, { marginTop: 15, marginBottom: 20 }]}>
                                    <Item style={[styles.item, styles.position_R ]}>
                                        <Textarea value={descEn}
                                                  placeholder={i18n.t('serviceDescEn')} bordered={false}
                                                  style={[styles.textArea, styles.height_80, (descEnStatus === 1 ? styles.Active : styles.noActive)]}
                                                  onChangeText={(descEn) => setDescEn(descEn)}
                                                  onBlur={()  => unActiveInput('descEn')}
                                                  onFocus={() => activeInput('descEn')}
                                        />
                                    </Item>
                                </View>

                                <TouchableOpacity onPress={() => navigation.navigate('services')} style={[styles.blueBtn , styles.Width_100 , styles.marginBottom_25]}>
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('add') }</Text>
                                </TouchableOpacity>

                            </Form>
                        </KeyboardAvoidingView>
                    </View>

                </Content>
            </ImageBackground>
        </Container>
    );
}

export default AddService;
