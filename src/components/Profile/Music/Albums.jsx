import React, { Fragment, useState, useEffect, useContext } from 'react';


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