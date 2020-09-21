import {Dimensions , I18nManager, Platform} from "react-native";
import COLORS from '../../src/consts/colors'


const width         = Dimensions.get('window').width;
const height        = Dimensions.get('window').height;
const IS_IPHONE_X 	= (height === 812 || height === 896) && Platform.OS === 'ios';

const styles = ({

    // Style Loading

    loading : {
        position                : 'absolute',
        top                     : 0,
        right                   : 0,
        width                   : '100%',
        height                  : '100%',
        zIndex                  :  99999,
        backgroundColor         : "rgba(0,0,0,0.5)",
    },

    container:{
      flex:1
    },
    // Style Color ConText

    text_mstarda : {
        color               : COLORS.mstarda
    },
    text_green : {
        color               : COLORS.green
    },
    text_black : {
        color               : COLORS.black
    },
    text_blue : {
        color               : COLORS.blue
    },
	text_orange : {
        color               : COLORS.orange
    },
    text_gray : {
        color               : COLORS.gray
    },
    text_aqua : {
        color               : COLORS.aqua
    },
    text_light_gray : {
        color               : COLORS.light_gray
    },
    text_red : {
        color               : COLORS.red
    },
    text_White : {
        color               : '#FFF'
    },

    // Style Font

    textRegular : {
        fontFamily          : 'ArbFONTS',
    },
    textBold : {
        fontFamily          : 'ArbFONTSBold'
    },
    textDecoration : {
        textDecorationLine  : "underline"
    },
    linethrough : {
        textDecorationLine  : "line-through"
    },
    fontBold : {
        fontWeight          : "bold"
    },
    fontSpacing: {
        letterSpacing       : 1,
    },
    textSize_11 : {
        fontSize            : 11,
    },
    textSize_12 : {
        fontSize            : 12,
    },
    textSize_13 : {
        fontSize            : 13,
    },
    textSize_14 : {
        fontSize            : 14,
    },
    textSize_15 : {
        fontSize            : 15,
    },
    textSize_16 : {
        fontSize            : 16,
    },
    textSize_17 : {
        fontSize            : 17,
    },
    textSize_18 : {
        fontSize            : 18,
    },
    textSize_20 : {
        fontSize            : 20,
    },
    textSize_22 : {
        fontSize            : 22,
    },
    textSize_24 : {
        fontSize            : 24,
    },
    textSize_26 : {
        fontSize            : 26,
    },
    textSize_28 : {
        fontSize            : 28,
    },
    textSize_30 : {
        fontSize            : 30,
    },
    textSize_32 : {
        fontSize            : 32,
    },

    // Style Direction Text

    textCenter : {
        textAlign           : "center"
    },
    textRight : {
        textAlign           : "left"
    },
    textLeft : {
        textAlign           : "left"
    },

    // Margin Space Vertical

    marginVertical_5 : {
        marginVertical      : 5
    },
    marginVertical_10 : {
        marginVertical      : 10
    },
    marginVertical_15 : {
        marginVertical      : 15
    },
    marginVertical_20 : {
        marginVertical      : 20
    },
    marginVertical_25 : {
        marginVertical      : 25
    },
    marginVertical_35 : {
        marginVertical      : 35
    },
    marginBottom_150 : {
        marginBottom      : 150
    },
    marginTop_120 : {
        marginTop      : 120
    },
    marginBottom_40 : {
        marginBottom      : 40
    },
    marginBottom_50 : {
        marginBottom      : 50
    },
    marginBottom_80 : {
        marginBottom      : 80
    },
    marginBottom_5 : {
        marginBottom      : 5
    },
    marginBottom_7 : {
        marginBottom      : 7
    },
    marginBottom_10 : {
        marginBottom      : 10
    },
    marginBottom_12 : {
        marginBottom      : 12
    },
    marginBottom_15 : {
        marginBottom      : 15
    },
    marginBottom_20 : {
        marginBottom      : 20
    },
    marginBottom_25 : {
        marginBottom      : 25
    },
    marginBottom_30 : {
        marginBottom      : 30
    },
    marginBottom_35 : {
        marginBottom      : 35
    },
    marginBottom_60: {
        marginBottom      : 60
    },
    marginTop_5 : {
        marginTop      : 5
    },
    marginTop_10 : {
        marginTop      : 10
    },
    marginTop_15 : {
        marginTop      : 15
    },
    marginTop_25 : {
        marginTop      : 25
    },
    marginTop_35 : {
        marginTop      : 35
    },
    marginTop_40 : {
        marginTop      : 40
    },
    marginTop_55 : {
        marginTop      : 55
    },
    marginTop_60 : {
        marginTop      : 60
    },
    marginTop_65 : {
        marginTop      : 65
    },
    marginTop_20 : {
        marginTop      : 20
    },
    marginTop_125 : {
        marginTop      : 125
    },
    marginTop_135 : {
        marginTop      : 135
    },
    marginTop_150 : {
        marginTop      : 150
    },

    // Margin Space Horizontal

    marginHorizontal_0 : {
        marginHorizontal    : 0
    },
    marginHorizontal_5 : {
        marginHorizontal    : 5
    },
    marginHorizontal_10 : {
        marginHorizontal    : 10
    },
    marginHorizontal_15 : {
        marginHorizontal    : 15
    },
    marginHorizontal_20 : {
        marginHorizontal    : 20
    },
    marginHorizontal_25 : {
        marginHorizontal    : 25
    },

    // Padding Space Vertical

    paddingVertical_0 : {
        paddingVertical      : 0
    },
    paddingVertical_5 : {
        paddingVertical      : 5
    },
    paddingVertical_10 : {
        paddingVertical      : 10
    },
    paddingVertical_15 : {
        paddingVertical      : 15
    },
    paddingVertical_20 : {
        paddingVertical      : 20
    },
    paddingVertical_25 : {
        paddingVertical      : 25
    },
    paddingVertical_45 : {
        paddingVertical      : 45
    },
    paddingTop_50 : {
        paddingTop      : 50
    },
    paddingTop_30 : {
        paddingTop      : 30
    },
	smImage: {
        width: 25,
        height: 25
    },

    // Padding Space Horizontal

    paddingHorizontal_0 : {
        paddingHorizontal    : 0
    },
    paddingHorizontal_5 : {
        paddingHorizontal    : 5
    },
    paddingHorizontal_10 : {
        paddingHorizontal    : 10
    },
    paddingHorizontal_15 : {
        paddingHorizontal    : 15
    },
    paddingHorizontal_20 : {
        paddingHorizontal    : 20
    },
    paddingHorizontal_25 : {
        paddingHorizontal    : 25
    },
    paddingHorizontal_30 : {
        paddingHorizontal    : 30
    },
    paddingHorizontal_35 : {
        paddingHorizontal    : 35
    },
    paddingHorizontal_70 : {
        paddingHorizontal    : 70
    },
    paddingBottom55 : {
        paddingBottom    : 55
    },
    paddingTop20 : {
        paddingTop    : 20
    },

    // Style Border Radius

    Radius_0 : {
        borderRadius        : 0
    },
    Radius_5 : {
        borderRadius        : 5
    },
    Radius_7 : {
        borderRadius        : 7
    },
    Radius_10 : {
        borderRadius        : 10
    },
    Radius_15 : {
        borderRadius        : 15
    },
    Radius_20 : {
        borderRadius        : 20
    },
    Radius_30 : {
        borderRadius        : 30
    },
    Radius_40 : {
        borderRadius        : 40
    },
    Radius_50 : {
        borderRadius        : 50
    },
    Radius_60 : {
        borderRadius        : 60
    },
    Radius_70 : {
        borderRadius        : 70
    },
    Radius_80 : {
        borderRadius        : 80
    },
    Radius_90 : {
        borderRadius        : 90
    },
    Radius_100 : {
        borderRadius        : 100
    },
    RadiusTop_5 : {
        borderTopLeftRadius   : 5,
        borderTopRightRadius  : 5
    },

    // Background Color

    bg_green : {
        backgroundColor     : COLORS.green
    },
    bg_mstarda : {
        backgroundColor     : COLORS.mstarda
    },

    bg_pink : {
        backgroundColor     : '#E873B1'
    },
    bg_overlay : {
        backgroundColor     : "rgba(250, 218, 208, 0.9)"
    },
    overlay_white : {
        backgroundColor     : "rgba(255, 255, 255, 0.7)"
    },
    overlay_black : {
        backgroundColor     : "rgba(0, 0, 0, 0.3)"
    },
    bg_White : {
        backgroundColor     : '#FFF'
    },
    bg_light_gray : {
        backgroundColor     : '#F1F1F1'
    },


    // Style Search

    checkBox : {
        paddingLeft             : 0,
        paddingBottom           : 0,
        borderRadius            : 5,
        paddingRight            : 3
    },

    // Style Shadow

    boxShadow : {
        shadowColor             : "#fff",
        shadowOffset            : { width: 0, height: 1},
        shadowOpacity           : 0.22,
        shadowRadius            : 2.22,
        elevation               : 3,
    },

	footerIcon : {
		width               : 20,
		height              : 20,
		resizeMode          :  "contain"
	},

	// Styles Flex Box
    keyboardAvoid: {
        width:'100%',
        height: null,
        flex: 1,
    },
    flexCenter : {
        alignItems          : 'center',
        justifyContent      : 'center',
        alignSelf           : 'center',
    },
    centerContext : {
        alignItems          : 'center',
        justifyContent      : 'center',
    },
    centerColum : {
        alignSelf           : 'center',
    },
    SelfCenter : {
        alignSelf           : 'center',
        justifyContent      : 'center',
    },
    SelfRight : {
        alignSelf           : 'flex-end',
        justifyContent      : 'center',
    },
    SelfLeft : {
        alignSelf           : 'flex-start',
        justifyContent      : 'center',
    },
    justifyCenter : {
        justifyContent      : 'center',
    },
    justifyTop : {
        justifyContent      : 'flex-end',
    },
    justifyStart : {
        justifyContent      : 'flex-start',
    },
    alignStart : {
        alignSelf      : 'flex-start',
    },
    rowGroup : {
        flexDirection       : "row",
        justifyContent      : "space-between",
        alignItems          : "center",
        flexWrap            : 'wrap'
    },
    rowCenter : {
        flexDirection       : "row",
        alignSelf           : 'center',
        justifyContent      : "center",
        alignItems          : "center",
    },
    rowRight : {
        flexDirection       : "row",
        alignSelf           : 'flex-start',
        alignItems          : "center",
        justifyContent      : 'center',
        flexWrap            : 'wrap'
    },
    rowLeft : {
        flexDirection       : "row",
        alignSelf           : 'flex-end',
        alignItems          : "center",
        justifyContent      : 'center',
        flexWrap            : 'wrap'
    },
    bgFullWidth : {
        flexGrow            : 1,
    },
    flex_10 : {
        flexBasis           : '10%'
    },
    flex_20 : {
        flexBasis           : '20%'
    },
    flex_25 : {
        flexBasis           : '25%'
    },
    flex_30 : {
        flexBasis           : '30%'
    },
    flex_40 : {
        flexBasis           : '40%'
    },
    flex_45 : {
        flexBasis           : '45%'
    },
    flex_50 : {
        flexBasis           : '50%'
    },
    flex_55 : {
        flexBasis           : '55%'
    },
    flex_60 : {
        flexBasis           : '60%'
    },
    flex_70 : {
        flexBasis           : '70%'
    },
    flex_80 : {
        flexBasis           : '80%'
    },
    flex_90 : {
        flexBasis           : '90%'
    },
    flex_100 : {
        flexBasis           : '100%'
    },


    //  Style For App

    windowWidth : {
        paddingVertical     : 30,
        width               : '100%',
        height              : '100%',
    },
    bgContent : {
        width               : null,
        height              : null,
        flex                : 1,
    },
    Width_50 : {
        width               : '50%'
    },
    Width_60 : {
        width               : '60%'
    },
    Width_70 : {
        width               : '70%'
    },
    Width_80 : {
        width               : '80%'
    },
    Width_85 : {
        width               : '85%'
    },
    Width_87 : {
        width               : '87%'
    },
    Width_90 : {
        width               : '90%'
    },
    Width_95 : {
        width               : '95%'
    },
    Width_100 : {
        width               : '100%'
    },
    width_30 : {
        width               : 30
    },
    width_40 : {
        width               : 40
    },
    width_50 : {
        width               : 50
    },
    width_60 : {
        width               : 60
    },
    width_70 : {
        width               : 70
    },
    width_80 : {
        width               : 80
    },
    width_90 : {
        width               : 90
    },
    width_100 : {
        width               : 100
    },
    width_120 : {
        width               : 120
    },
    width_130 : {
        width               : 130
    },
    width_150 : {
        width               : 150
    },
    width_155 : {
        width               : 155
    },
    height_10 : {
        height               : 10
    },
    height_20 : {
        height               : 20
    },
    height_30 : {
        height               : 30
    },
    height_35 : {
        height               : 35
    },
    height_40 : {
        height               : 40
    },
    height_50 : {
        height               : 50
    },
    height_60 : {
        height               : 60
    },
    height_70 : {
        height               : 70
    },
    height_80 : {
        height               : 80
    },
    height_90 : {
        height               : 90
    },
    height_100 : {
        height              : 100
    },
    height_120 : {
        height              : 120
    },
    height_150 : {
        height              : 150
    },
    height_200 : {
        height              : 200
    },
    height_230 : {
        height              : 230
    },
    height_250 : {
        height              : 250
    },
    heightFull : {
        height              : '100%'
    },
    minHeight : {
        minHeight           :  150
    },
    overHidden : {
        overflow            : 'hidden'
    },

    // Style Img Logo

    icon150 : {
        width               : 150,
        height              : 150,
    },
    icon200 : {
        width               : 200,
        height              : 200,
    },
    icon220 : {
        width               : 220,
        height              : 220,
    },
    icon50 : {
        width               : 50,
        height              : 50,
    },
    icon20 : {
        width               : 20,
        height              : 20,
    },
    icon23 : {
        width               : 23,
        height              : 23,
    },
    icon15 : {
        width               : 15,
        height              : 15,
    },
    icon33 : {
        width               : 33,
        height              : 33,
    },
    icon60 : {
        width               : 60,
        height              : 60,
    },
    icon70 : {
        width               : 70,
        height              : 70,
    },
    icon100 : {
        width               : 100,
        height              : 100,
    },
    icon80 : {
        width               : 80,
        height              : 80,
    },
    icon250 : {
        width               : 250,
        height              : 250,
    },
    icon130 : {
        width               : 130,
        height              : 130,
    },
    icon25 : {
        width               : 25,
        height              : 25,
    },
    icon30 : {
        width               : 30,
        height              : 30,
    },
    icon35 : {
        width               : 35,
        height              : 35,
        resizeMode          : 'contain'
    },
    icon40 : {
        width               : 40,
        height              : 40
    },

    //  Style Header

    headerView : {
        backgroundColor         : COLORS.blue,
        zIndex                  : 99,
        paddingTop              : 20,
        paddingRight            : 0,
        paddingLeft             : 0,
        overflow                : 'hidden',
        elevation               : 0,
        borderBottomWidth       : 0,
        alignItems              : 'center',
        height                  : 100,
        borderBottomLeftRadius  : 30,
        borderBottomRightRadius : 30,
    },
    whatsappContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    bodyText : {
        position            : 'relative',
        alignItems          : 'center',
        flex                : 1,
        top                 : -1
    },
    leftIcon : {
        flex                : 0,
        transform           : I18nManager.isRTL ? [{ rotate: '0deg' }] : [{ rotate: '180deg' }],
        marginHorizontal    : 15
    },
    rightIcon : {
        flex                : 0
    },
    iconHeader : {
        width               : 50,
        height              : 40
    },
    rotatTouch : {
        transform           : [{ rotate: '50deg' }],
    },
    rotatIcon : {
        transform           : [{ rotate: '-50deg' }],
    },

    // Style position

    position_R : {
        position                : 'relative',
        zIndex                  : 999
    },
    position_A : {
        position                : 'absolute',
        zIndex                  : 9999
    },
    fixItem : {
        top                     : -20,
        right                   : -20
    },
    top_0 : {
        top                     : 0
    },
    top_5 : {
        top                     : 5
    },
    top_10 : {
        top                     : 10
    },
    top_15 : {
        top                     : 15
    },
    top_20 : {
        top                     : 20
    },
    top_25 : {
        top                     : 25
    },
    top_30 : {
        top                     : 30
    },
    top_35 : {
        top                     : 35
    },
    bottom_0 : {
        bottom                  : 0
    },
    bottom_10 : {
        bottom                  : 10
    },
    bottom_20 : {
        bottom                  : 20
    },
    bottom_30 : {
        bottom                  : 30
    },
    bottom_40 : {
        bottom                  : 40
    },
    right_0 : {
        right                     : 0
    },
    right_5 : {
        right                     : 5
    },
    right_10 : {
        right                     : 10
    },
    right_15 : {
        right                     : 15
    },
    right_20 : {
        right                     : 20
    },
    right_25 : {
        right                     : 25
    },
    right_30 : {
        right                     : 30
    },
    right_35 : {
        right                     : 35
    },
    left_0 : {
        left                     : 0
    },
    left_5 : {
        left                     : 5
    },
    left_10 : {
        left                     : 10
    },
    left_15 : {
        left                     : 15
    },
    left_20 : {
        left                     : 20
    },
    left_25 : {
        left                     : 25
    },
    left_30 : {
        left                     : 30
    },
    left_35 : {
        left                     : 35
    },



    directionColumnSpace:{
        flexDirection:'column',
        justifyContent:'space-between' ,
        alignItems:'center' ,
    },
    directionColumnSpace2:{
        flexDirection:'column',
        justifyContent:'center' ,
        alignItems:'space-between' ,
    },
    directionColumn:{
        flexDirection:'column',
        alignItems:'center' ,
    },
    directionRowReverse:{
        flexDirection:'row-reverse',
    },
    directionColumnC:{
        justifyContent:'center' ,
        flexDirection:'column'
    },
    directionColumnCenter:{
        justifyContent:'center' ,
        alignItems:'center' ,
        flexDirection:'column'
    },
    directionRowCenter:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    directionRow:{
        flexDirection:'row',
        alignItems:'center'
    },
    directionBasicRow:{
        flexDirection:'row',
    },
    directionRowEnd:{
        flexDirection:'row',
        alignItems:'flex-end'
    },
    directionRowSpace:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    transform:{
        transform: I18nManager.isRTL ? [{rotateY : '0deg'}] : [{rotateY : '-180deg'}]
    },
    transformReverse:{
        transform: I18nManager.isRTL ? [{rotateY : '-180deg'}] : [{rotateY : '0deg'}]
    },
	searchBox: {
        backgroundColor : '#ffffff69',
        borderRadius: 10,
        height: 50,
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    tripHeaderShadow: {
		position: 'absolute',
        width: '85%',
        height: 90,
        zIndex: 1,
        borderRadius: 10,
        marginTop: IS_IPHONE_X ? 120 : 70,
        alignSelf: 'center',
        shadowColor: "#ffffff",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.5,
		shadowRadius: 10,
		elevation: 7,
    },
    tripHeaderImage: {
		position: 'absolute',
        width: '100%',
        borderRadius: 10,
        height: 90,
        alignSelf: 'center',
        overflow: 'hidden'
    },
    tripImage: {
		alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    productCard:{
        marginLeft:10 ,
        flexDirection:'column' ,
        flex:1,
        paddingVertical:5
    },
	blueBtn: {
        backgroundColor: COLORS.blue,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    swiperImg:{
        height:'100%' ,
        width:'100%' ,
        zIndex:-1
    },
    imgOverLay:{
        backgroundColor: "rgba(95, 78, 75, 0.5)" ,
        position:'absolute',
        height:'100%' ,
        width:'100%' ,
        zIndex:1,
    },
    swiperborder:{
        position:'absolute',
        height:'88%' ,
        width:'90%' ,
        zIndex:1,
        borderWidth: 2,
        borderColor: '#c7c7c7',
        alignSelf:'center',
        top:'7%'
    },
    doteStyle:{
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        left: 0,
        right:0,
        bottom: 25,
        width: 15,
        height: 4,
    },
    activeDot:{
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.blue,
        backgroundColor: COLORS.blue,
        width: 25,
        height: 5,
        left: 0,
        right:0,
        bottom: 25
    },
    doteStyle2:{
        backgroundColor: COLORS.gray,
        borderRadius: 5,
		left: 0,
		right:0,
        bottom: '20%',
        width: 15,
        height: 4,
        marginBottom: 15
    },
    activeDot2:{
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.blue,
        backgroundColor: COLORS.blue,
        width: 25,
        height: 4,
		left: 0,
		right:0,
        bottom: '20%',
		marginBottom: 15
    },
    greenBtn:{
        width:'100%',
        height:45,
        backgroundColor:COLORS.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    payMethod:{
        paddingHorizontal:20,
        height:45,
        backgroundColor:COLORS.blue,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    grayBtn:{
        width:'100%',
        height:45,
        backgroundColor:"#BBBBBB",
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
        borderRadius:10,
    },
    item : {
        borderBottomWidth: 0,
        top: -20,
        marginTop: 0,
        width:'100%',
        paddingLeft:0,
        marginLeft:0,
        zIndex : -1,
    },
    _alignText: {
        textAlign: I18nManager.isRTL ? 'right' : 'left'
    },
    writngDir: {
        writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'
    },
    label : {
        top:0,
        left: 15,
        backgroundColor: '#ffffff',
        alignSelf: 'flex-start',
        fontFamily: 'ArbFONTS',
        fontSize: 14,
        zIndex:10,
        paddingHorizontal:5
    },
    labelText : {
        left: 15,
        backgroundColor: '#ffffff',
        alignSelf: 'flex-start',
        fontSize: 15,
        zIndex:10,
        position:'absolute' ,
    },
    input : {
        borderColor         : COLORS.black,
        borderWidth         : 1,
        borderRadius        : 5,
        color               : COLORS.black,
        paddingRight        : 15,
        paddingLeft         : 15,
        textAlign           : I18nManager.isRTL ? 'right' : 'left',
        fontFamily          : 'ArbFONTS',
        fontSize            : 14,
    },
    inputSearch : {
        color               : COLORS.gray,
        paddingRight        : 20,
        paddingLeft         : 20,
        textAlign           : I18nManager.isRTL ? 'right' : 'left',
        fontFamily          : 'ArbFONTS',
        fontSize            : 14,
        borderRadius        :5,
        height              :35,
        marginRight         :15
    },
    searchInput : {
        color               : '#fff',
        textAlign           : I18nManager.isRTL ? 'right' : 'left',
        fontFamily          : 'ArbFONTS',
        fontSize            : 15,
        width               : '90%',
        height              : 40,
        marginHorizontal    : 10,
        borderLeftWidth     : 1,
        borderLeftColor     : '#eee',
    },
	mapView:{
        width,
        height: '100%',
        backgroundColor: '#fff',
        // bottom: -40,
        borderTopRightRadius: 50,
        // overflow: 'hidden'
    },
    filter : {
        borderRadius        : 10,
        backgroundColor     : '#F1F1F1',
        width               : 50,
        height              : 50,
        justifyContent      :'center',
        alignItems          :'center',
        marginLeft          :10
    },
    searchIcon : {
        position            :'absolute',
        zIndex              :1,
        left                :20
    },
    closeIcon : {
        position            :'absolute',
        zIndex              :1,
        right                :20
    },
    chooseLang : {
        borderColor         : COLORS.gray,
        borderWidth         : 1,
        borderRadius        : 10,
        color               : COLORS.blue,
        paddingRight        : 20,
        paddingLeft         : 20,
        textAlign           : I18nManager.isRTL ? 'right' : 'left',
        fontFamily          : 'ArbFONTS',
        fontSize            : 15,
        width               : '100%',
        height              : 50,
        flexDirection       : 'row',
        alignItems          : 'center',
    },
    tripType: {
		paddingRight        : 0,
        paddingLeft         : 0,
        overflow            : 'hidden'
    },
    tripTypeText: {
		color               : '#fff',
        marginHorizontal    : 10,
        textAlign           : I18nManager.isRTL ? 'right' : 'left'
    },
    tripTypeIcon: {
		marginHorizontal    : 10,
        color               : '#fff',
        position            : 'absolute',
        right               : 0
    },
    tripImageBackground: {
		width               : '100%',
        height              : 50,
        borderRadius        : 10,
        flexDirection       : 'row',
        alignItems          : 'center'
    },
    langFloat : {
        position            :'absolute',
        top                 : -10,
        left                : 20,
        backgroundColor     : '#ffffff',
        // alignSelf           : 'flex-start',
        fontFamily          : 'ArbFONTS',
        fontSize            : 15,
    },
    skipButton : {
        width               : '100%',
		textAlign           : I18nManager.isRTL ? 'right' : 'left',
		fontFamily          : 'ArbFONTSBold',
        color               : COLORS.blue,
        fontWeight          : 'bold',
        fontSize            : 16,
		alignSelf           : 'flex-start',
    },
    textArea : {
        borderColor         : COLORS.gray,
        borderWidth         : 1,
        borderRadius        : 10,
        width               : "100%",
        color               : COLORS.blue,
        paddingRight        : 20,
        paddingLeft         : 20,
        textAlign           : 'right',
        fontFamily          : 'ArbFONTS',
        fontSize            : 15,
        top                 : 0,
        marginTop           : 25
    },
    Active : {
        borderWidth           : 1,
        borderColor           : COLORS.blue,
        zIndex:-1
    },
    noActive : {
        borderWidth           : 1,
        borderColor           : COLORS.gray,
    },
    borderGray : {
        borderWidth           : 1,
        borderColor           : '#ddd',
    },
    borderBottomGray : {
        borderBottomWidth           : 1,
        borderColor           : '#ddd',
    },
    scrollView: {
        flexDirection       : 'row',
        alignSelf           : 'flex-start',
    },
    carousalText: {
        position       : 'absolute',
        left           : 0,
        flexDirection           : 'column',
        justifyContent           : 'center',
        zIndex          :10,
        paddingHorizontal:5,
        paddingVertical:10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        marginTop:20
    },
    carousalRatedText: {
        flexDirection           : 'column',
        justifyContent           : 'center',
        paddingHorizontal:5,
        paddingVertical:7,
        width:'100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    scrollCat : {
        marginRight:10,
        width: 80,
        height: 115,
        justifyContent:'flex-end',
        paddingBottom:5
    },
    scrollImg : {
        width               : '100%',
        height              : '100%',
        marginBottom        :10,
        borderRadius        :10,
        position            :'absolute'
    },
    activeTabs : {
        backgroundColor     : COLORS.yellow,
        paddingVertical:7,
        paddingHorizontal:7,
        borderRadius:5
    },
    noActiveTabs : {
        backgroundColor     : 'transparent',
        paddingVertical:7,
        paddingHorizontal:7,
        borderRadius:5
    },
    touchFav: {
        backgroundColor:'#fff',
        width:35,
        height:35,
        borderRadius:50,
        alignSelf:'flex-end',
        margin:10
    },
    discountMark: {
        position:'absolute',
        left:20,
        top:0
    },
    scrollContent: {
        flexDirection:'column',
        justifyContent:'space-between' ,
        position : 'absolute',
        zIndex:1,
        height:'100%'
    },
    starStyle:{
        marginHorizontal    : 1,
    },
    footerStyle:{
        backgroundColor:'#fff',
        height:60,
        paddingHorizontal:15,
    },
    activeTab : {
        paddingVertical:10 ,
        paddingHorizontal      : 7,
        backgroundColor:COLORS.lightYellow,
        borderRadius:20
    },
    unActiveTab : {
        paddingVertical:10 ,
        paddingHorizontal      : 7,
        backgroundColor:'transparent',
        borderRadius:20
    },
    notiCard:{
        borderRadius: 10,
        marginTop: 10,
        height: 100,
        overflow:'hidden',
    },
    cardView:{
        borderLeftWidth: 7,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        paddingVertical: 10
    },
    cardDate:{
        borderRightWidth: 1,
        borderRightColor: '#ddd' ,
        justifyContent:'center'
    },
    bgModel : {
        width                   : "100%",
        flex                    : 1,
        alignSelf               : 'center',
        justifyContent          : 'flex-end',
        bottom                  :-18,
    },
    modalBorder : {
        width:'40%',
        height:5,
        backgroundColor:COLORS.black,
        alignSelf:'center',
        borderRadius:5,
        marginBottom:10
    },
    topNav : {
        height:100,
        backgroundColor:'#fff',
        alignSelf:'center',
        borderBottomLeftRadius: 50,
        overflow:'hidden'
    },
    bottomLayCurve : {
        backgroundColor     : "#888ca08c",
        borderTopLeftRadius  : 30,
        borderTopRightRadius : 30,
        paddingVertical:30,
        paddingHorizontal:20,
        minHeight:200
    },
    whiteDot : {
        backgroundColor: "#fff",
        borderRadius:5,
        width:3,
        height:3,
        position:'absolute',
        left:0,
        top:0
    },
    slider:{
        height:35 ,
        borderColor:'#acabae',
        borderWidth:0
    },
    checkbox:{
        color:COLORS.yellow,
    },
});

export default styles;
