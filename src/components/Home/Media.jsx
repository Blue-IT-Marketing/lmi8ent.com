// eslint-disable-next-line no-unused-vars
import React,{Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import { routes } from '../../constants';
import {chunk} from 'lodash';

// eslint-disable-next-line no-unused-vars
const ShowVideo = () => {
	return(
		<Fragment>
			<div className='box box-body'>
				<div className='box box-header'>
					<h3 className='box-title'></h3>
				</div>                
			</div>
		</Fragment>
	);
};
// eslint-disable-next-line no-unused-vars
const ShowMusic = ({media}) => {
	return (
		<Fragment>
			<div className="box box-body">
				<div className="box box-header">
					<h3 className="box-title">
						<i className='fa fa-music'> </i>  
						{' '}{media.title}
					</h3>
				</div>

			</div>
		</Fragment>
	);
};
// eslint-disable-next-line no-unused-vars
const MediaItem = ({mediaItem}) => {
	const[media,setMedia] = useState({
		uid : '',
		mediaid : '',
		mediatype:'',
		title: '',
		description : '',
		media_file : ''
	});
    
	useEffect(() => {
		setMedia({
			...mediaItem
		});
	}, [mediaItem]);
    
	console.log('Media Item Called',mediaItem);
	return (
		<Fragment>
			{media.mediatype === 'music' ? <ShowMusic media={media} /> : ''}
			{media.mediatype === 'video' ? <ShowVideo media={media} /> : ''}
		</Fragment>
	);
};


const initState = [
	{
		uid: '32427942834',
		mediaid: '423423',
		mediatype: 'music',
		title: 'redemption song',
		description: 'bob marley the wailers song about freedom',
		media_file: ''
	},{
		uid: '32427942834',
		mediaid: '423423',
		mediatype: 'music',
		title: 'Yellow',
		description: 'Country Music',
		media_file: ''

	}
];

// eslint-disable-next-line no-unused-vars
const Media = () => {
	const[mediaFiles,setMediafiles] = useState(initState);
    
	useEffect(() => {
        
		axios.get(routes.media_files).then(result => {
			if(result.status === 200){
				return result.data;
			}else{
				throw new Error('there was an error retrieving media files');
			}
		}).then(media_files => {
			setMediafiles({
				mediaFiles: media_files
			});
		}).catch(e => {
			console.log('Error loading media files',e);			
		});
	}, []);

	const mediafilesChunks = chunk(mediaFiles, 4);
	return (
		<Fragment>
			<div className="box box-body">
				<div className="box box-header">
					<h3 className="box-title">
						<i className="fa fa-medium"> </i> Media
					</h3>
				</div>
				{mediafilesChunks.map((mediaFiles,index1) => {
					return(
					
						<div className='row'>
							{
								mediaFiles.map((mediaItem, index) => {
									return (
										<div className="col-lg-3">
											<MediaItem
												mediaItem={
													mediaItem
												}
												key={
													mediaItem.mediaid
												}
											/>
                                        ;
										</div>
									);
									
								})
							}
						</div>
					);					
				})
				}

			</div>
		</Fragment>
	);
};

export default Media;
