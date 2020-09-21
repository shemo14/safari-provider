import { combineReducers } from 'redux';
import lang from './LangReducer';
import auth from './AuthReducer';
import intro from './IntroReducer';
import profile from './ProfileReducer';
import about from './AboutReducer';
import categories from './CategoriesReducer';
import subCategoriesByCat from './SubCategoriesByCatReducer';
import myServices from './MyServicesReducer';
import serviceDetailes from './ServiceDetailesReducer';


export default combineReducers({
    lang,
    auth,
	intro,
	profile,
	about,
	categories,
	subCategoriesByCat,
	myServices,
	serviceDetailes,
});
