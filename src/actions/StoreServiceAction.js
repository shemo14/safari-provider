import axios from "axios";
import CONST from "../consts";
import {Toast} from "native-base";


export const StoreService = (lang , name_ar , name_en , whatsapp , price , description_ar , description_en
                                ,sub_category_id , images ,additions,category_id , token , navigation) => {
    return (dispatch) => {
        axios({
            url         : CONST.url + 'storeService',
            method      : 'POST',
            data        : { lang , name_ar , name_en , whatsapp , price , description_ar , description_en
                ,sub_category_id , images ,additions,category_id},
            headers     : {Authorization: token}
        }).then(response => {
            if (response.data.success) {

                navigation.navigate('services')

            }
            Toast.show({
                text        : response.data.message,
                type        : response.data.success ? "success" : "danger",
                duration    : 3000,
                textStyle   : {
                    color       : "white",
                    fontFamily  : 'ArbFONTSBold',
                    textAlign   : 'center'
                }
            });
        });
    }
};
