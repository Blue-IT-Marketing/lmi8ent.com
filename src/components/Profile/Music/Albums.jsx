/* eslint-disable no-console */
import React, { Fragment, useState, useEffect, useContext } from 'react';
import {
	album_file_type,
	album_file_errors_type
} from '../profile.types';

import * as profile_api from '../profile.api';

import {Utils} from '../../../utilities';

import {UserAccountContext} from '../../../context/UserAccount/userAccountContext';
import InlineMessage from '../../Forms/InlineMessage';
import InlineError from '../../Forms/InlineError';

export const CreateAlbums = () => {
	const [album,setAlbum] = useState(album_file_type);
	const [errors, setErrors] = useState(album_file_errors_type);
	const [inline,setInline] = useState({message:'',message_type:'inf'});

	const {user_account_state} = useContext(UserAccountContext);
	const uid = user_account_state.user_account.uid;
	const onCheckErrors = async () => {
		
		let isError = false;

		const check_album_name = () => {
			if(Utils.isEmpty(album.album_name)){
				setErrors({...errors,album_name_error : 'album name cannot be empty'});
				return true;
			}
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

		(await check_album_name()) ? (isError = true) : (isError = isError);
		await check_description() ? (isError = true) : (isError = isError);
		(await check_genre()) ? (isError = true) : (isError = isError);

		return isError;
	};

	const doCreateAlbum = async () => {
		
		await profile_api.create_album(uid,album).then(response => {
			if(response.status === 200){
				setAlbum(response.payload);				
			}else{
				setInline({message:response.error.message,message_type:'error'});
			}
		}).catch(error => {
			setInline({message:error.message,message_type:'error'});
		});
		return true;
	};

	useEffect(() => {
		setAlbum({...album_file_type,uid});	
		return () => {
			setAlbum({ ...album_file_type, uid : '' });
		};
	}, []);

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
						{errors.album_name_error ? <InlineError message={errors.album_name_error} /> : null}
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
						{errors.description_error ? <InlineError message={errors.description_error} /> : null}
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
						{errors.genre_error ? <InlineError message={errors.genre_error} /> : null}
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
									console.log('response : ',response);
								}).catch(error => {
									setInline({message:error.message,message_type:'error'});
								});
							}).catch(error => {
								setInline({ message: error.message, message_type: 'error' });
							})}
						>Add Album
						</button>

						<button
							type='button'
							className='btn btn-warning btn-lg'
							name='reset'
							onClick={e => {
								setErrors(album_file_errors_type);
								setAlbum({...album_file_type,uid});
								setInline({message:'',message_type:'inf'});
							}}

						>Reset
						</button>
					</div>		
					<div className='form-group'>
						{inline.message ? <InlineMessage message={inline.message} message_type={inline.message_type} /> : null}
					</div>							
				</form>

			</div>
		</Fragment>
	);
};


export const ListAlbums = () => {
	return(
		<Fragment>
			<div className='box box-body'>
				<div className='box box-header'>
					<h3 className='box-title'> Album List</h3>
				</div>

				<table className='table table-responsive'>
					<thead>
						<tr>
							<td>Album Name</td>
							<td>Description</td>
							<td>Genre</td>
							<td></td>
						</tr>
					</thead>
				</table>
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