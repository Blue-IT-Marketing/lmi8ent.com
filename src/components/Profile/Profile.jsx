import React, { Fragment,useState } from 'react';
import UploadMusic from './Music/UploadMusic';
import Music from './Music/Music';

import UploadVideos from './UploadVideos';

export default function Profile (){
	const [displayMenu, setMenu] = useState({ menu: false });
	const[display,setDisplay] = useState('music');
	const showDropdownMenu = e => {
		e.preventDefault();
		setMenu({ menu: true });
		document.addEventListener('click', hideDropdownMenu);
	};

	const hideDropdownMenu = () => {
		setMenu({ menu: false });
		document.removeEventListener('click', hideDropdownMenu);
	};

	return (
		<Fragment>
			<div className="box box-body">
				<div className="box box-header">
					<h3 className="box-title">
						<strong>
							{' '}
							<i className="fa fa-file-sound-o"> </i> Media Manager
						</strong>
					</h3>

					<div className="box-tools">

						<div className="dropdown">
							<button
								type="button"
								className="btn btn-box-tool dropdown-toggle"
								onClick={e => showDropdownMenu(e)}
							>
								<i className="fa fa-bars"> </i>{' '}
							</button>
							{displayMenu.menu ? (
								<ul className="dropmenu">
									<li
										className="btn btn-block droplink"
										name="music"
										onClick={() => setDisplay('music')}
									>
										<i className="fa fa-soundcloud"> </i> Music{' '}
									</li>

									<li
										className="btn btn-block droplink"
										name="videos"
										onClick={() => setDisplay('videos')}
									>
										<i className="fa fa-youtube-play"> </i> Videos{' '}
									</li>
								</ul>
							):null
						}

					</div>
					</div>
				</div>

				{display === 'music' ? <Music /> : ''}
				{display === 'videos' ? <UploadVideos /> : ''}
			</div>
		</Fragment>
	);
}
