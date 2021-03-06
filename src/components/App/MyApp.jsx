/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Fragment,createContext,useReducer,useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {routes} from '../../constants';
// eslint-disable-next-line no-unused-vars
import Header from '../Layout/Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Login from '../Auth/Login/Login';
import Logout from '../Auth/Logout/Logout';
import Signup from '../Auth/Signup/Signup';
// eslint-disable-next-line no-unused-vars
import SideBar from '../Layout/SideBar/SideBar';
// eslint-disable-next-line no-unused-vars
import Footer from '../Layout/Footer/Footer';
import Forget from '../Auth/Forget/Forget';


// eslint-disable-next-line no-unused-vars
import UserAccountContextProvider from '../../context/UserAccount/userAccountContext';
import NewsContextProvider from '../../context/Newsfeed';
import SocketContextProvider from '../../context/SocketsIO';
import Dashboard from '../Dashboard/Dashboard';
import Blog from '../Blog/Blog';
import Account from '../Account/Account';
import Profile from '../Profile/Profile';
import Profiles from '../Profile/Profiles';
import Chat from '../Chat/Chat';




export default function App () {
	
	return (
		
		<UserAccountContextProvider>
			<NewsContextProvider>
				<SocketContextProvider>
					<Fragment>
						<Router>
							{/* Header  Component*/}
							<Header />
							{/* Sidebar Component */}
							<SideBar />
							{/* Body and Main Page Routes */}
							<div className="content-wrapper">
								<section className="content-header">
									<section className="content">
										<Route exact path={routes.home_page} component={Home} />
										<Route exact path={routes.about_page} component={About} />
										<Route exact path={routes.contact_page} component={Contact} />
										<Route path={routes.login_page} component={Login} />
										<Route path={routes.logout_page} component={Logout} />
										<Route path={routes.signup_page} component={Signup} />
										<Route path={routes.forget_password_page} component={Forget} />
										<Route path={routes.blog_page} component={Blog} />
										<Route path={routes.chat_page} component={Chat} />
										<Route path={routes.dashboard_page} component={Dashboard} />

										<Route path={routes.profiles} component={Profiles} />
								
										<Route path={routes.artist_profile} component={Profile}/>
										<Route exact path={routes.admin_page} component={Account} />
									</section>
								</section>
							</div>
							{/* Footer Component  */}
							<Footer />
						</Router>
					</Fragment>
				</SocketContextProvider>
			</NewsContextProvider>
		</UserAccountContextProvider>
	);
}
