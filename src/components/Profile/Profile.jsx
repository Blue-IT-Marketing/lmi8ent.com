import React, { Fragment,useState } from 'react';
import UploadMusic from './Music/UploadMusic';
import Music from './Music/Music';

import UploadVideos from './UploadVideos';

export default function Profile (){
	const[display,setDisplay] = useState('music');
	return (
		<Fragment>
			<div className="box box-body">
				<div className="box box-header">
					<h3 className="box-title">
						<strong>
							{' '}
							<i className="fa fa-user"> </i> Profile Manager
						</strong>
					</h3>

					<div className="box-tools">
						<button
							type="button"
							className="btn btn-box-tool"
							name="music"
							onClick={() => setDisplay('music')}
						>
							<strong>
								<i className="fa fa-soundcloud"> </i>
                			Music
							</strong>
						</button>
						<button
							type="button"
							className="btn btn-box-tool"
							name="videos"
							onClick={() => setDisplay('videos')}
						>
							<strong>
								<i className="fa fa-youtube-play"> </i>
                			Videos
							</strong>
						</button>
					</div>
				</div>

				{display === 'music' ? <Music /> : ''}
				{display === 'videos' ? <UploadVideos /> : ''}
			</div>
		</Fragment>
	);
}
