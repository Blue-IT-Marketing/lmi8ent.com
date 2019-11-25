import React, { Fragment, useState, useEffect, useContext } from 'react';

import * as profile_api from '../profile.api';

import {UserAccountContext} from '../../../context/UserAccount/userAccountContext';

const MusicItem = ({music_file}) => {

    

	return(
		<Fragment>
			<tr>
				<td>{music_file.filename}</td>
				<td>{music_file.description}</td>
				<td>{music_file.size}</td>
				<td>{music_file.playtime}</td>
			</tr>
		</Fragment>
	);
};
const ListMusic = () => {
	const [music_files,setMusicFiles] = useState([]);
	const { user_account_state } = useContext(UserAccountContext);
	useEffect(() => {
      
		const fetchMusicAPI = async () => {
			const uid = user_account_state.user_account.uid;
			await profile_api.load_music_files(uid).then(response => {
				if(response.status){
					setMusicFiles(response.payload);
				}
				setMusicFiles([]);
                
			}).catch(error => {
				console.log(error);
			});

			return true;
		};

		fetchMusicAPI().then(results => console.log('music fetched'));
		return () => {
			setMusicFiles([]);
		};
	}, []);
	return (
		<Fragment>
			<div className="box box-body">
				<div className="box box-header">
					<h3 classNam="box-title"> Music </h3>
				</div>

				<table className='table table-responsive'>
					<thead>
						<tr>
							<td>filename</td>
							<td>description</td>
							<td>size</td>
							<td>playtime</td>                            
						</tr>
					</thead>
					<tbody>
						{music_files.map(music_file => <ListMusic music_file={music_file} />)}
					</tbody>
					<tfoot>
						<tr>
							<td>filename</td>
							<td>description</td>
							<td>size</td>
							<td>playtime</td>                            
						</tr>

					</tfoot>

				</table>
				
			</div>
		</Fragment>
	);
};

export default ListMusic;
