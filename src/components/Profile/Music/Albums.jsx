import React, { Fragment, useState, useEffect, useContext } from 'react';
import {
	album_file_type,
	album_file_errors_type
} from '../profile.types';

import * as profile_api from '../profile.api';

import {Utils} from '../../../utilities';

import {UserAccountContext} from '../../../context/UserAccount/userAccountContext';

const CreateAlbums = () => {
	const [album,setAlbum] = useState(album_file_type);
	const [errors, setErrors] = useState(album_file_errors_type);
	const [inline,setInline] = useState({message:'',message_type:'inf'});

	const {user_account_state} = useContext(UserAccountContext);

	const onCheckErrors = async () => {
		
		let isError = false;

		const check_album_name = () => {
			if(Utils.isEmpty(album.album_name)){
				setErrors({...errors,album_name_error : 'album name cannot be empty'});
				return true;
			};
			return false;
		};

		const check_description = () => {
			if(Utils.isEmpty(album.description)){
				setErrors({...errors,description_error: 'description cannot be empty'});
				return true;
			}
			return false;
		};

		const check_genre = () => {
			if(Utils.isEmpty(album.genre)){
				setErrors({...errors,genre_error : 'genre cannot be empty'});
				return true;
			}
			return false;

		};

		await check_album_name() ? isError = true : null ;
		await check_description() ? isError = true : null;
		await check_genre() ? isError = true : null;

		return isError;
	};

	const doCreateAlbum = async () => {
		const results = {status : true, payload : {}, error:{}};
		const uid = user_account_state.user_account.uid;

		profile_api.create_album(album).then(response => {
			if(response.status === 200){
				setAlbum(response.payload);				
			}
		})


	};

	return(
		<Fragment>
			<div className='box box-body'>
				<div className='box box-header'>
					<h3 className='box-title'>Create Album</h3>
				</div>

				<form className='form-horizontal'>
					<div className='form-group'>
						<label>Album Name</label>
						<input 
							type='text' 
							className='form-control' 
							name='album_name' 
							value={album.album_name}
							onChange={e => setAlbum({...album,[e.target.name]: e.target.value})}
						/>
					</div>

					<div className='form-group'>
						<label>Description</label>
						<input 
							type='text'
							className='form-control'
							name='description'
							value={album.description}
							onChange={e => setAlbum({...album,[e.target.name]: e.target.value})}
						/>
					</div>

					<div className='form-group'>
						<label>Genre</label>
						<input
							type='text'
							className='form-control'
							name='genre'
							value={album.genre}
							onChange={e => setAlbum({...album,[e.target.name]: e.target.value})}							
						/>
					</div>

					<div className='form-group'>
						<button
							type='button'
							className='btn btn-primary btn-lg'
							name='submit'
							onClick={e => onCheckErrors(e).then(isError => {
								if(isError){
									throw new Error('there was an error processing form');
								}
								doCreateAlbum(e).then(response => {
									if (response.status){
										setInline({message : 'successfully created new album', message_type:'inf'})
									}else{
										setInline({message : response.error.message,message_type : 'error'})
									}
								}).catch(error => {
									setInline({message:error.message,message_type:'error'});
								})
							})}
						>

						</button>
					</div>					

					

				</form>

			</div>
		</Fragment>
	)
}

const Albums = () => {

	return(
		<Fragment>
			<div className='box box-body'>
				<div className='box box-header'>
					<h3 classNam='box-title'>Albums</h3>
				</div>

				<div className='box-tools'>
					<button
						type='button'
						className='btn btn-box-tool'
						name='albums'
					>Album List
					</button>
					<button
						type='button'
						className='btn btn-box-tool'
						name='create-albums'
					>Create Albums
					</button>
				</div>




			</div>
		</Fragment>
	);
};

export default Albums;