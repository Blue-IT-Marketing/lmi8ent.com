
import axios from 'axios';
import * as profile_routes from './profiles.routes';


export const load_albums =async uid => {
	let results = {status : true,payload:[],error:{}};

	await axios.get(profile_routes.load_albums_api + `/{uid}`).then(response => {
		if(response.status === 200){
			return response.data;
		}
		throw new Error('there was an error fetching album information');
	}).then(albums => {
		results.status = true;
		results.payload = [...albums];
		results.error = {};
	}).catch(error => {
		results.status = false;
		results.payload = [];
		results.error = {...error};        
	});

	return results;
};


export const load_music_files = async uid => {
    let results = { status: true, payload: [], error: {} };

    await axios.get(profile_routes.load_music_files_api + `/{uid}`).then(response => {
        if(response.status === 200){
            return response.data
        }
        throw new Error('there was an error fetching music files');
    }).then(music_files => {
        results.status = true;
        results.payload = [...music_files];
        results.error = {};
    }).catch(error => {
        results.status = false;
        results.payload = [];
        results.error = {...error}
    })
}


