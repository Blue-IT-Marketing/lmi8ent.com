import React, { Fragment } from 'react';
import {settings} from '../../constants';

export default function Home (){
	
	return (
		<Fragment>
			<div className='box box-body'>
				<div className='box-header'>
					<h3 className='box-title'><strong> {settings.app_name}</strong></h3>
					<div className='box-tools'>
						<span><strong>{settings.app_long_name}</strong></span>
					</div>
				</div>

			
			</div>
		</Fragment>    
	);
}
