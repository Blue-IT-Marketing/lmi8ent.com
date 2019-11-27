import React, { Fragment, useState, useEffect, useContext } from 'react';
import UploadMusic from './UploadMusic';
import ListMusic from './ListMusic';
import { CreateAlbums, ListAlbums } from './Albums';

const Music = () => {
	const [displayMenu, setMenu] = useState({ menu: false });
	const [display, setDisplay] = useState('upload-music');
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
				<div className="box-header">
					<h3 className="box-title"> <i className='fa fa-music'> </i> Music</h3>

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
										name="upload-music"
										onClick={e => setDisplay(e.target.name)}
									>
										<i className="fa fa-soundcloud"> </i> Add Music{' '}
									</li>
									<li
										className="btn btn-block droplink"
										name="list-music"
										onClick={e => setDisplay('list-music')}
									>
										<i className="fa fa-soundcloud"> </i> List Music{' '}
									</li>
									<li
										className="btn btn-block droplink"
										name="create-albums"
										onClick={e => setDisplay('create-albums')}
									>
										<i className="fa fa-music"> </i> Create Albums{' '}
									</li>

									<li
										className="btn btn-block droplink"
										name="list-albums"
										onClick={e => setDisplay('list-albums')}
									>
										<i className="fa fa-music"> </i> List Albums{' '}
									</li>
								</ul>
							) : null}
						</div>
					</div>
				</div>

				{display === 'upload-music' ? <UploadMusic /> : null}
				{display === 'list-music' ? <ListMusic /> : null}
				{display === 'create-albums' ? <CreateAlbums /> : null}
				{display === 'list-albums' ? <ListAlbums /> : null}
			</div>
		</Fragment>
	);
};



export default Music;