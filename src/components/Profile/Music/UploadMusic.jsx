import React,{Fragment,useState,useEffect,useContext} from 'react';
import {
	music_file_type
} from '../profile.types';

import * as profile_api from '../profile.api';

import {UserAccountContext} from '../../../context/UserAccount/userAccountContext';

const UploadMusic = () => {
	
	const [albums,setAlbums] = useState([]);
	const [music,setMusic] = useState(music_file_type);
	const [inline,setInline] = useState({message: '', message_type:'inf'});

	const {user_account_state} = useContext(UserAccountContext);

	useEffect(() => {
		const fetchAlbums = async () => {
			const uid = user_account_state.user_account.uid;

			await profile_api.load_albums(uid).then(response => {
				if (response.status){
					setAlbums(response.payload);
				}
				setAlbums([]);
			}).catch(error => {
				setInline({message:error.message,message_type:'error'});
			});

			return true;
		};

		fetchAlbums().then(results => {
			console.log(results);
		});
	  return () => {
		setAlbums([]);
	  };
	}, []);

	return (
		<Fragment>
			<div className="box box-body">
				<div className="box box-header">
					<h3 className="box-title">
						<strong>
							<i className="fa fa-soundcloud"> </i> Uploading Music Files
						</strong>
					</h3>
				</div>
				<div className="box-footer">
					<form className="form-horizontal">
						<div className="form-group">
							<label>Music Title</label>
							<input
								type="text"
								className="form-control"
								placeholder="Music Title..."
							/>
						</div>
						<div className="form-group">
							<label>Description</label>
							<textarea
								className="form-control"
								placeholder="Describe your music..."
							/>
						</div>
						<div className="form-group">
							<label>Music File</label>
							<input
								type="file"
								className="form-control"
								name="upload-file"
							/>
						</div>
						<div className="form-group">
							<label>Music Art</label>
							<input 
								type='file'
								className='form-control'
								name='upload-album-art'
							/>
						</div>

						<div className='form-group'>
							<label>Select Album</label>
							<select
								className='form-control'
								name='album_id'
								onChange = {e => setMusic({...music,[e.target.name] : e.target.value})}
							>
								{albums.map(album =>  <option value={album.album_id}> {album.album_name} </option>)}								
							</select>
						</div>
						<div className="form-group">
							<button
								type="button"
								className="btn btn-success btn-lg"
								name="upload-music"
							>
								<strong>
									<i className="fa fa-cloud-upload"> </i>
                 				 Upload
								</strong>
							</button>
							<button type="button" className="btn btn-warning btn-lg">
								<strong>
									{" "}
									<i className="fa fa-eraser"> </i> Reset{" "}
								</strong>
							</button>
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default UploadMusic;
