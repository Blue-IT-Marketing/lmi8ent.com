import React, { Fragment, useState, useEffect, useContext } from 'react';
import UploadMusic from './UploadMusic';
import ListMusic from './ListMusic';
import { CreateAlbums, ListAlbums } from './Albums';

const Music = () => {
    const [display,setDisplay] = useState('upload-music')
	return (
		<Fragment>
			<div className="box box-body">
				<div className="box box-header">
					<h3 classNam="box-title">Music</h3>

					<div className="box-tools">
						<button
							type="button"
							className="btn btn-box-tool"
                            name="upload-music"
                            onClick = {e => setDisplay(e.target.name)}
						>
                            Upload Music
						</button>
						<button
							type="button"
							className="btn btn-box-tool"
                            name="list-music"
                            onClick = {e => setDisplay(e.target.name)}
						>
              List Music
						</button>
						<button
							type="button"
							className="btn btn-box-tool"
                            name="create-albums"
                            onClick = {e => setDisplay(e.target.name)}
						>
              Create Albums
						</button>
						<button
							type="button"
							className="btn btn-box-tool"
                            name="list-albums"
                            onClick = {e => setDisplay(e.target.name)}
						>
              List Albums
						</button>
					</div>
				</div>


                {display === 'upload-music' ? <UploadMusic /> : null}
                {display === 'list-music' ? <ListMusic /> : null}
                {display === 'create-albums' ? <CreateAlbums /> : null }
                {display === 'list-albums' ? <ListAlbums /> : null}

			</div>
		</Fragment>
	);
};



export default Music;