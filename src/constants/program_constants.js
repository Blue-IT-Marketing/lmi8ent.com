import axios from 'axios';

export let app_name = 'Iml8nt';
export let app_long_name = 'Internet Media Latent';
export let app_descrition = 'an undiscovered media portal';
export let cell = '0848626414';
export let email = 'info@Iml8nt.com';
export let fax = '086****786';
export let localStorageKey = 'Iml8nt-';


export let small_logo_url = '';

export let maps_url = '';
export let business_address = ``;
export let business_reg_number = '';
export let business_fax = '';
export let business_tel = '0848626414';
export let business_email = 'josephmokete@gmail.com';


export let firebase = {
    	apiKey: "AIzaSyCQL3PL9IKLdCd5X_oiFJF9jxlvrEQSTcI",
    	authDomain: "lmi8ent.firebaseapp.com",
    	databaseURL: "https://lmi8ent.firebaseio.com",
    	projectId: "lmi8ent",
    	storageBucket: "lmi8ent.appspot.com",
    	messagingSenderId: "375744400761",
    	appId: "1:375744400761:web:5c83c50be8618205"

};


export const loadSettings = async () => {
	const settings_url = '/settings';
	axios.get(settings_url).then( result => {
		if (result.status === 200){
			return result.data;
		}else{
			throw new Error('There was an error loading settings');
		}
	}).then( settings => {
		app_name = settings.app_name;
		app_long_name = settings.app_long_name;
		app_descrition = settings.app_descrition;
		cell = settings.cell;
		email = settings.email;
		fax = settings.fax;
		small_logo_url = settings.small_logo_url;
		maps_url = settings.maps_url;
		business_address = settings.business_address;
		business_reg_number = settings.business_reg_number;
		business_fax = settings.business_fax;
		business_tel = settings.business_tel;
		business_email = settings.business_email;
	}).catch(e => {
		// eslint-disable-next-line no-console
		console.log('Error ', e);
	})
};




