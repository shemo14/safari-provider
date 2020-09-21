import axios from "axios";
import CONST from "../consts";


export const getIntro = lang => {
    return (dispatch) => {
        axios({
            url         : CONST.url + 'intros',
            method      : 'POST',
            data        : { lang }
        }).then(response => {
            dispatch({type: 'getIntro', payload: response.data});
        });
    }
};
