import React, { Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import AdSense from "react-adsense";
import {settings, routes} from '../../constants';
import Media from './Media';
import logo_url from '../../assets/logos/logo.PNG';
import './Home.css';

export default function Home (){
	
	return (
    <Fragment>
      <div className="box box-body">
        <div className="box-header">
          <Link to={routes.home_page}>
            <img
              className="home-logo"
              src={logo_url}
              height="25"
              width="120"
            />
          </Link>
          <div className="box-tools">
            <span>
              <strong>{settings.app_long_name}</strong>
            </span>
          </div>
        </div>
        <div className='box box-footer'>
          <Media />
        </div>
      </div>
    </Fragment>
  );
}
